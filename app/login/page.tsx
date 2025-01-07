import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import LoginCard from "./_components/login-card";

const Login = () => {
  return (
    <>
      <header className="flex items-center w-full">
        <nav className="flex items-center gap-4 m-6">
          <Image
            src="/notion-logo.png"
            alt="notion logo"
            width={30}
            height={30}
          />
          <div className="w-[1px] h-5 bg-[#00000031]"></div>
          <div className="ml-[-1rem]">
            <Select>
              <SelectTrigger className="w-[115px] h-[36px] border-transparent">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="Portugês"
                  className="flex flex-col items-start justify-start gap-4"
                >
                  <h2>Português (Brasil)</h2>
                  <p className="text-xs text-zinc-500">Português (Brasil)</p>
                </SelectItem>
                <SelectItem
                  value="Portugês"
                  className="flex flex-col items-start justify-start gap-4"
                >
                  <h2>English (United States)</h2>
                  <p className="text-xs text-zinc-500">
                    English (United States)
                  </p>
                </SelectItem>
                <SelectItem
                  value="Portugês"
                  className="flex flex-col items-start justify-start gap-4"
                >
                  <h2>Spanish (Espana)</h2>
                  <p className="text-xs text-zinc-500">Spanish (Espana)</p>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </nav>
      </header>
      <LoginCard />
    </>
  );
};

export default Login;
