import Image from "next/image";
import { TitleOutstand } from "./title-outstand";
import { cn } from "@/lib/utils";

export const EverythingYourBrandNeeds = () => {
  return (
    <section className="pt-[100px] pb-[99px]">
      <h2 className="text-center text-[64px] font-bold tracking-tight ">
        <span className="block">Everything your brand needs to</span>
        <TitleOutstand className="block leading-none">make your brand unforgettable</TitleOutstand>
      </h2>
      <div className="max-w-[1290px] mx-auto grid grid-cols-3 gap-7 mt-[85px]">
        {dataBrands.map((item) => (
          <BrandItem
            key={item.title}
            className={item.bg}
            img={`/post-pilot/${item.img}`}
            title={item.title}
            desc={item.decs}
            width={item.width}
            height={item.height}
          />
        ))}
      </div>
    </section>
  );
};

const BrandItem = ({
  className,
  img,
  title,
  desc,
  width,
  height,
}: {
  className?: string;
  img: string;
  title: string;
  desc: string;
  width: number;
  height: number
}) => {
  return (
    <div className={cn("rounded-2xl flex flex-col items-center px-7 pt-10 pb-[52px]", className)}>
      <div className="relative w-full flex justify-center">
        <Image src={img} width={width} height={height} alt="" />
      </div>
      <h5 className="font-bold text-center text-[1.75rem] text-[#2E2F35] mt-[40px]">{title}</h5>
      <p className="mt-2 text-center">{desc}</p>
    </div>
  );
};

const dataBrands = [
  {
    bg: "bg-[#FDF3EA]",
    img: "brand-01.png",
    title: "Plug-and-play with your stack",
    decs: "Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.",
    width: 330,
    height: 210,
  },
  {
    bg: "bg-[#E0F8F2]",
    img: "brand-02.png",
    title: "Run campaigns on autopilot",
    decs: "Ink profits while you sleep: Just set it and forget it.",
    width: 308,
    height: 150,
  },
  {
    bg: "bg-[#EEECFF]",
    img: "brand-03.png",
    title: "Real-time ROI dashboard",
    decs: "Track performance of every postcard by customer or discount code. Your CFO will love it.",
    width: 327,
    height: 222,
  },
  {
    bg: "bg-[#D9F2F7]",
    img: "brand-04.png",
    title: "Deliver WOW with *real* handwritten cards",
    decs: "Our proprietary robots use real pens and ink for an unforgettable VIP touch.",
    width: 309,
    height: 220,
  },
  {
    bg: "bg-[#FAEDED]",
    img: "brand-05.png",
    title: "Predictable pricing",
    decs: "Unlike CPCs, postage rates don’t change based on competition or who you’re targeting.",
    width: 250,
    height: 182,
  },
  {
    bg: "bg-[#F1F1F1]",
    img: "brand-06.png",
    title: "Complimentary concierge service",
    decs: "DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices.",
    width: 300,
    height: 224,
  },
];
