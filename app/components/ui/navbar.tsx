"use client";

import { ChevronDown, ChevronRight, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

const Navbar = () => {
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
              src="/notion-logo.png"
              alt="notion logo"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/product" className="font-semibold text-[18px] ">
            Notion
          </Link>
        </div>
        <section className="flex items-center justify-between w-full h-[62px] max-lg:hidden">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <Link href="#" className="font-semibold text-[15px]">
                  Product
                </Link>
                <ChevronDown width={14} height={14} />
              </div>
              <div
                className="relative flex flex-col"
                onMouseEnter={toggleMenuArrow}
              >
                <div className="flex items-center gap-2">
                  <Link href="#" className="font-semibold text-[15px]">
                    Download
                  </Link>
                  {isOpenArrow ? (
                    <ChevronUp
                      width={14}
                      height={14}
                      className="cursor-pointer"
                    />
                  ) : (
                    <ChevronDown
                      width={14}
                      height={14}
                      className="cursor-pointer"
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
                  <Link href="#" className="font-semibold text-[15px]">
                    Notion
                  </Link>
                  <Link href="#" className="font-semibold text-[15px]">
                    Calendar
                  </Link>
                  <Link href="#" className="font-semibold text-[15px]">
                    Web Clipper
                  </Link>
                </div>
              </div>
              <div
                className="relative flex flex-col z-50"
                onMouseEnter={toggleMenuResources}
              >
                <div className="flex items-center gap-2">
                  <Link href="#" className="font-semibold text-[15px]">
                    Resources
                  </Link>
                  {isOpenResourses ? (
                    <ChevronUp
                      width={14}
                      height={14}
                      className="cursor-pointer"
                    />
                  ) : (
                    <ChevronDown
                      width={14}
                      height={14}
                      className="cursor-pointer"
                    />
                  )}
                </div>
                <div
                  className={
                    !isOpenResourses
                      ? "hidden"
                      : "absolute left-0 top-12 flex flex-col gap-3"
                  }
                >
                  <Link href="#" className="font-semibold text-[15px]">
                    Personal
                  </Link>
                  <Link href="#" className="font-semibold text-[15px]">
                    Students
                  </Link>
                  <Link href="#" className="font-semibold text-[15px]">
                    Teachers
                  </Link>
                  <Link href="#" className="font-semibold text-[15px]">
                    Creators
                  </Link>
                </div>
              </div>
              <Link href="#" className="font-semibold text-[15px]">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/cadaster" className="font-semibold text[14px]">
              Request a demo
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="font-semibold text[15px] rounded-[5px]"
              >
                Log in
              </Link>
              <Button className="w-[126px] h-[30px] font-semibold text-[13.5px]">
                Get Notion free
              </Button>
            </div>
          </div>
        </section>
        <div className="hidden max-lg:block" onClick={toggleMenu}>
          {isOpen ? (
            <X className="cursor-pointer" />
          ) : (
            <Menu className="cursor-pointer" />
          )}
        </div>
      </header>
      <header
        className={
          isOpen
            ? "absolute left-0 top-[62px] flex flex-col justify-between w-full h-full bg-white z-10"
            : "hidden"
        }
      >
        <section className="flex flex-col gap-8 w-[100% - 12px] my-6 mx-4">
          <div className="flex items-center justify-between cursor-pointer">
            <p className="font-bold text-lg">Product</p>
            <ChevronRight />
          </div>
          <div className="flex items-center justify-between cursor-pointer">
            <p className="font-bold text-lg">Teams</p>
            <ChevronRight />
          </div>
          <div className="flex items-center justify-between cursor-pointer">
            <p className="font-bold text-lg">Individuals</p>
            <ChevronRight />
          </div>
          <div className="flex items-center justify-between cursor-pointer">
            <p className="font-bold text-lg">Download</p>
            <ChevronRight />
          </div>
          <p className="font-bold text-lg cursor-pointer">Pricing</p>
          <p className="font-bold text-lg cursor-pointer">Request a demo</p>
        </section>
        <div className="flex flex-col items-center justify-center gap-4 mb-24">
          <Button className="w-[96%] h-[36px] font-bold text-lg text-white bg-[#1a1a19]">
            Get Notion free
          </Button>
          <Button
            variant="ghost"
            className="w-[96%] h-[36px] text-lg text-black bg-transparent"
          >
            Log in
          </Button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
