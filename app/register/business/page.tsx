"use client";
import BFormInput from "@/components/business/BFormInput";
import Button from "@/components/Global_components/Button";
import { Business } from "@/lib/types";
import React, { useState } from "react";

const Page = () => {
  const options: string[] = [
    "Details",
    "Contact",
    "Active Hours",
    "Services",
    "Staff",
    "Gallery",
  ];
  const [businessDetails, setBusinessDetails] = useState<Business>({
    name: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    imageUrl: "",
    rating: 0,
    activeHours: "",
    type: "",
    services: [],
    //  employees: Employee[];
  });

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessDetails({ ...businessDetails, [e.target.name]: e.target.value });
  };

  const actionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(businessDetails);
  };

  return (
    <form
      onSubmit={actionSubmit}
      className="w-full m-[0_auto] grid place-items-center mt-8 gap-4 p-2"
    >
      <div className="md:w-[800px]  w-full grid md:grid-cols-2  divide-x-2 divide-accent gap-4 ">
        <div className="w-full">
          <span className="text-2xl">General Details</span>
          <p>Please enter the details about the business</p>
        </div>
        <div className="w-full px-4 grid gap-2">
          <BFormInput label="name" onchange={onchange} />
          <BFormInput label="descripton" onchange={onchange} />
        </div>
      </div>
      <div className="md:w-[800px] w-full grid md:grid-cols-2  divide-x-2 divide-accent gap-4 ">
        <div className="w-full">
          <span className="text-2xl">Contact Information</span>
          <p>Please provide all the contact details about the business</p>
        </div>
        <div className="w-full px-4 grid gap-2">
          <BFormInput label="phone" onchange={onchange} />
          <BFormInput label="address" onchange={onchange} type="address" />
          <BFormInput label="website" onchange={onchange} />
          <BFormInput label="email" onchange={onchange} />
        </div>
      </div>
      <div className="md:w-[800px] w-full grid md:grid-cols-2  divide-x-2 divide-accent gap-4 ">
        <div className="w-full">
          <span className="text-2xl">Services</span>
          <p>Please provide all the services that your business provide</p>
        </div>
        <div className="w-full px-4 grid gap-2">
          <BFormInput label="services" onchange={onchange} />
          <BFormInput label="activeHours" onchange={onchange} />
        </div>
      </div>
      <div className="md:w-[800px] w-full grid md:grid-cols-2  divide-x-2 divide-accent gap-4 ">
        <div className="w-full">
          <span className="text-2xl">Image</span>
          <p>An image</p>
        </div>
        <div className="w-full px-4 grid gap-2">
          <BFormInput label="image" onchange={onchange} type="file" />
        </div>
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default Page;
