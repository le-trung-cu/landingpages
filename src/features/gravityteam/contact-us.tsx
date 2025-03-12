import Link from "next/link"

export const ContactUs = () => {
  return (
    <div className="text-white pt-[130px] text-center pb-[130px]">
      <h2 className="text-[3.5rem] text-center">Contact Us</h2>
      <p className="max-w-[630px] mx-auto text-center text-lg leading-[1.68] mt-[20px]">We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!</p>
      <Link href="/" className="linear-background inline-flex items-center justify-center h-[58px] px-[28px] py-1 text-[1.1875rem] font-medium uppercase rounded-sm mt-[40px]">
        Get in touch
      </Link>
    </div>
  )
}