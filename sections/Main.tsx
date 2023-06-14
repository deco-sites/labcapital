export interface Props {
  title: string;
  text: string;
}

export default function Main({ title, text, ...rest }: Props) {
  return (
    <section className="pt-[40px]" {...rest}>
      <section className="max-w-[1000px] w-[90%] mx-auto">
        <h1 className="text-secondary text-[30px] font-normal mb-[20px]">
          {title}
        </h1>
        <p
          className="text-[#eaeaea] text-[16px]"
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </p>
      </section>
    </section>
  );
}
