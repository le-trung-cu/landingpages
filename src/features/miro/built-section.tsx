import Image from "next/image";
import { Badge } from "./badge";
import { LinkLearnMore } from "./link-learn-more";

export const BuiltSection = () => {
  return (
    <section className="pt-[60px] pb-[174px]">
      <div className="miro__container pb-[50px]">
        <div className="px-[40px]">
          <Image
            className="mx-auto"
            src="/mior/section.jpg"
            width={1023}
            height={501}
            alt=""
          />
        </div>
        <div className=" pl-[40px]">
          <h2 className="miro__heading mt-[90px]">
            Built for the way you work
          </h2>
          <div className="mt-[35px] space-x-2">
            <Badge className="bg-[#F1F3FD]">Brainstorming</Badge>
            <Badge>Diagramming</Badge>
            <Badge>Meetings & Workshops</Badge>
            <Badge>Scrum Events</Badge>
            <Badge>Mapping</Badge>
            <Badge>Research & Design</Badge>
            <Badge>Strategic Planning</Badge>
          </div>
          <div className="flex mt-[22px] gap-10">
            <div className="max-w-[360px] pl-4 mt-[30px]">
              <p className="text-lg tracking-tight">Brainstorming</p>
              <p className="text-lg mt-[35px] leading-[1.35] tracking-tight max-w-[300px] ">
                Unleash creative ideas and build on them with the help of sticky
                notes, images, mind maps, videos, drawing capabilities — the
                list goes on.
              </p>
              <div className="mt-[40px]">
                <LinkLearnMore />
              </div>
            </div>
            <div>
              <Image
                src="/mior/uxdesignwithoutshadow-01.jpg"
                width={700}
                height={470}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="miro__container px-[40px] pt-[45px]">
        <h2 className="miro__heading mt-[90px]">
          Built for all kinds of teams
        </h2>
        <div className="mt-[34px] space-x-2.5">
          <Badge className="pr-[20px] bg-[#F1F3FD]">UX & Design</Badge>
          <Badge className="pr-[24px]">Marketing</Badge>
          <Badge className="pr-[35px]">Product Management</Badge>
          <Badge className="pr-[25px]">Engineering</Badge>
          <Badge className="pr-[27px]">Consultants</Badge>
          <Badge className="pr-[20px]">Agile Coaches</Badge>
          <Badge className="pr-[20px]">Sales</Badge>
        </div>
        <div className="flex justify-between pl-4 mt-[48px]">
          <div>
            <ul className="max-w-[250px] space-y-[18px] mt-1">
              <li className="flex items-center">
                <Check className="mr-5 mt-2" />
                Build low-fi wireframes
              </li>
              <li className="flex items-start">
                <Check className="mr-5 mt-2" />
                Involve stakeholders in the design process
              </li>
              <li className="flex items-start">
                <Check className="mr-5 mt-2" />
                Run engaging design workshops
              </li>
            </ul>
            <div className="mt-[30px]">

            <LinkLearnMore />
            </div>
            <div className="mt-[70px]">Integrate your favorite tools</div>
            <Logos />
          </div>
          <div>
            <Image
              src="/mior/uxdesignwithoutshadow.jpg"
              width={700}
              height={470}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Check = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="13"
    height="10"
    viewBox="0 0 13 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.70831 4.57892C2.31919 4.17702 1.67602 4.17252 1.28127 4.56892L1.20938 4.64112C0.818174 5.03392 0.821244 5.67002 1.2162 6.05912L4.99992 9.78632L12.2896 2.54442C12.6817 2.15488 12.6835 1.52106 12.2934 1.12939L12.2131 1.04877C11.8205 0.65445 11.1814 0.65655 10.7914 1.05343L4.99992 6.94602L2.70831 4.57892Z"
      fill="#050038"
    />
  </svg>
);

const Logos = () => (
  <div className="flex space-x-[33px] mt-[20px]">
    <Image src="/mior/vector-01.png" width={26} height={26} alt="" />
    <svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.79218 0.187988H21.7654C24.3388 0.187988 26.4193 2.26857 26.4193 4.84196V21.1581C26.4193 23.7315 24.3388 25.8121 21.7654 25.8121H4.79218C2.21878 25.8121 0.138184 23.7315 0.138184 21.1581V4.84196C0.138184 2.26857 2.21878 0.187988 4.79218 0.187988Z"
        fill="#470137"
      />
      <path
        d="M13.9579 6.92257L10.6727 12.343L14.177 18.092C14.1988 18.1358 14.2097 18.1797 14.1988 18.2234C14.1878 18.2673 14.1441 18.2344 14.0783 18.2453H11.5707C11.3955 18.2453 11.275 18.2344 11.1984 18.1249C10.9684 17.665 10.7275 17.2159 10.4976 16.756C10.2676 16.3071 10.0158 15.8472 9.75288 15.3764C9.49009 14.9054 9.22731 14.4345 8.96453 13.9527H8.94264C8.71263 14.4236 8.46074 14.8944 8.20894 15.3654C7.95705 15.8363 7.70516 16.3071 7.46425 16.767C7.21246 17.2269 6.96057 17.6979 6.70867 18.1468C6.66491 18.2563 6.57728 18.2673 6.45688 18.2673H4.04775C4.00388 18.2673 3.97111 18.2892 3.97111 18.2344C3.96012 18.1905 3.97111 18.1468 3.99299 18.1139L7.39861 12.5292L4.08062 6.91157C4.04775 6.86781 4.03675 6.82395 4.05864 6.80206C4.08062 6.76919 4.12438 6.7583 4.16815 6.7583H6.65391C6.70867 6.7583 6.76343 6.76919 6.80729 6.78018C6.85106 6.80206 6.88393 6.83494 6.9168 6.8787C7.12483 7.34962 7.36573 7.82053 7.61763 8.29135C7.88041 8.76226 8.13231 9.22219 8.40598 9.68211C8.66887 10.142 8.90977 10.6019 9.13968 11.0728H9.16157C9.39158 10.591 9.63248 10.12 9.87338 9.66012C10.1143 9.2002 10.3662 8.74028 10.618 8.28035C10.8699 7.82053 11.1108 7.34962 11.3517 6.90068C11.3627 6.85682 11.3845 6.81306 11.4174 6.79117C11.4612 6.76919 11.5051 6.7583 11.5598 6.76919H13.8703C13.9251 6.7583 13.9798 6.79117 13.9908 6.84593C14.0017 6.85682 13.9798 6.90069 13.9579 6.92257Z"
        fill="#FF61F6"
      />
      <path
        d="M19.0174 18.4751C18.207 18.4861 17.3967 18.3218 16.663 17.9824C15.9731 17.6647 15.4037 17.1392 15.0095 16.4931C14.6043 15.8251 14.4071 14.9928 14.4071 13.9963C14.3963 13.186 14.6043 12.3866 15.0095 11.6858C15.4256 10.974 16.0278 10.3827 16.7506 9.9885C17.5171 9.56145 18.437 9.35332 19.5211 9.35332C19.5758 9.35332 19.6525 9.35332 19.751 9.36431C19.8496 9.3752 19.9591 9.3752 20.0905 9.3862V5.92583C20.0905 5.84919 20.1234 5.80543 20.2 5.80543H22.4229C22.4776 5.79443 22.5215 5.8382 22.5324 5.88206C22.5324 5.89295 22.5324 5.90395 22.5324 5.90395V16.3288C22.5324 16.526 22.5434 16.7449 22.5544 16.9859C22.5763 17.2158 22.5872 17.4348 22.5981 17.621C22.5981 17.6976 22.5653 17.7633 22.4886 17.7962C21.9192 18.0371 21.3169 18.2123 20.7037 18.3218C20.1453 18.4203 19.5868 18.4751 19.0174 18.4751ZM20.0905 16.2851V11.4668C19.992 11.4449 19.8934 11.423 19.7948 11.412C19.6743 11.401 19.5539 11.3902 19.4334 11.3902C19.0064 11.3902 18.5793 11.4778 18.196 11.6748C17.8238 11.861 17.5062 12.1347 17.2653 12.4852C17.0243 12.8356 16.9039 13.3065 16.9039 13.8759C16.8929 14.2592 16.9587 14.6424 17.0901 15.0038C17.1996 15.2995 17.3638 15.5622 17.5828 15.7813C17.7909 15.9784 18.0428 16.1317 18.3274 16.2193C18.6231 16.3178 18.9297 16.3617 19.2364 16.3617C19.4006 16.3617 19.5539 16.3507 19.6963 16.3397C19.8386 16.3507 19.9591 16.3288 20.0905 16.2851Z"
        fill="#FF61F6"
      />
    </svg>
    <Image src="/mior/vector-02.png" width={26} height={26} alt="" />
    <Image src="/mior/vector-03.png" width={26} height={26} alt="" />
  </div>
);
