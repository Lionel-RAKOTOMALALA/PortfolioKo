import { cn } from "@/lib/utils";

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export function LoadingSpinner({
  size = "md",
  className,
  ...props
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        {
          "h-4 w-4": size === "sm",
          "h-8 w-8": size === "md",
          "h-12 w-12": size === "lg",
        },
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-current border-t-transparent text-primary",
          {
            "h-3 w-3": size === "sm",
            "h-6 w-6": size === "md",
            "h-10 w-10": size === "lg",
          }
        )}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
} 