"use client";

import { Input } from "@/app/components/ui/input";
import LoginsSocials from "./login-socials";
import { Button } from "@/app/components/ui/button";
import api from "../../../services/user.js";
import { useEffect, useRef, useState } from "react";
import { redirect } from "next/navigation";
import { setCookie } from "cookies-next";

const LoginCard = () => {
  const input_email = useRef<HTMLInputElement>(null);
  const [erroInput, setErroInput] = useState("");

  const getUsers = async () => {
    try {
      const response = await api.get("/users");
      console.log("Users fetched successfully:", response);

      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Failed to connect API");
      return null;
    }
  };

  const loginUser = async (error) => {
    if (input_email.current) {
      const login = await api.get(`/users?email=${input_email.current.value}`);

      if (login.data.length === 0) {
        setErroInput(error);
        setTimeout(() => {
          redirect("/login/signup");
        }, 2000);
      } else {
        setCookie("authorization", JSON.stringify(login));
        redirect("/");
      }
    } else {
      throw new Error("Email input is not available");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <title>...-Login</title>
      <section className="flex flex-col items-center justify-center gap-8 my-20">
        <div className="flex flex-col">
          <p className="font-bold text-2xl text-black">Think it. Make it.</p>
          <p className="text-2xl text-zinc-400">
            Log in to your Notion account
          </p>
        </div>
        <LoginsSocials />
        <section className="flex flex-col items-center justify-center w-[320px]">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="iemail" className="text-xs">
              Email
            </label>
            <Input
              type="text"
              name="email"
              id="iemail"
              placeholder="Enter your email address"
              required
              ref={input_email}
              className="text-[15px]"
            />
            <p className="text-xs text-neutral-400">
              Use an organization email to easily collaborate with <br />{" "}
              teammates
            </p>
          </div>
        </section>
        <div className="flex items-center justify-center">
          <Button className="w-[320px] bg-sky-600" onClick={loginUser}>
            Continue
          </Button>
        </div>
        <div>
          {erroInput ? (
            <p className="w-[450px] text-center text-base text-red-800">
              We could not reach the email address you provided. Please try
              again with a different email.
            </p>
          ) : (
            ""
          )}
          <p className="w-[450px] text-center text-xs text-neutral-500">
            Your name and photo are displayed to users who invite you to a
            workspace using your email. By continuing, you acknowledge that you
            understand and agree to the
          </p>
        </div>
      </section>
    </>
  );
};

export default LoginCard;
