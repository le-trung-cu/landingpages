import Image from "next/image";
import { TitleOutstand } from "./title-outstand";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "./button";

export const PostPilotIsForDTC = () => {
  return (
    <section className="pt-[80px] pb-[96px]">
      <h1 className="font-bold text-[63px] text-center tracking-tight">
        PostPilot is 🔥 for <TitleOutstand>DTC</TitleOutstand>
      </h1>
      <Carousel className="mt-[70px]">
        <CarouselContent>
          {dataComments.map((item) => (
            <CarouselItem key={item.id} className="basis-1/3 px-4">
              <Comment
                img={`/post-pilot/${item.img}`}
                name={item.name}
                username={item.username}
                content={item.content}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-[160px]"><Button className="min-w-[261px] min-h-[64px] bg-[#FF6D2C] text-white uppercase">Try it RISK-free</Button></div>
    </section>
  );
};

const Comment = ({
  img,
  name,
  username,
  content,
}: {
  img: string;
  name: string;
  username: string;
  content: string;
}) => {
  return (
    <div className="border-2 rounded-lg p-5">
      <div>
        <Image src={img} width={64} height={64} alt="" />
        <div>
          <div>{name}</div>
          <div>{username}</div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const dataComments = [
  {
    id: 1,
    img: "user-01.jpg",
    name: "Jon Tucker",
    username: "@@JonTuckerUSA",
    content: "Email is a killer channel, but if you layer in postal mail you can really supercharge results. The team at @getpostpilot will spark ideas for ya.",
  },
  {
    id: 2,
    img: "user-01.jpg",
    name: "Helen Guo",
    username: "@HelenGuo_",
    content: "Been using PostPilot for years. Good for re-engagement. And you can get creative with your messaging.",
  },
  {
    id: 3,
    img: "user-02.jpg",
    name: "Nathan Woods",
    username: "@HeisNathan",
    content: "We have done some rad winbacks to 360-720 days since purchase that have rocked. PostPilot team is one of my favs.",
  },
  {
    id: 4,
    img: "user-03.jpg",
    name: "Chris Lander",
    username: "@chris_basis",
    content: "Another +1 for PostPilot. Have only done winbacks, but it's been wonderful. Their team is also top notch. Super helpful every time we set something up.",
  },

];
