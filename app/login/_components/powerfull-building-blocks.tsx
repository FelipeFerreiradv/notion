import Image from "next/image";

const PowerFullBuildingBlocks = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl">
            We got rid of nearly a dozen different tools
          </p>
          <p className="text-3xl">because of what Notion does for us.</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/metalab-logo.png"
            alt="metalab logo"
            width={127}
            height={35}
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-sm">Justin Watt</h2>
            <p className="text-sm">Director of Ops & Marketing, MetaLab</p>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center my-20">
        <div className="flex items-center gap-3">
          <Image
            src="/peoples-login.png"
            alt="peoples images"
            width={221}
            height={150}
            className="mb-[-.9rem]"
          />
          <h1 className="font-extrabold text-[45px]">
            Powerful building blocks
          </h1>
        </div>
        <Image
          src="/powerfull-building-projects.png"
          alt="poerfull-building-projects image"
          width={1024}
          height={851.63}
        />
      </section>
    </>
  );
};

export default PowerFullBuildingBlocks;
