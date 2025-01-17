"use client";

import { ChevronDown, ChevronsLeft, NotebookPen } from "lucide-react";
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
      <section className="flex flex-col gap-8 w-72 h-screen pt-4 px-4 bg-[#202020]">
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
        </div>
      </section>
    </>
  );
};

export default NavbarHorizontal;
