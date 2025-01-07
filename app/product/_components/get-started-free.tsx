import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GetStartedFree = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 mt-24 mb-80">
        <h1 className="font-bold text-6xl">Get started for free</h1>
        <p>Play around with it first. Pay and add your team later.</p>
        <div className="flex items-center justify-center">
          <Button className="font-semibold">Try Notion Free</Button>
          <Button variant="ghost" className="bg-transparent text-[#0A85D1]">
            Request a demo <ArrowRight />
          </Button>
        </div>
      </section>
    </>
  );
};

export default GetStartedFree;
