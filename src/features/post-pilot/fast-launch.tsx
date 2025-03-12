import { Accordion, AccordionItem, AccordionItemContent, AccordionItemTitle } from "./accordion";
import { TitleOutstand } from "./title-outstand";

export const FastLaunch = () => {
  return (
    <section className="bg-[#E3F8F8] pt-[105px] pb-[198px]">
      <h1 className="font-bold text-center text-[3.754rem] tracking-tight leading-[1.33]">
        Fast launch. Fast results. <br />
        <TitleOutstand className="leading-">Here&apos;s how.</TitleOutstand>
      </h1>
      <div className="max-w-[1245px] mx-auto mt-[40px]">
        <Accordion className="space-y-2">
          <AccordionItem value="segment">
            <AccordionItemTitle className="text-[36px]"><TitleOutstand className="text-[48px] w-[70px] mr-[25px]">01</TitleOutstand>Segment</AccordionItemTitle>
            <AccordionItemContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod libero recusandae ipsam odio ad quas voluptates error ea, minima sed architecto porro? Repudiandae repellat, amet saepe aspernatur architecto aliquid.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="design">
            <AccordionItemTitle className="text-[36px]"><TitleOutstand className="text-[48px] w-[70px] mr-[25px]">02</TitleOutstand>Design</AccordionItemTitle>
            <AccordionItemContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod libero recusandae ipsam odio ad quas voluptates error ea, minima sed architecto porro? Repudiandae repellat, amet saepe aspernatur architecto aliquid.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="send">
            <AccordionItemTitle className="text-[36px]"><TitleOutstand className="text-[48px] w-[70px] mr-[25px]">03</TitleOutstand>Send</AccordionItemTitle>
            <AccordionItemContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod libero recusandae ipsam odio ad quas voluptates error ea, minima sed architecto porro? Repudiandae repellat, amet saepe aspernatur architecto aliquid.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="convert">
            <AccordionItemTitle className="text-[36px]"><TitleOutstand className="text-[48px] w-[70px] mr-[25px]">04</TitleOutstand>Convert</AccordionItemTitle>
            <AccordionItemContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod libero recusandae ipsam odio ad quas voluptates error ea, minima sed architecto porro? Repudiandae repellat, amet saepe aspernatur architecto aliquid.
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
