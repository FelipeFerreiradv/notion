import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select-normal";
import { Switch } from "@/app/components/ui/switch";
import Link from "next/link";

const MySettings = () => {
  return (
    <>
      <section className="flex flex-col gap-8 w-full mt-6">
        <div className="flex items-center justify-between w-[87%]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#ffffffcf]">Apperence</h2>
            <p className="text-sm text-[#ffffff70]">
              Customize how Notion looks on your device.
            </p>
          </div>
          <Select>
            <SelectTrigger className="w-[145px] border-none">
              <SelectValue placeholder="User system Setting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between w-[87%]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#ffffffcf]">Open links in desktop app</h2>
            <p className="text-sm text-[#ffffff70]">
              You must have the
              <Link
                href="#"
                className="mx-1 underline transition-all hover:text-red-400"
              >
                Windowns App
              </Link>
              installed.
            </p>
          </div>
          <Switch />
        </div>
      </section>
    </>
  );
};

export default MySettings;
