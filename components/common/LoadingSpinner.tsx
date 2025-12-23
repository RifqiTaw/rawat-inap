import { LoadingSpinnerProps } from "@/types/pasien";
import { Loader2 } from "lucide-react";

export default function LoadingSpinner({
  text = "Loading...",
}: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
      <Loader2 className="h-6 w-6 animate-spin mb-2" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
