import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const helvetica = localFont({
  src: [
    {
      path: "../../font/helvetica-255/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const Badge = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={cn(
        "inline-flex justify-center items-center border border-[#F2F2F2] rounded-full pl-5 pr-[27px] h-[48px] text-sm -tracking-[0.01em]",
        helvetica.className,
        className
      )}
    >
      {children}
    </button>
  );
};
