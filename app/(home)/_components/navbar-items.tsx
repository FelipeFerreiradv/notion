import { usePathname } from "next/navigation";

interface NavbarItems {
  icon: any;
  title: string;
  href?: string;
}

const NavbarItems = ({ icon, title, href }: NavbarItems) => {
  const pathName = usePathname();

  return (
    <>
      <div
        className={`flex items-center gap-3 py-1 px-4 rounded-lg cursor-pointer ${pathName === href ? "bg-[#ffffff15]" : "hover:bg-[#ffffff15]"}`}
      >
        {icon}
        <p className="text-[#ffffff99]">{title}</p>
      </div>
    </>
  );
};

export default NavbarItems;
