import Navbar from "@/components/ui/navbar";

const Cadaster = () => {
  return (
    <>
      <Navbar />
      <section className="flex justify-center">
        <div className="flex flex-col gap-2">
          <h1 className="max-w-80 font-bold text-[53px]">
            Contact our sales team
          </h1>
          <p className="max-w-96">
            Get help with pricing and plans, schedule a demo, explore use-cases
            for your team, and more.
          </p>
        </div>
      </section>
    </>
  );
};

export default Cadaster;
