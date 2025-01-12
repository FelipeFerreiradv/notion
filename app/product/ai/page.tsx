import NavbarDark from "@/components/ui/navbar-dark";
import Image from "next/image";
import GetNotionFreeButton from "./_components/get-notion-free-notion";
import { Textarea } from "@/components/ui/textarea";

const Ai = () => {
  return (
    <section className="w-screen h-screen bg-black">
      <NavbarDark />
      <section className="flex flex-col items-center justify-center gap-6 my-20">
        <div className="flex items-start">
          <h1 className="font-bold text-[76px] text-white">
            Introducing Notion AI
          </h1>
          <Image
            src="/star-icon.png"
            alt="star icons"
            width={36}
            height={36}
            className="mt-[1rem] ml-[-.3rem]"
          />
        </div>
        <p className="max-w-[441px] text-center font-medium text-lg text-white">
          Access the limitless power of AI, right inside Notion. Work faster.
          Write better. Think bigger.
        </p>
        <GetNotionFreeButton small="w-[116px] h-[36px] font-bold text-sm text-white bg-[#9D34DA]" />
      </section>
      <section className="flex items-center justify-center my-40">
        <Textarea className="w-[1024px] h-[514px] p-6 rounded-xl text-white bg-[#141414] border-[#ffffff32]" />
      </section>
    </section>
  );
};

export default Ai;
