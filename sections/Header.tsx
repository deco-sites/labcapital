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
        <header class="bg-primary py-[20px] border-dashed border-b-2 border-secondary">
            <section class="mx-auto max-w-sm">
                <h1 class="before:content-['./'] before:mr-2 before:text-[24px] text-secondary text-[30px] font-[700]">{title}</h1>
                <a href="https://github.com/peas/lab.capital" class="m-0 text-center flex items-center text-white font-['Helvetica']">
                    <span class="bg-[url('https://lab.capital/assets/images/blacktocat.png')] w-[16px] h-[16px] inline-block opacity-[0.6] mt-[1px] mr-[8px]"></span>
                    View on Github
                </a>
            </section>
        </header>
    )
}
