import Link from "next/link";
import { LogoEco } from "./logo-eco";
import { Logo } from "./logo";
import { Button } from "./button";

export const Footer = () => {
  return (
    <footer className="pt-[90px]">
      <div className="max-w-[1290px] mx-auto flex justify-between pb-[100px]">
        <div className="flex-1">
          <LogoEco />
          <p className="max-w-[280px] font-medium text-sm text-[#58595D] mt-[30px]">
            Our paper is sourced from FSC-certified mills. We plant enough trees
            to more than double our paper usage.
          </p>
        </div>
        <div className="min-w-[540px]">
          <h5>Company</h5>
          <div className="flex mt-[22px]">
            <div className="flex-1 flex flex-col space-y-5">
              <Link href="/">About us</Link>
              <Link href="/">Partner program</Link>
              <Link href="/">Career</Link>
              <Link href="/">Contact us</Link>
              <Link href="/">Privacy Policy</Link>
            </div>
            <div className="flex-1 flex flex-col space-y-5">
              <Link href="">Pricing</Link>
              <Link href="">Reviews</Link>
              <Link href="">Direct Mail Academy</Link>
              <Link href="">Success stories</Link>
              <Link href="">Terms & conditions</Link>
            </div>
          </div>
        </div>
        <div className="max-w-[284px] mr-[45px]">
          <h5 className="text-sm font-bold">Contact</h5>
          <div className="flex mt-[30px]">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1662 4H4.80256C3.79841 4 2.98438 4.79594 2.98438 5.77778V18.2222C2.98438 19.2041 3.79841 20 4.80256 20H21.1662C22.1704 20 22.9844 19.2041 22.9844 18.2222V5.77778C22.9844 4.79594 22.1704 4 21.1662 4Z"
                fill="#FFE8DC"
                stroke="#212121"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              />
              <path
                d="M9.63375 14.8809L8.66406 15.7861"
                stroke="#212121"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              />
              <path
                d="M16.332 14.8809L17.3017 15.7861"
                stroke="#212121"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              />
              <path
                d="M17.5284 8.00098L12.983 12.4454L8.4375 8.00098"
                stroke="#212121"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              />
            </svg>
            <address >support@postpilot.com</address>
          </div>
          <p className="font-medium text-base text-[#58595D] mt-[25px]">Printed with ❤️️️ at our facility in South Carolina.</p>
        </div>
      </div>
      <div className="max-w-[1290px] mx-auto flex justify-between border-t border-[#E6E6E7] pt-[50px] pb-[20px]">
        <div>
          <div className="scale-[0.8] origin-top-left"><Logo/></div>
          <p className="text-sm mt-1">© 2022 PostPilot, Inc. All rights reserved.</p>
        </div>
        <div className="mt-1">
          <Button className="text-sm mr-2.5">Login</Button>
          <Button className="text-sm">Try it for free</Button>
        </div>
      </div>
    </footer>
  );
};
