"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import api from "@/services/user";
import { useEffect, useRef } from "react";
import { redirect } from "next/navigation";

const Signup = () => {
  const input_email = useRef<HTMLInputElement>(null);
  const input_password = useRef<HTMLInputElement>(null);

  const getUser = async () => {
    try {
      const response = await api.get("/users");
      console.log(response);
      return response;
    } catch {
      throw new Error("User not found");
    }
  };

  const postInformations = async () => {
    if (input_email.current && input_password.current) {
      const userInformations = await api.post("/users", {
        email: input_email.current.value,
        password: input_password.current.value,
      });

      redirect("/");

      return userInformations;
    } else {
      console.error("Inputs are not accessible");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="absolute top-10 left-1/2 translate-x-[-50%]">
        <Image
          src="/notion-logo.png"
          alt="Notion logo"
          width={32}
          height={32}
        />
      </div>
      <section className="flex flex-col items-center justify-center gap-8 h-screen">
        <h1 className="font-bold text-4xl text-[#2d333a]">
          Create your account
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Input
              type="email"
              name="email"
              id="iemail"
              placeholder="Email*"
              required
              ref={input_email}
              className="w-96 h-14 focus-visible:ring-0 border-[#686868]"
            />
            <Input
              type="password"
              name="password"
              id="ipassword"
              placeholder="Password*"
              required
              ref={input_password}
              className="w-96 h-14 focus-visible:ring-0 border-[#686868]"
            />
          </div>
          <Button
            className="w-96 h-14 text-lg bg-sky-600 hover:bg-sky-700"
            onClick={postInformations}
          >
            Continue
          </Button>
          <Button
            variant="link"
            className="text-sky-600 bg-transparent hover:text-sky-600"
          >
            <Link href="/login">Go back</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Signup;
