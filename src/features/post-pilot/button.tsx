import { cn } from "@/lib/utils";

export const Button = ({className, children }: { className?: string, children: React.ReactNode }) => {
  return <button className={cn("inline-flex justify-center items-center px-6 py-3 rounded-2xl border border-b-4 border-r-4 border-black bg-white",className)}>{children}</button>;
};
