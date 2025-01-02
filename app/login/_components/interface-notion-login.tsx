import Image from "next/image";

const InterfaceNotionLogin = () => {
  return (
    <>
      <section className="flex flex-col my-28">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[45px]">Finally, all your</p>
          <p className="font-bold text-[45px]">work in one place</p>
        </div>
        <div className="flex flex-col items-end justify-end mr-4">
          <Image
            src="/layout-notion-login.png"
            alt="layout notion image"
            width={1200}
            height={610}
            className="object-cover"
          />
          <Image
            src="/layout-notion-login2.png"
            alt="layout notion image"
            width={1200}
            height={610}
            className="mt-[-4rem] object-cover"
          />
          <Image
            src="/layout-notion-login3.png"
            alt="layout notion image"
            width={1200}
            height={610}
            className="mt-[-4rem] object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default InterfaceNotionLogin;
