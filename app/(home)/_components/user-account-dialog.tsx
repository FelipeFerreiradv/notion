"use client";

import { Button } from "@/app/components/ui/button";
import { CircleUser, Ellipsis, Settings } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { logoutUser } from "@/app/api/_untils/logout";
import UserSettings from "./settings";
import { useEffect, useState } from "react";
import getUserProfile from "../_untils/get-user-profile";

interface UserAccountDialogProps {
  className?: string;
  style?: React.CSSProperties;
}

const UserAccountDialog: React.FC<UserAccountDialogProps> = ({
  className,
  style,
}) => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);

  const getUser = async () => {
    try {
      const response = await getUserProfile();
      console.log("User fetched:", response);
      setEmail(response);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const userLogout = () => {
    const logout = logoutUser();

    return logout;
  };

  const toggleOpenSettings = () => {
    setOpenSettings((prevState) => !prevState);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <section
        style={style}
        className={clsx(
          "absolute left-4 top-11 flex-col w-[300px] h-[320px] rounded-md bg-[#242424] z-[-1] transition-all duration-500",
          className
        )}
      >
        <div className="flex flex-col gap-4 p-4 border-b-[.3px] border-[#ffffff21]">
          <div className="flex items-center gap-3">
            <Image
              src="/perflog.jpg"
              alt="perflog images"
              width={36}
              height={36}
              className="rounded-md object-cover"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="flex flex-col gap-1">
              <p className="text-sm text-white">...</p>
              <p className="text-xs text-[#ffffff71]">Free Plan - 1 member</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              className="flex items-center gap-2 w-24 h-8 text-center text-[11.5px] text-[#ffffffcd] border border-[#ffffff22] bg-transparent hover:bg-[#303030]"
              onClick={toggleOpenSettings}
            >
              <Settings width={14} /> Settings
            </Button>
            <Button className="flex items-center gap-2 w-[120px] h-8 text-center text-[11.5px] text-[#ffffffcd] border border-[#ffffff22] bg-transparent hover:bg-[#303030]">
              <CircleUser width={14} /> Invite members
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full py-2 px-4 border-b-[.3px] border-[#ffffff21] bg-[#191919]">
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#ffffff70]">
              {email || "../../../../../../"}
            </p>
            <Ellipsis
              width={14}
              height={14}
              className="text-[#ffffff70] rounded-sm hover:bg-[#303030] cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/perflog.jpg"
                alt="perflog images"
                width={17}
                height={17}
                className="rounded-md object-cover"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="text-[#ccc]">...</p>
            </div>
            <svg
              role="graphics-symbol"
              viewBox="0 0 16 16"
              className="thinCheck"
              style={{
                width: "12px",
                height: "12px",
                display: "block",
                fill: "white",
                flexShrink: 0,
                marginLeft: "auto",
              }}
            >
              <path d="M6.385 14.162c.362 0 .642-.15.84-.444L13.652 3.71c.144-.226.205-.417.205-.602 0-.485-.341-.82-.833-.82-.335 0-.54.123-.746.444l-5.926 9.4-3.042-3.903c-.205-.267-.417-.376-.718-.376-.492 0-.848.348-.848.827 0 .212.075.417.253.629l3.541 4.416c.24.3.492.437.848.437z"></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col w-full border-b-[.3px] border-[#ffffff21]">
          <p className="w-full h-7 px-4 py-4 text-xs rounded-lg text-[#ffffff70] cursor-pointer hover:bg-[#303030]">
            Create work account
          </p>
          <p className="w-full h-7 px-4 py-4 text-xs rounded-lg text-[#ffffff70] cursor-pointer hover:bg-[#303030]">
            Add another account
          </p>
          <p
            className="w-full h-10 px-4 py-4 pb-2 text-xs rounded-lg text-[#ffffff70] cursor-pointer hover:bg-[#303030]"
            onClick={userLogout}
          >
            Log out
          </p>
        </div>
        <div className="flex flex-col w-full">
          <p className="w-full h-10 px-4 py-4 pb-2 text-xs rounded-lg text-[#ffffff70] cursor-pointer hover:bg-[#303030]">
            Get Windows app
          </p>
        </div>
      </section>
      {openSettings && <UserSettings className="z-[100]" />}
    </>
  );
};

export default UserAccountDialog;
