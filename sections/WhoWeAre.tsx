import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  infoObject?: {
    title: string;
    text: string;
    image: string;
  }[];
}

export default function WhoWeAre({ title, infoObject, ...rest }: Props) {
  return (
    <section className="pt-[20px]" {...rest}>
      <section className="max-w-[1000px] w-[90%] mx-auto">
        <h1 className="text-secondary text-[30px] font-normal mb-[20px]">
          {title}
        </h1>
        <div className="flex flex-col">
          {infoObject?.map((item, index) => {
            return (
              <div className="flex flex-col" tabIndex={index}>
                <h2 className="text-secondary text-[24px] font-normal mb-[15px]">
                  {item.title}
                </h2>
                <code
                  className="bg-black text-[#d0d0d0] p-[10px] mb-[30px] whitespace-nowrap overflow-x-auto md:whitespace-normal"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                >
                </code>
                <Image
                  className="mb-[20px]"
                  src={item.image}
                  sizes="(maxWidth: 300px) 100vw, 300px"
                  width={300}
                  height={300}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  preload
                />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
