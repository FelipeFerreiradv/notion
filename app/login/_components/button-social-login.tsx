import { Button } from "@/app/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { LiaCitySolid } from "react-icons/lia";

const ButtonSocialLogin = () => {
  return (
    <>
      <Button
        className="w-[320px] h-[36px] border border-[#00000020] rounded-sm font-medium"
        variant={"ghost"}
      >
        <FcGoogle />
        Continue with Google
      </Button>
      <Button
        className="w-[320px] h-[36px] border border-[#00000020] rounded-sm font-medium"
        variant={"ghost"}
      >
        <FaApple />
        Continue with Apple
      </Button>
      <Button
        className="w-[320px] h-[36px] border border-[#00000020] rounded-sm font-medium"
        variant={"ghost"}
      >
        <LiaCitySolid />
        Sigle sign-on (SSO)
      </Button>
    </>
  );
};

export default ButtonSocialLogin;
