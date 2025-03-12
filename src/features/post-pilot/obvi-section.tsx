import Image from "next/image";
import { Button } from "./button";
import { TitleOutstand } from "./title-outstand";

export const ObviSection = () => {
  return (
    <section className="bg-[#EEECFF] pt-[90px] pb-[96px]">
      <div className="max-w-[1245px] mx-auto flex gap-[0px] justify-center">
        <div className="flex-1">
          <Image
            src="/post-pilot/obvi-01.png"
            width={613}
            height={601}
            alt=""
          />
        </div>
        <div className="flex-1 pl-16">
          <h2 className="max-w-[576px] font-bold text-[3.9375rem] leading-[1.17] tracking-tight">
            How <TitleOutstand className="font-normal">Obvi</TitleOutstand>{" "}
            Drives
            <br />
            Profits with Hands-
            <br />
            Off Postcard Campaigns
          </h2>
          <p className="max-w-[566px] text-xl mt-[35px] leading-[1.8]">
            The 🚀 supplements brand wanted to offset high ad costs and reach
            dormant customers. They scored 1000%+ ROIs.
          </p>
          <div className="max-w-[566px] flex justify-between mt-[40px]">
            <div>
              <div className="font-bold text-[34px] tracking-tight leading-none">
                1468%
              </div>
              <div className="leading-none mt-1">ROI</div>
            </div>
            <div>
              <div className="font-bold text-[34px] tracking-tight leading-none">
                8.59%
              </div>
              <div className="text-sm leading-none mt-1">Conversion Rate</div>
            </div>
            <div>
              <div className="font-bold text-[34px] tracking-tight leading-none">
                $73,457
              </div>
              <div className="text-sm leading-none mt-1">Sales Generated</div>
            </div>
          </div>
          <Button className="min-w-[235px] min-h-[67px] font-bold uppercase text-sm mt-[52px] ">
            Read Case study
          </Button>
        </div>
      </div>
      <div className="max-w-[1290px] mx-auto flex mt-[30px] pl-[30px]">
        <div className="flex-1"></div>
        <div className="flex-1">
          <button className="px-6 py-5 border-b-2 border-[#009387]">
            <Image
              src="/post-pilot/obvi-tab-01.png"
              width={63}
              height={28}
              alt=""
            />
          </button>
          <button className="px-6 py-5 border-b-2 border-[#009387]">
            <Image
              src="/post-pilot/obvi-tab-02.png"
              width={143}
              height={28}
              alt=""
            />
          </button>
          <button className="px-6 py-5 border-b-2 border-[#009387]">
            <Image
              src="/post-pilot/obvi-tab-03.png"
              width={67}
              height={28}
              alt=""
            />
          </button>
          <button className="px-6 py-5 border-b-2 border-[#009387]">
            <Image
              src="/post-pilot/obvi-tab-04.png"
              width={165}
              height={28}
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};
