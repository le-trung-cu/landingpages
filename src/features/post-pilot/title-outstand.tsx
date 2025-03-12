import { Covered_By_Your_Grace } from "next/font/google";
import { cn } from "@/lib/utils";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

export const TitleOutstand = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={cn("text-[#009387] inline-block", className, coveredByYourGrace.className)}>
      {children}
    </span>
  );
};
