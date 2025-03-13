import Image from "next/image";
import { LinkLearnMore } from "./link-learn-more";

export const ConnectSection = () => {
  return (
    <section>
      <div className="miro__container pl-3 pr-1 flex pt-[70px]">
        <div className="flex-1">
          <Image
            src="/mior/M3_integrations_all_integrations.png"
            width={550}
            height={500}
            alt=""
          />
        </div>
        <div className="">
          <h2 className="miro__heading max-w-[360px] mt-[80px]">
            Connect
            <br />
            <span className="pl-2 mt-1 block"> your tools, </span>
            <span className="pl-2 mt-1 block"> close your tabs</span>
          </h2>
          <p className="miro__secondary text-lg max-w-[459px] mt-[28px] leading-[1.35]">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <div className="mt-[50px]">

          <LinkLearnMore />
          </div>
        </div>
      </div>
    </section>
  );
};
