"use client";

import Dots from "@/app/(home)/_components/dots";
import NavbarItems from "@/app/(home)/_components/navbar-items";
import NavbarItemsSingular from "@/app/(home)/_components/navbar-items-singular";
import NotionAiButton from "@/app/(home)/_components/notion-ai-button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlignJustify,
  CalendarRange,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
  CircleHelp,
  LayoutTemplate,
  NotebookPen,
  Settings,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavbarHorizontal = () => {
  const [toggleArrow, setToggleArrow] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isHide, setIsHide] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);

  console.log("isClick:", isClick, "isHide:", isHide, "isHover:", isHover);

  const toggleArrowHandle = () => {
    setToggleArrow(true);
  };

  const toggleNavbar = () => {
    setIsHide((prevState) => !prevState);
  };

  const toggleHover = () => {
    setIsHover((prevState) => !prevState);
  };

  const toggleClick = () => {
    setIsClick((prevState) => !prevState);
    if (!isClick) setIsHide((prevState) => !prevState);
  };

  const handleMouseMove = (event: MouseEvent) => {
    const mouseX = event.clientX;
    if (mouseX > 288) setIsHide(true);
  };

  useEffect(() => {
    const loader = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(loader);
  });

  useEffect(() => {
    if (isHover) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHover]);

  return (
    <>
      <section
        className={
          isClick
            ? "flex flex-col gap-6 w-72 h-screen pt-4 px-3 bg-[#202020] transition-all"
            : isHide
              ? "hidden"
              : `flex flex-col gap-6 ${
                  isHover ? "absolute w-72 h-[45%] top-40" : "w-72 h-screen"
                } pt-4 px-3 bg-[#202020] transition-all`
        }
      >
        <div
          className="flex flex-col gap-4 w-full"
          onMouseEnter={toggleArrowHandle}
          onMouseLeave={() => {
            setToggleArrow(false);
          }}
        >
          <div className="flex items-center justify-between h-10 px-2 rounded-sm hover:bg-[#303030] cursor-pointer">
            <div className="flex gap-2">
              {isLoading ? (
                <Skeleton className="w-6 h-6 rounded-full" />
              ) : (
                <Image
                  src="/perflog.jpg"
                  alt="perflog images"
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
              )}
              <p className="text-white">...</p>
              <ChevronDown className="text-[#ffffff8c]" width={16} />
            </div>
            {isLoading ? (
              <Skeleton className="w-[1600px] h-[15px]" />
            ) : (
              <div className="flex items-center gap-4">
                {toggleArrow ? (
                  <ChevronsLeft
                    width={24}
                    className={
                      isClick
                        ? "text-[#ffffff9c]"
                        : isHover
                          ? "hidden"
                          : "text-[#ffffff9c]"
                    }
                    onClick={toggleNavbar}
                  />
                ) : (
                  ""
                )}
                <NotebookPen className="text-white" width={16} />
              </div>
            )}
          </div>
          <NavbarItemsSingular />
        </div>
        <div className="flex flex-col gap-2">
          {isLoading ? (
            <Skeleton className="w-1/4 h-4" />
          ) : (
            <h2 className="text-sm text-[#ffffff99]">Private</h2>
          )}
          {isLoading ? (
            <Skeleton className="w-full h-4" />
          ) : (
            <p className="ml-4 text-sm text-[#ffffff99]">my dashboard../</p>
          )}
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
      </section>
      <Dots />
      <NotionAiButton />
      <div className={isClick ? "hidden" : "absolute top-4 left-4"}>
        {isHover ? (
          <ChevronsRight
            width={22}
            height={22}
            className="rounded-md text-[#ffffffc3] bg-zinc-800 cursor-pointer"
            onMouseEnter={toggleNavbar}
            onClick={toggleClick}
          />
        ) : isHide ? (
          <AlignJustify
            width={20}
            height={20}
            className="text-[#ffffffc3] cursor-pointer"
            onMouseEnter={toggleHover}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavbarHorizontal;
