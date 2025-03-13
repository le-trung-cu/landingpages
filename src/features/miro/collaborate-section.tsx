import Link from "next/link";

export const CollaborateSection = () => {
  return (
    <section className="pt-[100px] pb-[50px]">
      <h2 className="max-w-[448px] mx-auto miro__heading text-center">
        Collaborate without constraints
      </h2>
      <div className="miro__container flex px-[34px] mt-[44px] gap-[70px]">
        <div className="flex-1">
          <h3 className="miro__heading text-2xl font-bold">Free forever</h3>
          <p className="text-lg mt-[27px] leading-[1.35] tracking-tight">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our
          </p>
          <p>
            <span className="miro__text-secondary"> pricing plans </span>for
            more features.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="miro__heading text-2xl font-bold">
            Easy integrations
          </h3>
          <p className="text-lg mt-[27px] leading-[1.35] tracking-tight">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our
            <span className="miro__text-secondary"> Marketplace .</span>
          </p>
        </div>
        <div className="flex-1">
          <h3 className="miro__heading text-2xl font-bold">Security first</h3>
          <p className="text-lg mt-[27px] leading-[1.35] tracking-tight">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our
            <span className="miro__text-secondary"> Trust Center .</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center  mt-[72px]">
        <Link href="" className="miro__btn h-[48px] w-[178px]">
          Sign up free →
        </Link>
      </div>
    </section>
  );
};
