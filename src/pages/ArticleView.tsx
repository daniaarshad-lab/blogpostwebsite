import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

// Mock article data - replace with actual data source
const mockArticle = {
  id: "1",
  title: "The Future of Web Development: Trends to Watch in 2024",
  content: `
# Introduction

The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are emerging that will shape how we build and interact with web applications.

## AI Integration in Development

Artificial Intelligence is no longer just a buzzword in web development. From AI-powered code completion to automated testing, developers are leveraging AI tools to enhance productivity and code quality.

### Key Benefits:
- **Faster Development**: AI tools can generate boilerplate code and suggest optimizations
- **Better Testing**: Automated test generation and bug detection
- **Enhanced User Experience**: Personalized content and intelligent interfaces

## Serverless Architecture Evolution

Serverless computing continues to gain traction, offering developers the ability to focus on code rather than infrastructure management.

### Popular Platforms:
1. **Vercel Functions** - Seamless integration with frontend deployments
2. **AWS Lambda** - Robust and scalable serverless computing
3. **Cloudflare Workers** - Edge computing capabilities

## The Rise of Edge Computing

Edge computing is bringing computation closer to users, resulting in faster load times and better user experiences.

## Performance-First Development

Modern web applications prioritize performance with techniques like:
- Code splitting and lazy loading
- Image optimization and WebP adoption
- Progressive web app (PWA) features
- Advanced caching strategies

## Conclusion

The future of web development is bright and full of opportunities. By staying informed about these trends and continuously learning, developers can build better, faster, and more user-friendly web applications.

Whether you're a seasoned developer or just starting your journey, embracing these trends will help you create exceptional digital experiences that users will love.
  `,
  author: "Sarah Johnson",
  publishDate: "December 15, 2023",
  readTime: "8 min read",
  tags: ["Web Development", "AI", "Trends", "Performance"],
  imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop"
};

export default function ArticleView() {
  const { id } = useParams();
  
  // In a real app, you'd fetch the article based on the ID
  const article = mockArticle;
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Button asChild>
            <Link to="/articles">Back to Articles</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/articles" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Articles</span>
          </Link>
        </Button>
        
        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-card overflow-hidden">
          {article.imageUrl && (
            <div className="aspect-video overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map(tag => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{article.publishDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <Separator className="mb-8" />
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold text-foreground mt-6 mb-3">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground mt-4 mb-2">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- **') && paragraph.includes('**:')) {
                  const [title, description] = paragraph.replace('- **', '').split('**:');
                  return (
                    <li key={index} className="mb-2">
                      <strong className="text-foreground">{title}:</strong>
                      <span className="text-muted-foreground">{description}</span>
                    </li>
                  );
                }
                if (paragraph.match(/^\d+\. \*\*/)) {
                  const [number, title, description] = paragraph.split('**');
                  return (
                    <li key={index} className="mb-2">
                      <strong className="text-foreground">{number.replace(/^\d+\. /, '')}</strong>
                      <span className="text-muted-foreground">{description?.replace(' - ', ' - ')}</span>
                    </li>
                  );
                }
                if (paragraph.trim() === '') {
                  return <br key={index} />;
                }
                
                return (
                  <p key={index} className="text-content-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </article>
        
        {/* Navigation */}
        <div className="mt-8 text-center">
          <Button asChild>
            <Link to="/articles">Read More Articles</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}