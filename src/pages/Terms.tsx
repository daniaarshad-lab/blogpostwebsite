import { SEOHead } from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms of Service - TechBlog"
        description="Read TechBlog's terms of service and understand your rights and responsibilities."
        url="https://techblog.com/terms"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Terms of Service</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none animate-fade-in [animation-delay:0.2s]">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using TechBlog, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily access and use TechBlog for personal, 
                  non-commercial transitory viewing only.
                </p>
                <p className="text-muted-foreground mb-4">This license does not include:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for commercial purposes</li>
                  <li>Attempting to reverse engineer any software</li>
                  <li>Removing copyright or proprietary notations</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
                <p className="text-muted-foreground mb-4">
                  By posting content on TechBlog, you grant us a non-exclusive, royalty-free, 
                  worldwide license to use, display, and distribute your content.
                </p>
                <p className="text-muted-foreground mb-4">You agree that your content:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Is original or you have permission to use it</li>
                  <li>Does not violate any laws or regulations</li>
                  <li>Does not infringe on others' intellectual property</li>
                  <li>Is not spam, malicious, or harmful</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Community Guidelines</h2>
                <p className="text-muted-foreground mb-4">
                  To maintain a positive environment, users must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Be respectful and professional in all interactions</li>
                  <li>Share accurate and helpful information</li>
                  <li>Respect others' intellectual property</li>
                  <li>Report inappropriate content or behavior</li>
                  <li>Follow all applicable laws and regulations</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Prohibited Uses</h2>
                <p className="text-muted-foreground mb-4">
                  You may not use TechBlog for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Illegal or unauthorized purposes</li>
                  <li>Harassment, abuse, or harm to others</li>
                  <li>Spamming or distributing malware</li>
                  <li>Violating others' privacy or rights</li>
                  <li>Impersonating others or providing false information</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
                <p className="text-muted-foreground">
                  The materials on TechBlog are provided on an 'as is' basis. TechBlog makes no 
                  warranties, expressed or implied, and hereby disclaims all other warranties 
                  including, without limitation, implied warranties of merchantability, fitness 
                  for a particular purpose, or non-infringement of intellectual property.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Limitations</h2>
                <p className="text-muted-foreground">
                  In no event shall TechBlog or its suppliers be liable for any damages arising 
                  out of the use or inability to use the materials on TechBlog, even if TechBlog 
                  or an authorized representative has been notified of the possibility of such damage.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Account Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend accounts that violate these terms 
                  or engage in harmful behavior. Users may also delete their accounts at any time 
                  through their account settings.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  TechBlog reserves the right to revise these terms at any time without notice. 
                  By using this service, you agree to be bound by the current version of these terms.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm">
                    <strong>Email:</strong> legal@techblog.com<br />
                    <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;