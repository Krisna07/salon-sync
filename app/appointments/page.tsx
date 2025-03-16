"use client";
import { useState } from "react";
import AppointmentList from "@/components/appointments/AppointmentList";

export default function AppointmentsPage() {
  const [filter, setFilter] = useState("upcoming");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Appointments</h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFilter("upcoming")}
          className={`px-4 py-2 rounded-full ${
            filter === "upcoming"
              ? "bg-black text-white"
              : "bg-neutral-100 text-neutral-600"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setFilter("past")}
          className={`px-4 py-2 rounded-full ${
            filter === "past"
              ? "bg-black text-white"
              : "bg-neutral-100 text-neutral-600"
          }`}
        >
          Past
        </button>
      </div>
      <AppointmentList filter={filter} />
    </div>
  );
}
