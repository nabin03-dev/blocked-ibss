import { AlertTriangle, Shield, Phone, Mail, Clock, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blockedIcon from "@/assets/blocked-icon.jpg";

const BlockedSite = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-3xl animate-fade-in">
        {/* Header with Prominent Logo */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <img 
                src={blockedIcon} 
                alt="ISP Logo" 
                className="w-32 h-32 object-contain mr-6 animate-logo-glow rounded-xl shadow-2xl"
              />
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-20 h-20 text-blocked-red mb-2 drop-shadow-lg" />
              <div className="w-16 h-1 bg-brand-primary rounded-full"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Website Access Blocked
          </h1>
          <p className="text-authority-gray text-xl font-medium">
            This website has been restricted by regulatory authorities
          </p>
        </div>

        {/* Main Warning Card */}
        <Card className="border-warning-border border-2 bg-blocked-red-bg mb-8 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <AlertTriangle className="w-10 h-10 text-blocked-red flex-shrink-0 mt-1 drop-shadow-md" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  Blocked by NTA Directive
                  <div className="w-2 h-2 bg-brand-accent rounded-full ml-3 animate-pulse"></div>
                </h2>
                <p className="text-foreground mb-6 leading-relaxed text-lg">
                  This website has been blocked by your Internet Service Provider in strict compliance with 
                  directives issued by the <strong>Nepal Telecommunications Authority (NTA)</strong>. Access to this 
                  content is restricted in accordance with applicable laws and regulatory requirements.
                </p>
                <div className="bg-card p-6 rounded-xl border border-brand-primary/20 shadow-inner">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-brand-primary">Legal Basis:</strong> Content blocked under telecommunications regulatory compliance framework
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-300 border-brand-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-brand-primary/10 rounded-full">
                  <FileText className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-bold text-lg">Legal Compliance</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                This action is taken in accordance with the Telecommunications Act and 
                directives from the Nepal Telecommunications Authority for public safety.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-brand-secondary/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-brand-secondary/10 rounded-full">
                  <Clock className="w-6 h-6 text-brand-secondary" />
                </div>
                <h3 className="font-bold text-lg">Appeal Process</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                If you believe this block is incorrect, you may file an appeal through 
                proper regulatory channels or contact your ISP for clarification.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="mb-8 border-brand-accent/20 bg-gradient-to-r from-card to-brand-primary/5">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="p-3 bg-brand-accent/10 rounded-full mr-4">
                <Phone className="w-6 h-6 text-brand-accent" />
              </div>
              Customer Support & Appeals
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-brand-primary" />
                  <span className="font-medium">Hotline: +977-1-XXXXXXX</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-brand-primary" />
                  <span className="font-medium">support@yourisp.com.np</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2"><strong>Business Hours:</strong> 9:00 AM - 6:00 PM (NPT)</p>
                <p><strong>Emergency Support:</strong> 24/7 Technical Assistance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            variant="default" 
            onClick={() => window.history.back()}
            className="flex items-center space-x-3 px-8 py-4 text-lg font-semibold bg-brand-primary hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>← Go Back</span>
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.location.href = 'https://nta.gov.np'}
            className="flex items-center space-x-3 px-8 py-4 text-lg font-semibold border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
          >
            <span>Visit NTA Portal →</span>
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-brand-primary/20">
          <div className="mb-4">
            <img 
              src={blockedIcon} 
              alt="ISP Logo Small" 
              className="w-12 h-12 object-contain mx-auto opacity-60"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your ISP Name • Licensed & Regulated by Nepal Telecommunications Authority (NTA)
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Compliance ID: NTA-2024-{Math.random().toString(36).substr(2, 6).toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockedSite;