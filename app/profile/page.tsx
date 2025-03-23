"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="  rounded-2xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 rounded-full  "
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium  mb-1">Full Name</label>
            <input
              type="text"
              disabled={!isEditing}
              className="w-full p-2 border text-primary  rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium  mb-1">Email</label>
            <input
              type="email"
              disabled={!isEditing}
              className="w-full p-2 border text-primary rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium  mb-1">Phone</label>
            <input
              type="tel"
              disabled={!isEditing}
              className="w-full p-2 border text-primary rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
