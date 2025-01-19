"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarItems {
  icon: any;
  title: string;
  href?: string;
}

const NavbarItems = ({ icon, title, href }: NavbarItems) => {
  const pathName = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(loader);
  });

  return (
    <>
      <div
        className={`flex items-center gap-3 py-1 px-4 rounded-lg cursor-pointer ${pathName === href ? "bg-[#ffffff15]" : "hover:bg-[#ffffff15]"}`}
      >
        {isLoading ? <Skeleton className="w-5 h-5 rounded-md" /> : icon}
        {isLoading ? (
          <Skeleton className="w-full h-4 rounded-md" />
        ) : (
          <p className="text-[#ffffff99]">{title}</p>
        )}
      </div>
    </>
  );
};

export default NavbarItems;
