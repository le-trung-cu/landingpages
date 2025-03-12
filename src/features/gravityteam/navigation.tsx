import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center text-white pt-[23px] pl-[62px] pr-[75px]">
      <Image src="/gravityteam/logo-light.png" width={180} height={42} alt="" />
      <div className="flex space-x-[29px] text-[0.9375rem] uppercase -translate-x-[17px]">
        <Link href="/">About Us</Link>
        <Link href="/" className="flex">
          <span className="mr-2">Our Services</span>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_1_253" fill="white">
              <path d="M0.0462723 8L8.04629 -1.32132e-05L16.0463 7.99999L8.04627 16L0.0462723 8Z" />
            </mask>
            <path
              d="M8.04627 16L7.33917 16.7071L8.04627 17.4142L8.75338 16.7071L8.04627 16ZM15.3392 7.29288L7.33917 15.2929L8.75338 16.7071L16.7534 8.7071L15.3392 7.29288ZM8.75338 15.2929L0.753379 7.29289L-0.660835 8.70711L7.33917 16.7071L8.75338 15.2929Z"
              fill="white"
              mask="url(#path-1-inside-1_1_253)"
            />
          </svg>
        </Link>
        <Link href="/">Work With Us</Link>
        <Link href="/">Blog</Link>
      </div>
      <Link href="" className="flex items-center text-[0.9375rem] uppercase">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.65625"
            width="16"
            height="16"
            rx="8"
            fill="url(#paint0_linear_1_257)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_257"
              x1="0.65625"
              y1="0"
              x2="16.6562"
              y2="16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#665DCD" />
              <stop offset="0.4476" stopColor="#5FA4E6" />
              <stop offset="1" stopColor="#D2AB67" />
            </linearGradient>
          </defs>
        </svg>
        <span className="ml-4">Get In Touch</span>
      </Link>
    </nav>
  );
};
