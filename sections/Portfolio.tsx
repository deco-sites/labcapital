export interface Props {
    title: string;
    textArray?: string[];
  }
  
  export default function Portfolio({ title, textArray, ...rest }: Props) {
    return (
      <section className="pt-[20px]" {...rest}>
        <section className="max-w-[1000px] w-[90%] mx-auto">
          <h1 className="text-secondary text-[30px] font-normal mb-[20px]">
            {title}
          </h1>
          <div className="flex flex-col">
                {textArray?.map((item, index) => {
                    return (
                        <div className="flex ml-4">
                            <strong className="text-[#B5E853] mr-2">{'>>'}</strong>
                            <p
                            className="text-[#eaeaea] text-[16px]"
                            dangerouslySetInnerHTML={{ __html: item }}
                            >
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
      </section>
    );
  }
  