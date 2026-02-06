import { SEOHead } from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Info, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Disclaimer - TechBlog"
        description="Important disclaimers regarding the content and services provided by TechBlog."
        url="https://techblog.com/disclaimer"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Disclaimer</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Disclaimer
            </h1>
            <p className="text-lg text-muted-foreground">
              Important information about our content and services
            </p>
          </div>

          <div className="grid gap-6 mb-8 animate-fade-in [animation-delay:0.2s]">
            <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                      Educational Content Only
                    </h3>
                    <p className="text-amber-700 dark:text-amber-300 text-sm">
                      All content on TechBlog is provided for educational and informational purposes only. 
                      Always verify information and test code in safe environments before production use.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      No Professional Advice
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Content should not be considered as professional, legal, or financial advice. 
                      Consult with qualified professionals for specific guidance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Use at Your Own Risk
                    </h3>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Test all code and implementations thoroughly in development environments 
                      before deploying to production systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none animate-fade-in [animation-delay:0.4s]">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Content Accuracy</h2>
                <p className="text-muted-foreground">
                  While we strive to provide accurate and up-to-date information, we make no 
                  representations or warranties of any kind about the completeness, accuracy, 
                  reliability, or suitability of the content. Technology evolves rapidly, and 
                  information may become outdated.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Third-Party Content</h2>
                <p className="text-muted-foreground mb-4">
                  TechBlog may contain links to external websites and third-party content. 
                  We are not responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The accuracy or reliability of external content</li>
                  <li>The availability of external websites</li>
                  <li>The security practices of third-party sites</li>
                  <li>Any damages resulting from accessing external links</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Code Examples and Tutorials</h2>
                <p className="text-muted-foreground mb-4">
                  All code examples, tutorials, and technical content are provided "as is" without 
                  warranty of any kind. Users should:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Test code thoroughly before implementation</li>
                  <li>Understand security implications</li>
                  <li>Follow best practices for their specific environment</li>
                  <li>Backup systems before making changes</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. User-Generated Content</h2>
                <p className="text-muted-foreground">
                  Articles and comments are created by various contributors. Views expressed by 
                  users do not necessarily reflect the opinions of TechBlog. We moderate content 
                  but cannot guarantee the accuracy or appropriateness of all user contributions.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Technical Recommendations</h2>
                <p className="text-muted-foreground">
                  Technology recommendations are based on general best practices and may not be 
                  suitable for all situations. Consider your specific requirements, constraints, 
                  and environment before implementing any suggestions.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  TechBlog and its contributors shall not be liable for any direct, indirect, 
                  incidental, consequential, or punitive damages arising from the use of this 
                  website or its content, including but not limited to data loss, system downtime, 
                  or business interruption.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Professional Consultation</h2>
                <p className="text-muted-foreground">
                  For critical systems, production environments, or complex implementations, 
                  we strongly recommend consulting with qualified professionals who can assess 
                  your specific needs and provide tailored solutions.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Updates and Changes</h2>
                <p className="text-muted-foreground">
                  This disclaimer may be updated periodically to reflect changes in our practices 
                  or legal requirements. Please review this page regularly for any updates.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this disclaimer or need clarification on any content, 
                  please contact us:
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm">
                    <strong>Email:</strong> info@techblog.com<br />
                    <strong>Support:</strong> support@techblog.com
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

export default Disclaimer;