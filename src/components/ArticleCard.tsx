import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  imageUrl?: string;
}

export const ArticleCard = ({ 
  id, 
  title, 
  excerpt, 
  author, 
  publishDate, 
  readTime, 
  tags,
  imageUrl 
}: ArticleCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-200 hover:-translate-y-1 overflow-hidden">
      {imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      )}
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Link to={`/article/${id}`} className="block group">
          <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-medium">{author}</span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};