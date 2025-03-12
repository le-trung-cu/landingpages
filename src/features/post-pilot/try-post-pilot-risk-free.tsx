import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

export const TryPostPilotRiskFree = () => {
  return (
    <section className={cn("bg-[#FF6D2C] text-white", inter.className)}>
      <div className="max-w-[1290px] mx-auto flex">
        <div className="mt-[95px] flex-1">
          <h2 className=" text-[5.06rem] leading-[1.2]">Try PostPilot <br /> Risk-Free</h2>
          <p className="text-xl mt-[18px] -tracking-[0.013em]">
            No contracts. No commitments. Guaranteed results.*
          </p>
          <div>
            <Button className="min-h-[64px] min-w-[190px] mt-[50px] text-black">GET STARTED</Button>
          </div>
          <p className="text-sm mt-[30px]">* for qualified brands with over $1m annual Shopify revenue.</p>
        </div>
        <div className="flex-1">
          <Image
            src="/post-pilot/gallery-img.png"
            width={600}
            height={600}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
