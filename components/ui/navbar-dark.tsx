"use client";

import { ChevronDown, ChevronRight, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

const NavbarDark = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenArrow, setIsOpenArrow] = useState<boolean>(false);
  const [isOpenResourses, setIsOpenResourses] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleMenuArrow = () => {
    setIsOpenArrow((prevState) => !prevState);
  };

  const toggleMenuResources = () => {
    setIsOpenResourses((prevState) => !prevState);
  };

  return (
    <>
      <header className="flex items-center justify-between max-w-screen h-[62px] gap-8 px-6">
        <div className="flex items-center gap-2 mr-4">
          <Link href="/product">
            <Image
              src="/notion-logo-dark.png"
              alt="notion logo"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="/product"
            className="font-semibold text-white text-[18px] "
          >
            Notion
          </Link>
        </div>
        <section className="flex items-center justify-between w-full h-[62px] max-lg:hidden">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <Link
                  href="/product"
                  className="font-semibold text-white text-[15px]"
                >
                  Product
                </Link>
                <ChevronDown width={14} height={14} className="text-white" />
              </div>
              <div
                className="relative flex flex-col"
                onMouseEnter={toggleMenuArrow}
              >
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="font-semibold text-white text-[15px]"
                  >
                    Download
                  </Link>
                  {isOpenArrow ? (
                    <ChevronUp
                      width={14}
                      height={14}
                      className="cursor-pointer text-white"
                    />
                  ) : (
                    <ChevronDown
                      width={14}
                      height={14}
                      className="cursor-pointer text-white"
                    />
                  )}
                </div>
                <div
                  className={
                    !isOpenArrow
                      ? "hidden"
                      : "absolute left-0 top-12 flex flex-col gap-3"
                  }
                >
                  <Link
                    href="#"
                    className="font-semibold text-white text-[15px]"
                  >
                    Notion
                  </Link>
                  <Link
                    href="#"
                    className="font-semibold text-white text-[15px]"
                  >
                    Calendar
                  </Link>
                  <Link
                    href="#"
                    className="font-semibold text-white text-[15px]"
                  >
                    Web Clipper
                  </Link>
                </div>
              </div>
              <div
                className="relative flex flex-col z-50"
                onMouseEnter={toggleMenuResources}
              >
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="font-semibold text-white text-[15px]"
                  >
                    Resources
                  </Link>
                  {!isOpenResourses ? (
                    <ChevronUp
                      width={14}
                      height={14}
                      className="cursor-pointer text-white"
                    />
                  ) : (
                    <ChevronDown
                      width={14}
                      height={14}
                      className="cursor-pointer text-white"
                    />
                  )}
                </div>
                <div
                  className={
                    isOpenResourses
                      ? "hidden"
                      : "absolute left-0 top-12 flex flex-col gap-3"
                  }
                >
                  <Link
                    href="#"
                    className="font-semibold text-white text-[15px]"
                  >
                    Personal
                  </Link>
                  <Link
                    href="#"
                    className="font-semibold text-white text-[15px]"
                  >
                    Students
                  </Link>
                  <Link
                    href="#"
                    className="font-semibold text-white text-[15px]"
                  >
                    Teachers
                  </Link>
                  <Link
                    href="#"
                    className="font-semibold text-white text-[15px]"
                  >
                    Creators
                  </Link>
                </div>
              </div>
              <Link href="#" className="font-semibold text-white text-[15px]">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="font-semibold text-white text[14px]">
              Request a demo
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="font-semibold text-white text[15px] rounded-[5px]"
              >
                Log in
              </Link>
              <Button className="w-[126px] h-[30px] font-semibold text-white text-[13.5px] bg-[#9D34DA]">
                Get Notion free
              </Button>
            </div>
          </div>
        </section>
        <div className="hidden max-lg:block" onClick={toggleMenu}>
          {isOpen ? (
            <X className="cursor-pointer text-white" />
          ) : (
            <Menu className="cursor-pointer text-white" />
          )}
        </div>
      </header>
      <header
        className={
          isOpen
            ? "absolute left-0 top-[62px] flex flex-col justify-between w-full h-full bg-black z-10"
            : "hidden"
        }
      >
        <section className="flex flex-col gap-8 w-[100% - 12px] my-6 mx-4">
          <div className="flex items-center justify-between cursor-pointer">
            <p className="font-bold text-lg text-white">Product</p>
            <ChevronRight className="text-white" />
          </div>
          <div className="flex items-center justify-between cursor-pointer">
            <p className="font-bold text-lg text-white">Teams</p>
            <ChevronRight className="text-white" />
          </div>
          <div className="flex items-center justify-between cursor-pointer">
            <p className="font-bold text-lg text-white">Individuals</p>
            <ChevronRight className="text-white" />
          </div>
          <div className="flex items-center justify-between cursor-pointer">
            <p className="font-bold text-lg text-white">Download</p>
            <ChevronRight className="text-white" />
          </div>
          <p className="font-bold text-lg text-white cursor-pointer">Pricing</p>
          <p className="font-bold text-lg text-white cursor-pointer">
            Request a demo
          </p>
        </section>
        <div className="flex flex-col items-center justify-center gap-4 mb-24">
          <Button className="w-[96%] h-[36px] font-bold text-lg text-white bg-[#9D34DA]">
            Get Notion free
          </Button>
          <Button className="w-[96%] h-[36px] text-lg text-white bg-transparent hover:bg-transparent">
            Log in
          </Button>
        </div>
      </header>
    </>
  );
};

export default NavbarDark;
