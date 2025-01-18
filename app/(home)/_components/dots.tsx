import { Ellipsis } from "lucide-react";

const Dots = () => {
  return (
    <>
      <section className="absolute top-4 right-4">
        <Ellipsis width={24} className="text-white cursor-pointer" />
      </section>
    </>
  );
};

export default Dots;
