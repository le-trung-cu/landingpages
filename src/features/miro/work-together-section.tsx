import Image from "next/image";
import { LinkLearnMore } from "./link-learn-more";

export const WorkTogetherSection = () => {
  return (
    <section className="pt-[52px] pb-[50px]">
      <div className="miro__container px-2">
        <div className="flex gap-5">
          <div className="flex-1 mt-[140px]">
            <h2 className="miro__heading">
              Work together, <br />
              wherever you work
            </h2>
            <p className="max-w-[455px] text-lg mt-[18px]">
              In the office, remote, or a mix of the two, with Miro, your team
              can connect, collaborate, and co-create in one space no matter
              where you are.
            </p>
            <div className="mt-[32px]">
              <LinkLearnMore />
            </div>
          </div>
          <div className="flex-1">
            <Image src="/mior/hybridwork.png" height={535} width={550} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
