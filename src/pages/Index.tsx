import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { ArrowRight, BookOpen, PenTool, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-tech-blog.jpg";

const Index = () => {
  const featuredArticles = [
    {
      id: "1",
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends in web development for 2024",
      tags: ["Web Dev", "Trends"]
    },
    {
      id: "2", 
      title: "Building Scalable APIs",
      excerpt: "Modern architecture patterns for robust API design",
      tags: ["APIs", "Architecture"]
    },
    {
      id: "3",
      title: "React Server Components",
      excerpt: "Understanding the next evolution of React applications",
      tags: ["React", "Frontend"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-background to-background py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit animate-scale-in">
                  Tech Insights & Tutorials
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in [animation-delay:0.2s]">
                  Stay Ahead in 
                  <span className="text-primary"> Technology</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in [animation-delay:0.4s]">
                  Discover cutting-edge insights, in-depth tutorials, and industry trends 
                  from expert developers and tech leaders.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:0.6s]">
                <Button size="lg" asChild className="text-lg hover:scale-105 transition-transform">
                  <Link to="/articles" className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Browse Articles</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg hover:scale-105 transition-transform">
                  <Link to="/write" className="flex items-center space-x-2">
                    <PenTool className="h-5 w-5" />
                    <span>Write Article</span>
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in [animation-delay:0.8s]">
              <img 
                src={heroImage} 
                alt="Technology Blog Hero"
                className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose DaTechMind?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your go-to destination for high-quality technical content and insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-hover hover:scale-105 transition-all duration-300 animate-fade-in [animation-delay:0.2s]">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Content</h3>
                <p className="text-muted-foreground">
                  In-depth articles written by industry experts and experienced developers
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-hover hover:scale-105 transition-all duration-300 animate-fade-in [animation-delay:0.4s]">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Latest Trends</h3>
                <p className="text-muted-foreground">
                  Stay updated with the newest technologies and development practices
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-hover hover:scale-105 transition-all duration-300 animate-fade-in [animation-delay:0.6s]">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors">
                  <PenTool className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Share Knowledge</h3>
                <p className="text-muted-foreground">
                  Contribute to the community by sharing your own insights and experiences
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Hand-picked articles from our top contributors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredArticles.map((article, index) => (
              <Card key={article.id} className="hover:shadow-hover hover:scale-105 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {article.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild>
              <Link to="/articles">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Share Your Knowledge?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of developers and tech enthusiasts. 
            Start writing and sharing your expertise today.
          </p>
          <Button size="lg" asChild>
            <Link to="/write" className="flex items-center space-x-2">
              <PenTool className="h-5 w-5" />
              <span>Start Writing</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
