import Image from "next/image";
import { IconArrowLeftGradient } from "./icon-arrow-left-gradient";
import { IconArrowRigthGradient } from "./icon-arrow-rigth-gradient";

export const OurPartnersAndFriends = () => {
  return (
    <section className="text-white pb-[200px]">
      <div className="max-w-[1050px] mx-auto text-white flex justify-between">
        <h2 className=" text-[3.75rem] font-medium mt-[330px] leading-[1.35]">
          Our Partners <br /> & Friends
        </h2>

        <div className=" grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-8">
            <div className="w-[192px] h-[calc(192px/2)] flex justify-center items-start border border-[#415572]">
              <Image
                src="/gravityteam/bithumb@2x.png"
                height={80}
                width={80}
                alt=""
                className=""
              />
            </div>
            <div className="size-[192px] flex justify-center items-center border border-[#415572]">
              <Image
                src="/gravityteam/bitbank@2x.png"
                height={80}
                width={80}
                alt=""
              />
            </div>
            <div className="size-[192px] flex justify-center items-center border border-[#415572]">
              <Image
                src="/gravityteam/binance@2x.png"
                height={80}
                width={80}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-9 mt-[150px]">
            <div className="size-[192px] flex justify-center items-center border border-[#415572]">
              <Image
                src="/gravityteam/bitstamp@2x.png"
                height={80}
                width={80}
                alt=""
              />
            </div>

            <div className="size-[192px] flex justify-center items-center border border-[#415572]">
              <Image
                src="/gravityteam/coinbase@2x.png"
                height={80}
                width={80}
                alt=""
              />
            </div>
            <div className="w-[192px] h-[calc(192px/2)] flex justify-center items-end border border-[#415572]">
              <Image
                src="/gravityteam/bitfinex@2x.png"
                height={80}
                width={80}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto pt-[120px]">
        <h2 className="text-[3.5625rem]">We are in a good company</h2>
        <div className="max-w-[719px] ">
          <p className="text-center text-[1.25rem] max-w-[604px] mx-auto mt-[14px]">
            Our partnerships have delivered great value to our projects and
            we’re happy to share some of their feedback below
          </p>
          <div className="flex justify-center space-x-8 mt-[24px]">
            <button>
              <IconArrowLeftGradient />
            </button>
            <button className="-scale-y-100">
              <IconArrowRigthGradient />
            </button>
          </div>
          <div className="text-center mt-[35px]">
            <p className="text-center text-[1.625rem] max-w-[678px] mx-auto leading-[1.68]">
              Since 2019, Gravity team has been an astounding market maker for
              Bitkub. They have proven themselves to be one of the most
              consistent, committed and driven market makers on our exchange.
              Gravity Team has contributed high-quality volume and has proven to
              be very reliable and trustworthy partner. We strongly advocate
              Gravity Team as they have been an indispensable part of our
              market-making team.
            </p>
            <p className="font-bold text-lg mt-[32px]">
              Atthakrit Chimplapibul
            </p>
            <div className="flex justify-center items-center mt-[15px]">
              <div className="text-sm font-light">
                Co-founder & CEO of Bitkub
              </div>
              <hr className="h-[30px] w-0 pl-2 border-0 border-r border-white ml-[20px] mr-[20px]" />
              <Image
                src="/gravityteam/bitkub-logo-light-trimmed.png"
                width={124}
                height={26}
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center space-x-5 mt-[145px]">
            <div className="linear-background size-2 rounded-full"></div>
            <div className="bg-[#333333] size-2 rounded-full"></div>
            <div className="bg-[#333333] size-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
