interface SettingsItemsProps {
  icon: any;
  title: string;
}

const SettingsItems = ({ icon, title }: SettingsItemsProps) => {
  return (
    <>
      <section className="flex items-center gap-2 py-[2px] cursor-pointer hover:bg-[#ffffff12] px-4">
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
