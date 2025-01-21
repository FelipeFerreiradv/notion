import Image from "next/image";

const NotionAiButton = () => {
  return (
    <>
      <section className="absolute bottom-8 right-8">
        <Image
          src="/notion-ai-button.gif"
          alt="Notion Ai button"
          width={36}
          height={36}
          className="rounded-full cursor-pointer"
        />
      </section>
    </>
  );
};

export default NotionAiButton;
