import { AlertTriangle, Shield, Phone, Mail, Clock, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blockedIcon from "@/assets/blocked-icon.jpg";

const BlockedSite = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={blockedIcon} 
              alt="Site Blocked" 
              className="w-16 h-16 object-contain mr-4"
            />
            <Shield className="w-16 h-16 text-blocked-red" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Website Blocked
          </h1>
          <p className="text-authority-gray text-lg">
            Access to this website has been restricted
          </p>
        </div>

        {/* Main Warning Card */}
        <Card className="border-warning-border border-2 bg-blocked-red-bg mb-6">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-blocked-red flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Site Blocked as per NTA Directives
                </h2>
                <p className="text-foreground mb-4 leading-relaxed">
                  This website has been blocked by your Internet Service Provider in compliance with 
                  directives issued by the Nepal Telecommunications Authority (NTA). Access to this 
                  content is restricted in accordance with applicable laws and regulations.
                </p>
                <div className="bg-card p-4 rounded-lg border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Reason:</strong> Content blocked under regulatory compliance requirements
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Legal Compliance</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                This action is taken in accordance with the Telecommunications Act and 
                directives from the Nepal Telecommunications Authority.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Alternative Access</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                If you believe this block is incorrect, you may appeal through 
                proper channels or contact your ISP for clarification.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-primary" />
              Need Help?
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Customer Support: 1234567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Email: support@yourisp.com.np</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            variant="default" 
            onClick={() => window.history.back()}
            className="flex items-center space-x-2"
          >
            <span>Go Back</span>
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.location.href = 'https://nta.gov.np'}
            className="flex items-center space-x-2"
          >
            <span>Visit NTA Website</span>
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Your ISP Name. Regulated by Nepal Telecommunications Authority (NTA)
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockedSite;