import Navbar from "@/app/components/ui/navbar";
import FormCadaster from "./_components/form-cadaste";

const Cadaster = () => {
  return (
    <>
      <Navbar />
      <section className="flex justify-center gap-36 my-20">
        <div className="flex flex-col gap-2">
          <h1 className="max-w-96 leading-none font-bold text-[53px]">
            Contact our sales team
          </h1>
          <p className="max-w-96 text-zinc-700">
            Get help with pricing and plans, schedule a demo, explore use-cases
            for your team, and more.
          </p>
        </div>
        <FormCadaster />
      </section>
    </>
  );
};

export default Cadaster;
