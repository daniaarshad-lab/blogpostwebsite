import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArticleCard } from "@/components/ArticleCard";
import { supabase } from "@/integrations/supabase/client";
import { Search, Loader2 } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string | null;
  author_name: string;
  published_at: string;
  tags: string[];
  image_url: string | null;
}

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const allTags = Array.from(new Set(articles.flatMap(article => article.tags || [])));
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (article.excerpt?.toLowerCase() || '').includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || (article.tags || []).includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  // Transform data for ArticleCard component
  const transformedArticles = filteredArticles.map(article => ({
    id: article.id,
    title: article.title,
    excerpt: article.excerpt || '',
    author: article.author_name,
    publishDate: new Date(article.published_at).toLocaleDateString(),
    readTime: `${Math.ceil((article.excerpt?.length || 0) / 200)} min read`,
    tags: article.tags || [],
    imageUrl: article.image_url || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
  }));
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Technology Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest insights, tutorials, and trends in technology
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Badge
              variant={selectedTag === null ? "default" : "secondary"}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelectedTag(null)}
            >
              All
            </Badge>
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "secondary"}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Articles Grid */}
        {loading ? (
          <div className="text-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading articles...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transformedArticles.map(article => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
            
            {transformedArticles.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {articles.length === 0 
                    ? "No articles have been published yet." 
                    : "No articles found matching your criteria."
                  }
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}