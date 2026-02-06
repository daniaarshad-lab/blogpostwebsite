import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Edit, Trash2, Check, X, Eye, Loader2 } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string | null;
  author_name: string;
  status: string;
  created_at: string;
  updated_at: string;
  author_id: string;
}

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [articles, setArticles] = useState<Article[]>([]);
  const [reviewArticles, setReviewArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    fetchData();
  }, [user, navigate]);

  const fetchData = async () => {
    if (!user) return;

    try {
      // Fetch user profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();
      setProfile(profileData);

      // Fetch user's articles
      const { data: userArticles } = await supabase
        .from('articles')
        .select('*')
        .eq('author_id', user.id)
        .order('created_at', { ascending: false });

      setArticles(userArticles || []);

      // Fetch articles for review (if user is admin)
      if (profileData?.role === 'admin') {
        const { data: pendingArticles } = await supabase
          .from('articles')
          .select('*')
          .eq('status', 'pending_review')
          .neq('author_id', user.id)
          .order('created_at', { ascending: false });

        setReviewArticles(pendingArticles || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteArticle = async (articleId: string) => {
    setActionLoading(articleId);
    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', articleId);

      if (error) throw error;

      toast({
        title: "Article Deleted",
        description: "The article has been successfully deleted.",
      });

      fetchData();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete article.",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const reviewArticle = async (articleId: string, action: 'approve' | 'reject') => {
    setActionLoading(articleId);
    try {
      const { error } = await supabase
        .from('articles')
        .update({
          status: action === 'approve' ? 'published' : 'rejected',
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString(),
          published_at: action === 'approve' ? new Date().toISOString() : null
        })
        .eq('id', articleId);

      if (error) throw error;

      toast({
        title: `Article ${action === 'approve' ? 'Approved' : 'Rejected'}`,
        description: `The article has been ${action === 'approve' ? 'published' : 'rejected'}.`,
      });

      fetchData();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || `Failed to ${action} article.`,
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      draft: { label: "Draft", variant: "secondary" as const },
      pending_review: { label: "Pending Review", variant: "default" as const },
      published: { label: "Published", variant: "outline" as const },
      rejected: { label: "Rejected", variant: "destructive" as const }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.draft;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Manage your articles and content
          </p>
        </div>

        <Tabs defaultValue="my-articles" className="w-full">
          <TabsList>
            <TabsTrigger value="my-articles">My Articles ({articles.length})</TabsTrigger>
            {profile?.role === 'admin' && (
              <TabsTrigger value="review">
                Review Articles ({reviewArticles.length})
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="my-articles" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Your Articles</h2>
              <Button onClick={() => navigate('/write')}>
                Write New Article
              </Button>
            </div>

            {articles.length === 0 ? (
              <Card>
                <CardContent className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    You haven't written any articles yet.
                  </p>
                  <Button onClick={() => navigate('/write')}>
                    Write Your First Article
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {articles.map((article) => (
                      <TableRow key={article.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{article.title}</p>
                            {article.excerpt && (
                              <p className="text-sm text-muted-foreground truncate max-w-md">
                                {article.excerpt}
                              </p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(article.status)}</TableCell>
                        <TableCell>
                          {new Date(article.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => navigate(`/article/${article.id}`)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => navigate(`/edit/${article.id}`)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Article</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete "{article.title}"? This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => deleteArticle(article.id)}
                                    disabled={actionLoading === article.id}
                                  >
                                    {actionLoading === article.id ? (
                                      <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Deleting...
                                      </>
                                    ) : (
                                      "Delete"
                                    )}
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            )}
          </TabsContent>

          {profile?.role === 'admin' && (
            <TabsContent value="review" className="space-y-4">
              <h2 className="text-2xl font-semibold">Articles Pending Review</h2>

              {reviewArticles.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-8">
                    <p className="text-muted-foreground">
                      No articles pending review.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reviewArticles.map((article) => (
                        <TableRow key={article.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{article.title}</p>
                              {article.excerpt && (
                                <p className="text-sm text-muted-foreground truncate max-w-md">
                                  {article.excerpt}
                                </p>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>{article.author_name}</TableCell>
                          <TableCell>
                            {new Date(article.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => navigate(`/article/${article.id}`)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => reviewArticle(article.id, 'approve')}
                                disabled={actionLoading === article.id}
                              >
                                {actionLoading === article.id ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Check className="h-4 w-4 text-green-600" />
                                )}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => reviewArticle(article.id, 'reject')}
                                disabled={actionLoading === article.id}
                              >
                                <X className="h-4 w-4 text-red-600" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              )}
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
}