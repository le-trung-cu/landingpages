import Link from "next/link";

export const HeroSection = () => {
  return (
    <header className="text-white flex flex-col items-center pb-[200px]">
      <h1 className="flex flex-col items-center font-medium mt-[55px]">
        <span className="text-[4.75rem] leading-none">Balancing</span>
        <span className="text-[4.625rem] mt-[55px] leading-none">Crypto Markets</span>
      </h1>
      <p className="max-w-[528px] mx-auto text-center text-lg text-[#E5E5E5] mt-9 leading-[30px]">
        Our fully automated proprietary quantitative trading software provides
        24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
        derivative crypto exchanges.
      </p>
      <Link href="/" className="linear-background inline-flex items-center justify-center h-[58px] px-[28px] py-1 text-[1.1875rem] font-medium uppercase rounded-sm mt-[40px]">
        Get in touch
      </Link>
    </header>
  );
};
