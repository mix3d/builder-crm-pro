import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Users,
  BarChart3,
  MessageSquare,
  Calendar,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Zap,
  Shield,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Building className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  CRMPro
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                About
              </a>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-[50px] bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-dashboard-accent-orange/20 text-dashboard-accent-orange hover:bg-dashboard-accent-orange/30 border-dashboard-accent-orange">
              <Star className="w-3 h-3 mr-1" />
              #1 CRM for Growing Businesses
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Grow Your Business with
              <span className="text-primary block">
                Smart CRM Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Streamline your sales process, nurture customer relationships, and
              boost revenue with our all-in-one CRM platform trusted by 10,000+
              businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link to="/onboarding/step-1">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setShowScheduleDialog(true)}
              >
                Schedule Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary" />
                14-day free trial
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary" />
                No credit card required
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive CRM platform provides all the tools you need to
              manage customers, track sales, and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Contact Management",
                description:
                  "Organize and track all your customer interactions in one centralized place.",
                color: "dashboard-accent-teal",
              },
              {
                icon: BarChart3,
                title: "Sales Analytics",
                description:
                  "Get powerful insights with detailed reports and real-time dashboards.",
                color: "dashboard-accent-orange",
              },
              {
                icon: MessageSquare,
                title: "Communication Hub",
                description:
                  "Manage emails, calls, and messages from a unified interface.",
                color: "dashboard-accent-blue",
              },
              {
                icon: Calendar,
                title: "Task Automation",
                description:
                  "Automate repetitive tasks and never miss a follow-up again.",
                color: "dashboard-accent-pink",
              },
              {
                icon: Mail,
                title: "Email Marketing",
                description:
                  "Create and send targeted email campaigns to nurture leads.",
                color: "dashboard-accent-teal",
              },
              {
                icon: Phone,
                title: "Call Tracking",
                description:
                  "Record and analyze calls to improve your sales performance.",
                color: "dashboard-accent-orange",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "10,000+",
                label: "Active Users",
                color: "dashboard-accent-teal",
              },
              {
                number: "99.9%",
                label: "Uptime",
                color: "dashboard-accent-orange",
              },
              {
                number: "150%",
                label: "ROI Increase",
                color: "dashboard-accent-pink",
              },
              {
                number: "24/7",
                label: "Support",
                color: "dashboard-accent-blue",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                >
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Choose your plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the perfect plan for your needs. You can always upgrade or
              downgrade later.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-2 border-border bg-card">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-foreground">
                  Starter
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Perfect for small teams
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    $29
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Up to 1,000 contacts",
                  "Basic reporting",
                  "Email integration",
                  "Mobile app access",
                  "Community support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
                <Button
                  className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link to="/onboarding/step-1">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan - Most Popular */}
            <Card className="border-2 border-dashboard-accent-teal relative bg-card">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-foreground">
                  Pro
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Best for growing businesses
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    $79
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Up to 10,000 contacts",
                  "Advanced analytics",
                  "Email marketing",
                  "API integrations",
                  "Priority support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
                <Button
                  className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link to="/onboarding/step-1">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-border bg-card">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-foreground">
                  Enterprise
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  For large organizations
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    $199
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Unlimited contacts",
                  "Custom integrations",
                  "Advanced security",
                  "Dedicated support",
                  "Custom training",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
                <Button
                  className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  variant="outline"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Trial Notice */}
          <div className="mt-12 p-6 bg-card rounded-lg border border-border max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center mt-0.5">
                <Clock className="w-3 h-3 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  14-day free trial included
                </h3>
                <p className="text-sm text-muted-foreground">
                  No credit card required. Cancel anytime during your trial
                  period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Join thousands of businesses already using CRMPro to grow their
            revenue and improve customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link to="/onboarding/step-1">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Building className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  CRMPro
                </span>
              </div>
              <p className="text-muted-foreground">
                The modern CRM solution for growing businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 CRMPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Schedule Demo Dialog */}
      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground text-center">
              Schedule Demo
            </DialogTitle>
          </DialogHeader>
          {/* Empty for now - content will be added later */}
          <div className="min-h-[200px] flex items-center justify-center">
            <p className="text-foreground/70">
              Dialog content will be added here
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
