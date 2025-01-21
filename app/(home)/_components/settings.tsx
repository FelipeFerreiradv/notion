"use client";

import clsx from "clsx";
import { CSSProperties } from "react";

interface UserSettingsProps {
  className?: string;
  style?: CSSProperties;
}

const UserSettings: React.FC<UserSettingsProps> = ({ className, style }) => {
  return (
    <>
      <section
        style={style}
        className={clsx(
          "absolute top-1/2 left-1/2 translate-x-[-50%] flex gap-32 max-w-[-100px + 100vh] w-[1150px] max-h-[715px] h-[-100px + 100vh] rounded-md bg-[#202020] z-[-1]",
          className
        )}
      >
        <div className="w-60 h-full bg-[rgba(255,255,255,0.3)]">
          kasjdbkjsabdas kasjdbkjsabdas kasjdbkjsabdas kasjdbkjsabdas
        </div>
        <div className="w-full h-full">
          asldnlsadnboas kasjdbkjsabdas kasjdbkjsabdas kasjdbkjsabdas
        </div>
      </section>
    </>
  );
};

export default UserSettings;
