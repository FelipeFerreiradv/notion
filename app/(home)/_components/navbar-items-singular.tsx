import { House, Inbox, Search, Webhook } from "lucide-react";
import NavbarItems from "./navbar-items";

const NavbarItemsSingular = () => {
  return (
    <>
      <div className="flex flex-col gap-[2px]">
        <NavbarItems
          icon={<Search width={18} className="text-[#ffffff99]" />}
          title="Search"
        />
        <NavbarItems
          icon={<Webhook width={18} className="text-[#ffffff99]" />}
          title="Notion AI"
          href="ai"
        />
        <NavbarItems
          icon={<House width={18} className="text-[#ffffff99]" />}
          title="Home"
          href="/"
        />
        <NavbarItems
          icon={<Inbox width={18} className="text-[#ffffff99]" />}
          title="Inbox"
          href="inbox"
        />
      </div>
    </>
  );
};

export default NavbarItemsSingular;
