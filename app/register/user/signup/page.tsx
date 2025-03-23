"use client";
import { CreateUser } from "@/backendactions/useractions";
import BFormInput from "@/components/business/BFormInput";
import Button from "@/components/Global_components/Button";
import React, { useEffect, useState } from "react";

export interface UserFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const Page = () => {
  const [userDetails, setUserDetails] = useState<UserFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "CUSTOMER",
  });
  const [err, setErr] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const onchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const validator = (data: UserFormData) => {
    const { name, email, password, confirmPassword, role } = data;
    switch (true) {
      case !name:
        setErr("No username found");
        return false;
      case !email:
        setErr("No emails provided");
        return false;
      case password.length < 6:
        setErr("Please create secure password ");
        return false;
      case password !== confirmPassword:
        setErr("Passwords do not match");
        return false;
      case !role:
        setErr("No role selected");
        return false;
      default:
        setErr(undefined);
        return true;
    }
  };
  useEffect(() => {
    if (err) {
      console.log(err);
    }
  }, [err]);
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validator(userDetails);
    if (isValid) {
      setLoading(true);
      try {
        const response = await CreateUser(userDetails);
        console.log(response);
        // Optionally reset the form or redirect the user upon successful signup
      } catch (error) {
        console.error("Signup failed:", error);
        setErr("Signup failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="w-full m-[0_auto] grid place-items-center mt-8 gap-4 p-2">
      <form
        onSubmit={submitForm}
        className="md:w-[800px] w-full grid md:grid-cols-2 gap-2  p-4 rounded-md"
      >
        <div>
          <h1 className="text-2xl">Sign Up</h1>
          <p className="text-secondary">Please enter the details below</p>
          {err && <p className="text-red-500">{err}</p>}
        </div>
        <div className=" grid gap-2">
          <BFormInput label="name" onchange={onchange} />
          <BFormInput label="email" onchange={onchange} />
          <BFormInput label="password" onchange={onchange} type="password" />
          <BFormInput
            label="confirmPassword"
            onchange={onchange}
            type="password"
          />
          <div className="mb-4 grid gap-2">
            <label className="" htmlFor="role">
              Role
            </label>
            <select
              name="role"
              value={userDetails.role}
              onChange={onchange}
              className="shadow appearance-none border-none rounded p-1 px-2 w-full text-secondary bg-primary  focus:outline-none focus:shadow-outline"
            >
              <option value="CUSTOMER">Customer</option>
              <option value="BUSINESS_OWNER">Business Owner</option>
              <option value="EMPLOYEE">Employee</option>
            </select>
          </div>
          <Button variant="accent" className="text-primary" disabled={loading}>
            {loading ? "Creating user ...." : "Sign Up"}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Page;
