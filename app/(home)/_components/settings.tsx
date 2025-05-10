"use client";

import { ScrollArea } from "@/app/components/ui/scroll-area";
import clsx from "clsx";
import Image from "next/image";
import { CSSProperties, useState } from "react";
import {
  ArrowDownToLine,
  Bell,
  CircleUser,
  Globe,
  KeyRound,
  LayoutGrid,
  PanelTopDashed,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Smile,
  SquareArrowUpRight,
  TableProperties,
  UsersRound,
} from "lucide-react";
import SettingsItems from "./settings-Items";
import MyAccount from "./my-account";
import MySettings from "./my-account";

interface UserSettingsProps {
  className?: string;
  style?: CSSProperties;
}

const UserSettings: React.FC<UserSettingsProps> = ({ className, style }) => {
  const [selectedItem, setSelectedItem] = useState("My Settings");

  const renderContent = () => {
    switch (selectedItem) {
      case "My Account":
        return <div>My Account</div>;
      case "My Settings":
        return <MySettings />;
      case "My Notifications":
        return <div>My Notifications</div>;
      case "My Connections":
        return <div>My Connections</div>;
      case "Upgrade plan":
        return <div>Upgrade plan</div>;
      case "Settings":
        return <div>Settings</div>;
      case "Teamspaces":
        return <div>Teamspaces</div>;
      default:
        return "My Account";
    }
  };

  return (
    <>
      <section
        style={style}
        className={clsx(
          "absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex gap-32 transition-all max-w-[-100px + 100vh] w-[1150px] max-h-[715px] h-5/6 rounded-3xl bg-[#202020] overflow-hidden z-[-10]",
          className
        )}
      >
        <div className="flex flex-col w-96 h-full rounded-l-3xl text-white bg-[rgb(49,49,49)] gap-8">
          <div className="flex flex-col">
            <div className="flex flex-col p-4 gap-4">
              <p className="text-sm text-[#ffffff70]">Account</p>
              <div className="flex gap-3">
                <Image
                  src="/perflog.jpg"
                  alt="perflog images"
                  width={14}
                  height={14}
                  className="rounded-full object-cover"
                  style={{ width: "20px", height: "20px" }}
                />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold">...</p>
                  <p className="text-xs text-[#ffffff70]">fefelbf@gmail.com</p>
                </div>
              </div>
            </div>
            <SettingsItems
              icon={<CircleUser width={18} className="text-[#ffffffc8]" />}
              title="My Account"
              onClick={() => setSelectedItem("My Account")}
            />
            <SettingsItems
              icon={
                <SlidersHorizontal width={18} className="text-[#ffffffc8]" />
              }
              title="My Settings"
              onClick={() => setSelectedItem("My Settings")}
            />
            <SettingsItems
              icon={<Bell width={18} className="text-[#ffffffc8]" />}
              title="My Notifications"
              onClick={() => setSelectedItem("My Notifications")}
            />
            <SettingsItems
              icon={
                <SquareArrowUpRight width={18} className="text-[#ffffffc8]" />
              }
              title="My Connections"
            />
            <SettingsItems
              icon={<Globe width={18} className="text-[#ffffffc8]" />}
              title="Languege & Region"
              onClick={() => setSelectedItem("My Connections")}
            />
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <p className="px-4 text-sm text-[#ffffff70]">Workspace</p>
              <div className="flex flex-col">
                <SettingsItems
                  icon={<CircleUser width={18} className="text-[#2383e2]" />}
                  title="Upgrade plan"
                  onClick={() => setSelectedItem("Upgrade plan")}
                />
                <SettingsItems
                  icon={<Settings width={18} className="text-[#ffffffc8]" />}
                  title="Settings"
                  onClick={() => setSelectedItem("Settings")}
                />
                <SettingsItems
                  icon={
                    <TableProperties width={18} className="text-[#ffffffc8]" />
                  }
                  title="Teamspaces"
                  onClick={() => setSelectedItem("Teamspaces")}
                />
                <SettingsItems
                  icon={<UsersRound width={18} className="text-[#ffffffc8]" />}
                  title="People"
                  onClick={() => setSelectedItem("People")}
                />
                <SettingsItems
                  icon={
                    <PanelTopDashed width={18} className="text-[#ffffffc8]" />
                  }
                  title="Sites"
                  onClick={() => setSelectedItem("Sites")}
                />
                <SettingsItems
                  icon={<Smile width={18} className="text-[#ffffffc8]" />}
                  title="Emojis"
                />
                <SettingsItems
                  icon={<KeyRound width={18} className="text-[#ffffffc8]" />}
                  title="Security & data"
                />
                <SettingsItems
                  icon={<ShieldCheck width={18} className="text-[#ffffffc8]" />}
                  title="Identity & provisioning"
                />
                <SettingsItems
                  icon={<LayoutGrid width={18} className="text-[#ffffffc8]" />}
                  title="Connections"
                />
                <SettingsItems
                  icon={
                    <ArrowDownToLine width={18} className="text-[#ffffffc8]" />
                  }
                  title="Import"
                />
              </div>
            </div>
          </div>
        </div>
        <ScrollArea className="flex flex-col gap-8 w-full h-full my-12 text-white">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl text-[#ffffffcf]">
                {selectedItem}
              </h1>
              <div className="w-[700px] h-[.5px] bg-[#ffffff27]"></div>
            </div>
          </div>
          {renderContent()}
        </ScrollArea>
      </section>
    </>
  );
};

export default UserSettings;
