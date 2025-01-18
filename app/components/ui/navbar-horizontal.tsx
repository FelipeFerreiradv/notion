"use client";

import Dots from "@/app/(home)/_components/dots";
import NavbarItems from "@/app/(home)/_components/navbar-items";
import NavbarItemsSingular from "@/app/(home)/_components/navbar-items-singular";
import NotionAiButton from "@/app/(home)/_components/notion-ai-button";
import {
  CalendarRange,
  ChevronDown,
  ChevronsLeft,
  CircleHelp,
  LayoutTemplate,
  NotebookPen,
  Settings,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const NavbarHorizontal = () => {
  const [toggleArrow, setToggleArrow] = useState<boolean>(false);

  const toggleArrowHandle = () => {
    setToggleArrow((prevState) => !prevState);
  };
  const toggleArrowHandleLeft = () => {
    setToggleArrow(false);
  };
  return (
    <>
      <section className="flex flex-col gap-6 w-72 h-screen pt-4 px-3 bg-[#202020]">
        <div
          className="flex flex-col gap-4 w-full"
          onMouseEnter={toggleArrowHandle}
          onMouseLeave={toggleArrowHandleLeft}
        >
          <div className="flex items-center justify-between h-10 px-2 rounded-sm hover:bg-[#303030] cursor-pointer">
            <div className="flex gap-2">
              <Image
                src="/perflog.jpg"
                alt="perflog images"
                width={24}
                height={24}
                className="rounded-full object-cover"
              />
              <p className="text-white">...</p>
              <ChevronDown className="text-[#ffffff8c]" width={16} />
            </div>
            <div className="flex items-center gap-4">
              {toggleArrow ? (
                <ChevronsLeft width={24} className="text-[#ffffff9c]" />
              ) : (
                ""
              )}
              <NotebookPen className="text-white" width={16} />
            </div>
          </div>
          <NavbarItemsSingular />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-[#ffffff99]">Private</h2>
          <p className="ml-4 text-sm text-[#ffffff99]">my dashboard../</p>
        </div>
        <div className="flex flex-col gap-[2px]">
          <NavbarItems
            icon={<CalendarRange width={18} className="text-[#ffffff99]" />}
            title="Calendar"
          />
          <NavbarItems
            icon={<Settings width={18} className="text-[#ffffff99]" />}
            title="Settings"
          />
          <NavbarItems
            icon={<LayoutTemplate width={18} className="text-[#ffffff99]" />}
            title="Templates"
            href="/templates"
          />
          <NavbarItems
            icon={<Trash2 width={18} className="text-[#ffffff99]" />}
            title="Trash"
          />
          <NavbarItems
            icon={<CircleHelp width={18} className="text-[#ffffff99]" />}
            title="Help"
          />
        </div>
        <Dots />
        <NotionAiButton />
      </section>
    </>
  );
};

export default NavbarHorizontal;
