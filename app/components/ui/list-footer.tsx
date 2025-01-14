interface ListFooterProps {
  title: string;
}

const ListFooter = ({ title }: ListFooterProps) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-[16px]">{title}</h2>
        <p className="text-[15px]">Wikis</p>
        <p className="text-[15px]">Projects</p>
        <p className="text-[15px]">Docs</p>
        <p className="text-[15px]">Notion AI</p>
        <p className="text-[15px]">What`s new</p>
      </div>
    </>
  );
};

export default ListFooter;
