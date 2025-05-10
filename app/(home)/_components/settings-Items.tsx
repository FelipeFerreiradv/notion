interface SettingsItemsProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}

const SettingsItems = ({ icon, title, onClick }: SettingsItemsProps) => {
  return (
    <>
      <section
        className="flex items-center gap-2 py-[2px] cursor-pointer hover:bg-[#ffffff12] px-4"
        onClick={onClick}
      >
        {icon}
        <h2
          className={
            title != "Upgrade plan" ? "text-[#ffffffc8]" : "text-[#2383e2]"
          }
        >
          {title}
        </h2>
      </section>
    </>
  );
};

export default SettingsItems;
