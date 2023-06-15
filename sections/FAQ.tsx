export interface Props {
  title: string;
  infoObject?: {
    title: string;
    text: string;
  }[];
}

export default function FAQ({ title, infoObject, ...rest }: Props) {
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
                <h3 className="text-secondary text-[18px] font-normal mb-[15px] text-[#b5e853]">
                  {item.title}
                </h3>
                <p
                  className="text-white text-[16px] md:text-[18px] mb-[30px]"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                >
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
