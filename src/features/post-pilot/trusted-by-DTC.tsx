import Image from "next/image"
import { Covered_By_Your_Grace } from "next/font/google";
import { cn } from "@/lib/utils";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

export const TrustedByDTC = () => {
  return (
    <section className="pt-[100px] pb-[97px]">
      <div className="max-w-[1310px] mx-auto">
      <h2 className="font-bold text-[3.9375rem] text-center tracking-tight leading-[1.3]">Trusted by thousands <br /> of top DTC <span className={cn("text-[#009387] font-normal", coveredByYourGrace.className)}>brands.</span></h2>
      <div className="flex justify-between mt-[50px]">
        <div className="flex flex-col items-center">
          <Image src="/post-pilot/dtc-01-a.jpg" width={284} height={193} alt=""/>
          <Image src="/post-pilot/dtc-01-b.png" width={185} height={32} alt="" className="mt-6"/>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/post-pilot/dtc-02-a.jpg" width={284} height={193} alt=""/>
          <Image src="/post-pilot/dtc-02-b.png" width={235} height={32} alt="" className="mt-6"/>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/post-pilot/dtc-03-a.jpg" width={284} height={193} alt=""/>
          <Image src="/post-pilot/dtc-03-b.png" width={166} height={32} alt="" className="mt-6"/>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/post-pilot/dtc-04-a.jpg" width={284} height={193} alt=""/>
          <Image src="/post-pilot/dtc-04-b.png" width={60} height={32} alt="" className="mt-6"/>
        </div>
      </div>
      </div>
     
    </section>
  )
}