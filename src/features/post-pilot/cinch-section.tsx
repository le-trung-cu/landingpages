import Image from "next/image";
import { TitleOutstand } from "./title-outstand";
import { cn } from "@/lib/utils";

export const CinchSection = () => {
  return (
    <section className="bg-[#FDF3EA] pt-[90px] pb-[229px]">
      <h2 className="max-w-[942px] mx-auto font-bold -tracking-[0.028em] text-center text-[#2E2F35] text-[4.375rem] leading-none">
        PostPilot makes it a{" "}
        <TitleOutstand className="text-[90px]">cinch</TitleOutstand> to send
        personalized, profit-generating postcards.
      </h2>
      <div className="max-w-[1290px] mx-auto pt-[200px]">
        <div className="max-w-[516px]">
          <Quote>
            <QuoteTitle>
              <TitleOutstand className="text-[80px] block">
                Powerful
              </TitleOutstand>
              <span className="block ">acquisition</span>
              <span className="block mt-2"> & retention</span>
            </QuoteTitle>
            <QuoteDesc>
              Send one-off or triggered campaigns to customers <br />&
              prospects. Target email leads with MailMatch™.
            </QuoteDesc>
            <QuoteContent>
              <p>
                It’s like Klaviyo for direct mail. The results are absolutely
                insane.
              </p>
              <div className="flex justify-between items-center mt-5">
                <div className="text-[#A89B90] text-sm">Ash Melwani, CMO</div>
                <Image
                  src="/post-pilot/cinch-quote-01.png"
                  height={24}
                  width={54}
                  alt=""
                />
              </div>
            </QuoteContent>
          </Quote>
        </div>
        <div className="flex justify-end pt-[200px]">
          <div className="max-w-[646px] ">
            <Quote>
              <QuoteTitle>
                <TitleOutstand className="text-[80px]">
                  Fight back{" "}
                </TitleOutstand>{" "}
                against iOS updates, jacked-up{" "}
                <span className="block mt-2">CPCs & spam folders</span>
              </QuoteTitle>
              <QuoteDesc>
                Deliver your message to all of your customers — for less than
                the cost of a click.
              </QuoteDesc>
              <QuoteContent>
                <p>
                  PostPilot is our new weapon against sinking email engagement
                  and rising PPC costs. The results and ROI have been
                  outstanding. It’s now one of our core marketing channels to
                  increase acquisition & LTV.
                </p>
                <div className="flex justify-between items-center mt-5">
                  <div className="text-[#A89B90] text-sm">Ash Melwani, CMO</div>
                  <Image
                    src="/post-pilot/cinch-quote-01.png"
                    height={24}
                    width={54}
                    alt=""
                  />
                </div>
              </QuoteContent>
            </Quote>
          </div>
        </div>

        <div className="pt-[165px]">
          <div className="max-w-[516px]">
            <Quote>
              <QuoteTitle>
                {" "}
                Done for{" "}
                <TitleOutstand className="text-[58px]">you </TitleOutstand>
              </QuoteTitle>
              <QuoteDesc className="mt-[30px] leading-[1.7]">
                From design & strategy to stamp-licking, our ecom experts help
                you every step of the way.
              </QuoteDesc>
              <QuoteContent>
                <p>
                  The team is so knowledgeable and beyond helpful. I’m blown
                  away by their communication, detail, and attentiveness and
                  always feel like they have our best interest in mind.
                  Definitely worth a try.
                </p>
                <div className="flex justify-between items-center mt-5">
                  <div className="text-[#A89B90] text-sm">
                    Holly Davies, Marketing Director
                  </div>
                  <Image
                    src="/post-pilot/cinch-quote-01.png"
                    height={24}
                    width={54}
                    alt=""
                  />
                </div>
              </QuoteContent>
            </Quote>
          </div>
        </div>
      </div>
    </section>
  );
};

const Quote = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const QuoteTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-[3.75rem] font-bold text-[#2E2F35] leading-none -tracking-[0.07em]">
      {children}
    </h3>
  );
};

const QuoteDesc = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <p className={cn("text-xl text-[#58595D] mt-[45px] tracking-[0.008em] leading-[1.5]", className)}>
      {children}
    </p>
  );
};

const QuoteContent = ({className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className="relative px-8 pt-10 pb-8 border border-[#D1C7BE] rounded-2xl mt-[50px]">
      <div className="leading-[1.6]">{children}</div>
      <div className="absolute top-0 left-[35px] -translate-y-1/2 bg-[#FDF3EA] px-2">
        <svg
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.31459 12.2636C9.64106 12.2636 10.6757 12.7953 11.4185 13.8586C12.2144 14.866 12.6123 16.1253 12.6123 17.6364C12.6123 19.2595 12.0817 20.6027 11.0206 21.666C9.95941 22.6734 8.63294 23.1772 7.04117 23.1772C5.23718 23.1772 3.75155 22.4776 2.58424 21.0784C1.41695 19.6793 0.833313 17.8603 0.833313 15.6217C0.833313 12.4874 1.78837 9.63312 3.69848 7.05864C5.6086 4.48416 8.44723 2.30145 12.2144 0.510498V2.60926C9.98593 3.67264 8.07582 5.07181 6.48406 6.80679C4.8923 8.48581 4.09642 10.1648 4.09642 11.8438C4.09642 12.9631 4.38824 13.5229 4.97189 13.5229C5.078 13.5229 5.21066 13.4948 5.36983 13.4389C5.52901 13.3269 5.68819 13.2431 5.84736 13.187C6.64323 12.5714 7.46565 12.2636 8.31459 12.2636ZM24.8689 12.2636C26.1953 12.2636 27.2301 12.7953 27.9728 13.8586C28.7687 14.866 29.1666 16.1253 29.1666 17.6364C29.1666 19.2595 28.6361 20.6027 27.5749 21.666C26.5137 22.6734 25.1872 23.1772 23.5955 23.1772C21.7915 23.1772 20.3058 22.4776 19.1385 21.0784C17.9713 19.6793 17.3876 17.8603 17.3876 15.6217C17.3876 12.4874 18.3427 9.63312 20.2528 7.05864C22.1629 4.48416 25.0015 2.30145 28.7687 0.510498V2.60926C26.5403 3.67264 24.6302 5.07181 23.0384 6.80679C21.4467 8.48581 20.6508 10.1648 20.6508 11.8438C20.6508 12.9631 20.9426 13.5229 21.5261 13.5229C21.6322 13.5229 21.765 13.4948 21.9241 13.4389C22.0833 13.3269 22.2425 13.2431 22.4016 13.187C23.1975 12.5714 24.0199 12.2636 24.8689 12.2636Z"
            fill="#FF6D2C"
          />
        </svg>
      </div>
    </div>
  );
};
