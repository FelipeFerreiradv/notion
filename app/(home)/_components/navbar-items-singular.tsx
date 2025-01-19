import { House, Inbox, Search, Webhook } from "lucide-react";
import NavbarItems from "./navbar-items";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const NavbarItemsSingular = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(loader);
  });
  return (
    <>
      <div className="flex flex-col gap-[2px]">
        {isLoading ? (
          <Skeleton className="w-1/2 h-4 rounded-xl" />
        ) : (
          <NavbarItems
            icon={<Search width={18} className="text-[#ffffff99]" />}
            title="Search"
          />
        )}
        {isLoading ? (
          <Skeleton className="w-8/12 h-4 rounded-xl" />
        ) : (
          <NavbarItems
            icon={<Webhook width={18} className="text-[#ffffff99]" />}
            title="Notion AI"
            href="ai"
          />
        )}
        {isLoading ? (
          <Skeleton className="w-1/2 h-4 rounded-xl" />
        ) : (
          <NavbarItems
            icon={<House width={18} className="text-[#ffffff99]" />}
            title="Home"
            href="/"
          />
        )}
        {isLoading ? (
          <Skeleton className="w-11/12 h-4 rounded-xl" />
        ) : (
          <NavbarItems
            icon={<Inbox width={18} className="text-[#ffffff99]" />}
            title="Inbox"
            href="inbox"
          />
        )}
      </div>
    </>
  );
};

export default NavbarItemsSingular;
