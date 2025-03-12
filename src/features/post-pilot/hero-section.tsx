import Image from "next/image";
import { Covered_By_Your_Grace, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

export const HeroSection = () => {
  return (
    <header className="relative bg-[#E0F8F2] pt-[140px] pb-[124px] overflow-clip">
      <div className="max-w-[1280px] mx-auto">
        <h1
          className={cn(
            "font-bold text-[5.152rem] text-[#2E2F35] leading-[1.2]",
            inter.className
          )}
        >
          <span className="block">Meet your</span>
          <span
            className={cn(
              "text-[#009387] font-normal",
              coveredByYourGrace.className
            )}
          >
            favorite
          </span>{" "}
          new (old) <br />
          <span className="block leading-[1]">marketing channel.</span>
        </h1>
        <p
          className={cn(
            "max-w-[570px] mt-[33px] text-xl font-medium -tracking-[0.01em] leading-[1.6]",
            inter.className
          )}
        >
          Remarkable results. Easier than email. Postcard marketing reinvented
          for modern ecommerce.
        </p>
        <div className="flex items-center mt-[50px]">
          <Button className="min-w-[266px] min-h-[66px] bg-[#FF6D2C] text-white uppercase">
            Try it Risk-free
          </Button>
          <div className="ml-[40px]">
            <div className="flex space-x-1.5">
              {[0, 1, 2, 3, 4].map((item) => (
                <svg
                  key={item}
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0469 0.421875L13.1369 6.34616L20.0469 7.302L15.0469 11.9109L16.2269 18.4219L10.0469 15.3462L3.86688 18.4219L5.04688 11.9109L0.046875 7.302L6.95687 6.34616L10.0469 0.421875Z"
                    fill="#FDC639"
                  />
                </svg>
              ))}
            </div>
            <div>5.0 Shopify Rating</div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-[550px]">
        <Image
          src="/post-pilot/hero-1-p-1600.png"
          width={680}
          height={680}
          alt=""
          className="absolute translate-y-[75px] translate-x-[10px]"
        />
        <Image
          src="/post-pilot/hero-1b-p-1600.png"
          width={680}
          height={680}
          alt=""
          className="absolute bottom-0 translate-x-[10px]"
        />
      </div>
    </header>
  );
};
