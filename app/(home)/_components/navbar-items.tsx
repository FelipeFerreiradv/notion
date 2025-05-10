"use client";

import { Skeleton } from "@/app/components/ui/skeleton";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarItemsProps {
  icon: any;
  title: string;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}

const NavbarItems: React.FC<NavbarItemsProps> = ({
  icon,
  title,
  href,
  className,
  style,
}) => {
  const pathName = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(loader);
  });

  return (
    <>
      <Link href={`${href}`}>
        <div
          style={style}
          className={clsx(
            `flex items-center gap-3 py-1 px-4 rounded-lg cursor-pointer ${pathName === href ? "bg-[#ffffff15]" : "hover:bg-[#ffffff15]"}`,
            className
          )}
        >
          {isLoading ? <Skeleton className="w-5 h-5 rounded-md" /> : icon}
          {isLoading ? (
            <Skeleton className="w-full h-4 rounded-md" />
          ) : (
            <p style={style} className={clsx("text-[#ffffff99]", className)}>
              {title}
            </p>
          )}
        </div>
      </Link>
    </>
  );
};

export default NavbarItems;
