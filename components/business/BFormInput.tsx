import React from "react";

interface BFormInputProps {
  label: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BFormInput = ({ label, onchange }: BFormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="businessName">{label}</label>
      <input
        type="text"
        onChange={onchange}
        className="bg-primary text-secondary rounded-md px-2 py-1 border-none outline-none focus:ring-1 focus:ring-accent/50"
      />
    </div>
  );
};

export default BFormInput;
