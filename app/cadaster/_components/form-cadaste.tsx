"use client";

import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select-normal";
import { Textarea } from "@/app/components/ui/textarea";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FormCadaster: React.FC = () => {
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        getCountryFromCoordinates(latitude, longitude);
      });
    }
  }, []);

  const getCountryFromCoordinates = async (
    latitude: number,
    longitude: number
  ) => {
    try {
      const response = await fetch(
        `https://geocode.xyz/${latitude},${longitude}?json=1`
      );
      const data = await response.json();
      if (data.country) {
        setCountry(data.country);
      }
    } catch (error) {
      Error("Erro ao fazer a requisição: " + error);
    }
  };

  return (
    <>
      <form
        action="#"
        className="flex flex-col gap-10 w-[470px] overflow-hidden"
      >
        <div className="flex items-center justify-between w-full gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="iname">First name</label>
            <Input
              type="text"
              name="name"
              id="iname"
              placeholder="Felipe"
              required
              className="focus-visible:ring-[#0000008f] placeholder:text-[#00000066] placeholder:text-base"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="ilastname">Last name</label>
            <Input
              type="text"
              name="lastname"
              id="ilastname"
              placeholder="Developer"
              required
              className="focus-visible:ring-[#0000008f] placeholder:text-[#00000066] placeholder:text-base"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="iemail">Work Email</label>
            <Input
              type="email"
              name="email"
              id="iemail"
              required
              className="focus-visible:ring-[#0000008f] placeholder:text-[#00000066] placeholder:text-base"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="ijobtitle">Job Title</label>
            <Input
              type="text"
              name="jobtitle"
              id="ijobtitle"
              required
              className="focus-visible:ring-[#0000008f] placeholder:text-[#00000066] placeholder:text-base"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="iphone">Phone number</label>
            <Input
              type="text"
              name="phone"
              id="iphone"
              placeholder="(123) 456-7891"
              required
              className="focus-visible:ring-[#0000008f] placeholder:text-[#00000066] placeholder:text-base"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="icompanyname">Company name</label>
            <Input
              type="text"
              name="companyname"
              id="icompanyname"
              placeholder="Lovelace Inc."
              required
              className="focus-visible:ring-[#0000008f] placeholder:text-[#00000066] placeholder:text-base"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label>Company Size</label>
            <Select>
              <SelectTrigger className="w-full h-8">
                <SelectValue
                  placeholder="Select..."
                  className="focus-visible:ring-[#0000008f] placeholder:text-[#0000009a] placeholder:text-base cursor-pointer"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="1-99"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  1-99 employees
                </SelectItem>
                <SelectItem
                  value="100-299"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  100-299 employees
                </SelectItem>
                <SelectItem
                  value="300-1999"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  300-1999 employees
                </SelectItem>
                <SelectItem
                  value="2000+"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  32000+ employees
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center justify-between w-full gap-8">
          <div className="flex flex-col gap-2 w-1/2">
            <label>Country or Region</label>
            <Select>
              <SelectTrigger className="w-full h-8">
                <SelectValue
                  placeholder={!country ? "Select..." : country}
                  className="focus-visible:ring-[#0000008f] placeholder:text-[#0000009a] placeholder:text-base cursor-pointer"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="AF"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Afghanistan
                </SelectItem>
                <SelectItem
                  value="AX"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Åland Islands
                </SelectItem>
                <SelectItem
                  value="AL"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Albania
                </SelectItem>
                <SelectItem
                  value="DZ"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Algeria
                </SelectItem>
                <SelectItem
                  value="AS"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  American Samoa
                </SelectItem>
                <SelectItem
                  value="AD"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Andorra
                </SelectItem>
                <SelectItem
                  value="AO"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Angola
                </SelectItem>
                <SelectItem
                  value="AI"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Anguilla
                </SelectItem>
                <SelectItem
                  value="AQ"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Antarctica
                </SelectItem>
                <SelectItem
                  value="AG"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Antigua & Barbuda
                </SelectItem>
                <SelectItem
                  value="AR"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Argentina
                </SelectItem>
                <SelectItem
                  value="AM"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Armenia
                </SelectItem>
                <SelectItem
                  value="AW"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Aruba
                </SelectItem>
                <SelectItem
                  value="AU"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Australia
                </SelectItem>
                <SelectItem
                  value="AT"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Austria
                </SelectItem>
                <SelectItem
                  value="AZ"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Azerbaijan
                </SelectItem>
                <SelectItem
                  value="BS"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Bahamas
                </SelectItem>
                <SelectItem
                  value="BH"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Bahrain
                </SelectItem>
                <SelectItem
                  value="BD"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Bangladesh
                </SelectItem>
                <SelectItem
                  value="BB"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Barbados
                </SelectItem>
                <SelectItem
                  value="BY"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Belarus
                </SelectItem>
                <SelectItem
                  value="BE"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Belgium
                </SelectItem>
                <SelectItem
                  value="BZ"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Belize
                </SelectItem>
                <SelectItem
                  value="BJ"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Benin
                </SelectItem>
                <SelectItem
                  value="BM"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Bermuda
                </SelectItem>
                <SelectItem
                  value="BT"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Bhutan
                </SelectItem>
                <SelectItem
                  value="BO"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Bolivia
                </SelectItem>
                <SelectItem
                  value="BA"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Bosnia & Herzegovina
                </SelectItem>
                <SelectItem
                  value="BW"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Botswana
                </SelectItem>
                <SelectItem
                  value="BV"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Bouvet Island
                </SelectItem>
                <SelectItem
                  value="BR"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Brazil
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="ilastname">Reason for contact</label>
            <Select>
              <SelectTrigger className="w-full h-8">
                <SelectValue
                  placeholder="Select..."
                  className="focus-visible:ring-[#0000008f] placeholder:text-[#0000009a] placeholder:text-base cursor-pointer"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="enterprise"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  I’d like to discuss an enterprise use case
                </SelectItem>
                <SelectItem
                  value="pricing"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  I’d like to explore pricing options
                </SelectItem>
                <SelectItem
                  value="demo"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  I’d like to see a demo of the product
                </SelectItem>
                <SelectItem
                  value="other"
                  className="text-[#00000066] text-base cursor-pointer"
                >
                  Other (please provide more details below)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="itextarea">Provide more details(optional)</label>
            <Textarea
              placeholder="How are you looking to use Notion?"
              id="itextarea"
              className="placeholder:text-base focus-visible:ring-0 focus:border-[#0000008f]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-2">
            <Checkbox id="icheckbox" className="checked:bg-black" />
            <label htmlFor="icheckbox" className="text-[#000000c5]">
              I agree to Notion sending marketing communications about
              Notion(optional)
            </label>
          </div>
          <Button className="w-[133px] h-[36px] font-bold text-base text-white bg-[#141414]">
            Contact Sales
          </Button>
          <p className="text-sm text-[#000000b9]">
            You may unsubscribe from receiving marketing communications any
            time. Notion’s websites and communications are subject to our
            <Link href="#" className="ml-2 underline hover:text-cyan-600">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </form>
    </>
  );
};

export default FormCadaster;
