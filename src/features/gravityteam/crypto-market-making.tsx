import Image from "next/image";
import Link from "next/link";

export const CryptoMarkerMaking = () => {
  return (
    <section className="max-w-[1056px] mx-auto relative z-10 text-white pt-[42px] pb-[240px]">
      <div>
        <h3 className="text-[3.5rem] text-center">Crypto Market Making</h3>
        <p className=" max-w-[620px] mx-auto text-[1.25rem] text[#E5E5E5] text-center mt-[20px]">
          We are a global crypto liquidity provider and algorithmic market
          maker. We trade digital assets listed on Centralized Exchanges in over
          15 countries worldwide.
        </p>
      </div>
      <div className="flex mt-[126px]">
        <div className="flex-1 max-w-[425px]">
          <h4 className="text-[2.25rem] font-normal leading-[44px]">
            Market Making for <br /> Crypto Projects
          </h4>
          <p className="text-[1.25rem] font-bold mt-[20px]">
            Accelerate your token’s journey by boosting its liquidity
          </p>
          <p className="text-[1.25rem] text-[#E5E5E5] mt-[14px] max-w-[410px]">
            We invest in building long-term, sustainable relationships and
            support our projects in their growth journey with our services,
            industry expertise and network.
          </p>
          <Link href="" className="mt-[30px] inline-block">
            <span className="under-line text-lg">Learn more</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/gravityteam/photo-01.png"
            height={366}
            width={422}
            alt=""
            className="translate-x-[0px]"
          />
        </div>
      </div>
      <div className="flex justify-between pt-[165px]">
        <div className="flex-1 order-2 max-w-[420px]">
          <h4 className="text-[2.25rem] font-normal leading-[1.2]">
            Market Making for Crypto Exchanges
          </h4>
          <p className="text-[1.25rem] font-bold mt-[25px]">
            Attract more traders and projects with deep order books & liquidity
          </p>
          <p className="text-[1.1875rem] -tracking-[0.018em] text-[#E5E5E5] mt-[12px]  max-w-[420px]">
            Our world-class market making services are proven to help local and
            emerging exchanges win traders and gain market-leading positions of
            up to 90% market dominance.
          </p>
          <Link href="" className="inline-block mt-[37px]">
            <span className="under-line">Learn more</span>
          </Link>
        </div>
        <div className="relative flex-1 flex order-1 h-[366px] -translate-y-[50px]">
          <Image
            src="/gravityteam/photo-02a.png"
            height={366}
            width={520}
            alt=""
            className="absolute z-[3]"
          />
          <Image
            src="/gravityteam/photo-02b.png"
            height={366}
            width={422}
            alt=""
            className="absolute z-[2] -bottom-10"
          />
          <Image
            src="/gravityteam/background-blob-service-1.png"
            height={2000}
            width={2000}
            alt=""
            className="absolute z-[1] -translate-x-[400px] -translate-y-[200px]"
          />
          {/* <div className="absolute z-0 inset-0">
              <div className="absolute -bottom-20 bg-1 w-1/2 h-full"></div>
            </div> */}
        </div>
      </div>
    </section>
  );
};
