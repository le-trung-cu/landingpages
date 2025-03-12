import { Logo } from "@/features/post-pilot/logo";
import Link from "next/link";
import { IconArrowDown } from "./icon-arrow-down";
import { Button } from "./button";

export const Navigation = () => {
  return (
    <div className="relative">
      <div className="h-2 bg-[#E0F8F2]"></div>
      <div className="absolute left-0 bottom-0 w-full h-3.5 bg-[#E0F8F2]"></div>
      <nav className="max-w-[1300px] mx-auto flex justify-between pl-2 pt-[30px]">
        <Logo />
        <div className="flex items-center text-sm space-x-12">
          <Link href="" className="flex items-center">
            <span className="mr-2">Resources</span> <IconArrowDown />
          </Link>
          <Link href="">Success stories</Link>
          <Link href="" className="flex items-center">
            <span className="mr-2">Company</span> <IconArrowDown />
          </Link>
          <Link href="" className="mr-10">
            Pricing
          </Link>
          <div className="relative flex items-center space-x-3">
            <Button className="text-sm">Login</Button>
            <Button className="bg-[#FF6D2C] text-white text-sm">Create free account</Button>
          </div>
        </div>
      </nav>
      
    </div>
  );
};
