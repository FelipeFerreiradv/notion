import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

const Navbar = () => {
  return (
    <>
      <header className="flex items-center justify-between max-w-screen h-[62px] px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 mr-4">
            <Image
              src="/notion-logo.png"
              alt="notion logo"
              width={30}
              height={30}
            />
            <Link href="#" className="font-semibold text-[18px] ">
              Notion
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="font-semibold text-[15px]">
              Product
            </Link>
            <ChevronDown width={14} height={14} />
          </div>
          <div className="flex items-center gap-2">
            <Link href="#" className="font-semibold text-[15px]">
              Download
            </Link>
            <ChevronDown width={14} height={14} />
          </div>
          <div className="flex items-center gap-2">
            <Link href="#" className="font-semibold text-[15px]">
              Solutions
            </Link>
            <ChevronDown width={14} height={14} />
          </div>
          <div className="flex items-center gap-2">
            <Link href="#" className="font-semibold text-[15px]">
              Resources
            </Link>
            <ChevronDown width={14} height={14} />
          </div>
          <Link href="#" className="font-semibold text-[15px]">
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#" className="font-semibold text[14px]">
            Request a demo
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" className="font-semibold text[15px] rounded-[5px]">
              Log in
            </Link>
            <Button className="w-[126px] h-[30px] font-semibold text-[13.5px]">
              Get Notion free
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
