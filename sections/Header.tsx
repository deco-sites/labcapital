import { context } from "$live/live.ts";

export interface Props {
  /**
   * @description Main Title
   * @format string
   */
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <header class="pt-[20px] border-dashed border-b-[1px] border-secondary pb-[40px]">
      <section class="mx-auto max-w-[1000px] w-[90%]">
        <h1 class="before:content-['./'] before:mr-2 before:text-[24px] text-secondary text-[30px] font-[700] mb-4 md:relative md:right-[40px]">
          {title}
        </h1>
        <a
          href="https://github.com/peas/lab.capital"
          class="m-0 h-[40px] w-[fit-content] items-center justify-center flex no-underline text-[13px] text-[#fff] font-[700] rounded-[50px] shadow-[0px 1px 2px rgba(0,0,0,0.2)] hover:shadow-[0px 1px 2px rgba(0,0,0,0.4)] transition-[all 0.2s ease-in-out] border-2 border-black bg-gradient-to-b from-[#282828] to-[#00000045] via-[#0a0a0a70] hover:bg-gradient-to-b hover:from-[#242424] hover:to-[#0000009a] hover:via-[#0a0a0a70] py-[8px] px-[18px] "
          style={{
            "border-bottom": "2px solid rgba(0,0,0,0.7)",
            "border-top": "2px solid #000",
            "font-family": "Helvetica, Arial, sans-serif",
          }}
        >
          <span class="bg-[url('https://lab.capital/assets/images/blacktocat.png')] w-[16px] h-[16px] inline-block opacity-[0.6] mt-[1px] mr-[8px] ">
          </span>
          View on GitHub
        </a>
      </section>
    </header>
  );
}
