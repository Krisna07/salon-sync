"use client";
import BFormInput from "@/components/business/BFormInput";
import React, { useState } from "react";

const Page = () => {
  const options = [
    "Details",
    "Contact",
    "Active Hours",
    "Services",
    "Staff",
    "Gallery",
  ];
  const [businessDetails, setBusinessDetails] = useState({
    businessName: "",
    businessDescription: "",
    businessType: "",
    businessCategory: "",
    businessSubCategory: "",
    businessEmail: "",
    businessPhone: "",
    businessAddress: "",
    businessCity: "",
    businessState: "",
    businessCountry: "",
    businessZipCode: "",
  });

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessDetails({ ...businessDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full m-[0_auto] grid place-items-center mt-8">
      <div className="w-3xl flex divide-x-2 divide-accent gap-4 ">
        <div className="w-full">Business Details</div>
        <div className="w-full px-4 grid gap-2">
          <BFormInput label="businessname" onchange={onchange} />
          <BFormInput label="businessDescription" onchange={onchange} />
          <BFormInput label="businessType" onchange={onchange} />
          <BFormInput label="businessCategory" onchange={onchange} />
          <BFormInput label="businessSubCategory" onchange={onchange} />
        </div>
      </div>
      <div className="w-3xl flex divide-x-2 divide-accent gap-4 ">
        <div className="w-full">Business Contact</div>
        <div className="w-full px-4 grid gap-2">
          <BFormInput label="businessname" onchange={onchange} />
          <BFormInput label="businessDescription" onchange={onchange} />
          <BFormInput label="businessType" onchange={onchange} />
          <BFormInput label="businessCategory" onchange={onchange} />
          <BFormInput label="businessSubCategory" onchange={onchange} />
        </div>
      </div>
    </div>
  );
};

export default Page;
