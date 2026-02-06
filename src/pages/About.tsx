import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Us - TechBlog"
        description="Learn about TechBlog's mission to provide cutting-edge technology insights and connect developers worldwide."
        url="https://techblog.com/about"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">About TechBlog</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Empowering Developers Through Knowledge
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're passionate about sharing cutting-edge technology insights and fostering 
              a community where developers can learn, grow, and innovate together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-hover hover:scale-105 transition-all duration-300 animate-fade-in [animation-delay:0.2s]">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize access to high-quality technical knowledge and create a platform 
                  where developers of all levels can share insights, learn from each other, and 
                  stay ahead of technological trends.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-hover hover:scale-105 transition-all duration-300 animate-fade-in [animation-delay:0.4s]">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  We believe in open knowledge sharing, technical excellence, and building an inclusive 
                  community where every developer feels welcome to contribute and learn from others.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 mb-16 animate-fade-in [animation-delay:0.6s]">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose TechBlog?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Expert Community</h4>
                <p className="text-sm text-muted-foreground">
                  Learn from industry professionals and experienced developers
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Quality Content</h4>
                <p className="text-sm text-muted-foreground">
                  Curated articles with practical insights and real-world applications
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Latest Trends</h4>
                <p className="text-sm text-muted-foreground">
                  Stay updated with emerging technologies and best practices
                </p>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in [animation-delay:0.8s]">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a seasoned developer or just starting your journey, 
              TechBlog is here to support your growth and learning.
            </p>
            <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
              <span>🌟 10,000+ Active Readers</span>
              <span>📚 500+ Quality Articles</span>
              <span>👥 Expert Contributors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;