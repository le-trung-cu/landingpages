import { cn } from "@/lib/utils";

const aboutServices = [
  {
    title: "~$100 billion",
    desc: "cumulative trading volume to date",
  },
  {
    title: "0.8%",
    desc: "of the global crypto spot trading volume",
  },
  {
    title: "~30",
    desc: "Gravity Teammates (& growing)",
  },
  { title: "25+", desc: "leading global and local crypto exchanges" },
  {
    title: "2017",
    desc: "start, crypto-natives",
  },
  { title: "1,200+", desc: "crypto-asset pairs" },
  { title: "24/7", desc: "liquidity" },
  { title: "5 billion+", desc: "trades done to date" },
];

export const AboutGravityTeam = () => {
  return (
    <section className="text-white flex flex-col items-center pt-[185px] pb-[80px]">
      <h2 className="font-medium text-[3.5rem]">About Gravity Team</h2>
      <p className="text-[#E5E5E5] text-[1.25rem] text-center max-w-[612px] mt-[20px]">
        At Gravity Team, we are on the mission to balance the supply and demand
        across crypto markets worldwide. We are a crypto native market maker
        founded by traders, developers, and innovators who are strong believers
        and supporters of the future of decentralization and digital assets.
      </p>
      <div className="max-w-[1056px] mx-auto grid grid-cols-2 md:grid-cols-4 mt-[65px]">
        {aboutServices.map((item, i) => (
          <div
            key={item.title}
            className={cn(
              "border-blue-50 h-[180px] flex flex-col justify-center items-center text-center hover:text-white hover:bg-[linear-gradient(to_right_bottom,_#665DCD_0%,_#5FA4E6_45%,_#D2AB67_100%)]",
              [0, 2, 4, 6].includes(i) && "border-r",
              i <= 3 && "border-b",
              [1, 5].includes(i) && "md:border-r",
              [4, 5].includes(i) && "border-b md:border-b-0"
            )}
          >
            <h4 className="font-medium text-[2.1rem]">{item.title}</h4>
            <p className="text-center text-[1.18rem] font-extralight text-[#E5E5E5] mt-[10px] px-[32px] ">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
