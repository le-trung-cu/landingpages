import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" text-white border-t border-b-gray-100 pt-[100px]">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="flex justify-between">
          <div className="flex flex-col pb-[50px]">
            <h5 className="text-[0.9375rem] uppercase">Gravity Team</h5>
            <div className="space-y-3 flex flex-col mt-4">
            <Link className="text-sm text-[#BCBCBC]" href="">About Us</Link>
            <Link className="text-sm text-[#BCBCBC]" href="">Work with Us</Link>
            </div>
          </div>
          <div>

          <Image
            src="/gravityteam/logo-light.png"
            width={180}
            height={42}
            alt=""
            />
            </div>
        </div>
        <div className="flex justify-between text-[#BCBCBC] text-sm pt-[43px] pb-[50px]">
          <Link href="">Terms of Use & Privacy Policy</Link>
          <p className="tracking-wide">©2022 Gravity Team. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
