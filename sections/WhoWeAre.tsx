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
                            className="bg-black text-white p-[20px] mb-[30px] whitespace-nowrap overflow-x-auto md:whitespace-normal"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                            >
                            </code>
                            <img src={item.image} alt="image" className={"w-[300px] mb-[30px]"}/>
                        </div>
                    )
                })}
            </div>
        </section>
      </section>
    );
  }
  