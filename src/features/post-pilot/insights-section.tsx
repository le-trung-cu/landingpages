import Image from "next/image"
import { TitleOutstand } from "./title-outstand"

export const InsightsSection = () => {
  return (
    <section className="bg-[#F3FAFA] pt-[70px] pb-[80px]">
      <div className="">
        <h2 className="text-[4.25rem] text-center font-bold tracking-tight">Latest trends & <TitleOutstand>insights</TitleOutstand></h2>
        <div className="max-w-[1290px] mx-auto flex gap-10 mt-[65px]">
          {dataInsights.map(item => (
            <Item key={item.title} img={`/post-pilot/${item.img}`} title={item.title}/>
          ))}
        </div>
      </div>
    </section>
  )
}

const Item = ({img, title}:{img: string, title: string}) => (
  <div>
    <Image className="rounded-lg mx-auto" src={img} width={410} height={272} alt=""/>
    <p className="font-bold text-[26px] mt-[23px]">{title}</p>
  </div>
)
const dataInsights = [
  {
    img: "insights-01.jpg",
    title: "3 Low-Cost Campaigns You Must Run to Win BFCM"
  },
  {
    img: "insights-02.jpg",
    title: "Postcard Marketing: The Definitive Guide to High ROI [2022]"
  },
  {
    img: "insights-03.jpg",
    title: "The Ultimate Guide to Thank You Notes for Ecommerce"
  }
]