import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Partness = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-[45px]">
          Millions run on Notion every day
        </h1>
        <div className="flex flex-col items-center justify-center">
          <p className="max-w-[465px] text-base">
            Powering the world’s best teams, from next-generation startups.
          </p>
          <p className="text-base">to established enterprises</p>
        </div>
        <Button className="w-96 h-8 text-sm">
          Read customer stories <ArrowRight width={18} />
        </Button>
        <Image
          src="/partness-login.png"
          alt="partness image"
          width={810}
          height={145}
          className="mt-6"
        />
      </section>
    </>
  );
};

export default Partness;
