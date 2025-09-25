import { CheckCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  showSuccessAlert?: boolean;
  onCloseAlert?: () => void;
}

export default function OnboardingLayout({
  children,
  currentStep,
  showSuccessAlert = false,
  onCloseAlert,
}: OnboardingLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <CheckCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground">
              Welcome to CRMPro
            </h1>
          </div>
          <div className="text-sm text-muted-foreground">
            Step {currentStep} of 3
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 flex gap-1">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={cn(
                "h-1 flex-1 rounded-full",
                step <= currentStep ? "bg-primary" : "bg-muted",
              )}
            />
          ))}
        </div>

        {/* Success Alert */}
        {showSuccessAlert && (
          <div className="mb-6 flex items-start gap-3 rounded-md border border-primary bg-primary/10 p-4">
            <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground">
                Success!
              </h3>
              <p className="text-sm text-muted-foreground">
                Welcome aboard! Your account has been set up successfully.
              </p>
            </div>
            {onCloseAlert && (
              <button
                onClick={onCloseAlert}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="rounded-lg border border-border bg-card shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
