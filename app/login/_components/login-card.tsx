import { Input } from "@/components/ui/input";
import LoginsSocials from "./login-socials";
import { Button } from "@/components/ui/button";

const LoginCard = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8 my-20">
        <div className="flex flex-col">
          <p className="font-bold text-2xl text-black">Think it. Make it.</p>
          <p className="text-2xl text-zinc-400">
            Log in to your Notion account
          </p>
        </div>
        <LoginsSocials />
        <section className="flex flex-col items-center justify-center w-[320px]">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="iemail" className="text-xs">
              Email
            </label>
            <Input
              type="text"
              name="email"
              id="iemail"
              placeholder="Enter your email adress"
              className="text-[15px]"
            />
            <p className="text-xs text-neutral-400">
              Use an organization email to easily collaborate with <br />{" "}
              teammates
            </p>
          </div>
        </section>
        <div className="flex items-center justify-center">
          <Button className="w-[320px] bg-sky-600">Continue</Button>
        </div>
        <div>
          <p className="w-[450px] text-xs text-neutral-500">
            Your name and photo are displayed to users who invite you to a
            workspace using your email. By continuing, you acknowledge that you
            understand and agree to the
          </p>
        </div>
      </section>
    </>
  );
};

export default LoginCard;
