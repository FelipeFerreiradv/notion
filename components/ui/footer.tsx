import { Instagram, Twitter, Linkedin, Facebook, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import ListFooter from "./list-footer";

const Footer = () => {
  return (
    <>
      <section className="flex justify-center h-[812.44px] gap-44">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 mr-4">
            <Image
              src="/notion-logo.png"
              alt="notion logo"
              width={28.71}
              height={30}
            />
            <Link href="#" className="font-semibold text-base ">
              Notion
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="#">
              <Instagram width={20} />
            </Link>
            <Link href="#">
              <Twitter width={20} />
            </Link>
            <Link href="#">
              <Linkedin width={20} />
            </Link>
            <Link href="#">
              <Facebook width={20} />
            </Link>
            <Link href="#">
              <Youtube width={20} />
            </Link>
          </div>
          <Select>
            <SelectTrigger className="w-[130px] h-[36px] border-[#000000c0]">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Portugês">Portugês</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Espanish">Espanish</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-10">
          <ListFooter title="Product" />
          <ListFooter title="Product" />
        </div>
        <div className="flex flex-col gap-10">
          <ListFooter title="Product" />
          <ListFooter title="Product" />
          <ListFooter title="Product" />
        </div>
        <div className="flex flex-col gap-10">
          <ListFooter title="Product" />
          <ListFooter title="Product" />
        </div>
      </section>
    </>
  );
};

export default Footer;
