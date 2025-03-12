import { Covered_By_Your_Grace } from "next/font/google";
import { cn } from "@/lib/utils";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

export const WhyUseDirectMail = () => {
  return (
    <section className="bg-[#F3FAFA] pt-[103px] pb-[100px]">
      <h2 className="font-bold tracking-tight leading-[1.25] text-[3.9375rem] text-center">
        Why use direct mail? <br />
        It{" "}
        <span
          className={cn(
            "text-[#009387] font-normal",
            coveredByYourGrace.className
          )}
        >
          works
        </span>{" "}
        like crazy.
      </h2>
      <div className="flex justify-between max-w-[1024px] mx-auto mt-[55px]">
        <div className="max-w-[220px] flex flex-col justify-center items-center">
          <div className="font-bold text-[3.9375rem]">28X</div>
          <div className="text-sm text-[#58595D] text-center">
            Higher response rate than email & digital
          </div>
        </div>
        <div className="max-w-[228px] flex flex-col items-center">
          <div className="flex items-end space-x-3">
            <div className="inline-flex flex-col pt-[135px] text-center px-5 py-1 rounded-xl border border-b-4 border-r-4 border-black bg-[#FF6D2C] text-white">
              <div className="text-xl font-bold">90%</div>
              <div className="text-xs"> Direct mail</div>
            </div>

            <div className="inline-flex flex-col justify-end pt-[1px] text-center px-6 py-1 rounded-xl border border-b-4 border-r-4 border-black bg-[#E0F8F2]">
              <div className="text-xl font-bold">20%</div>
              <div className="text-xs">Email</div>
            </div>
          </div>
          <div className="text-center text-sm text-[#58595D] mt-[15px]">Your messages get read</div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-bold text-[3.9375rem]">17 Days</div>
          <div className="max-w-[228px] mx-auto text-center text-sm text-[#58595D]">Lifespan of a postcard vs. seconds for email or SMS</div>
        </div>
      </div>
    </section>
  );
};
