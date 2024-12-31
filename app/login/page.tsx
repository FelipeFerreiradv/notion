import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center w-full h-full mx-auto my-28">
        <Image
          src="/projects-together-login.png"
          alt="Projects together login"
          width={787}
          height={158}
        />
        <p className="max-w-[468px] mt-3 mb-6 font-medium text-2xl">
          Notion is the connected workspace where better, faster work happens.
        </p>
        <div>
          <Button className="w-[163px] h-[36px] rounded-md font-semibold text-base">
            Get Notion free <ArrowRight width={16} className="font-semibold" />
          </Button>
        </div>
      </section>
      <section className="flex items-center justify-center w-full h-full">
        <Image
          src="/product-roadmap-login.png"
          alt="product road map"
          width={1024}
          height={666.33}
        />
      </section>
    </>
  );
};

export default Login;
