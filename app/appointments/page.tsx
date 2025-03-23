"use client";
import { useState } from "react";
import AppointmentList from "@/components/appointments/AppointmentList";

export default function AppointmentsPage() {
  const [filter, setFilter] = useState("upcoming");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid  gap-4">
      <h1 className="text-3xl font-bold">My Appointments</h1>
      <div className="flex space-x-4 ">
        <button
          onClick={() => setFilter("upcoming")}
          className={`px-4 py-1 rounded-full ${
            filter === "upcoming"
              ? "bg-primary text-white"
              : "bg-neutral-100 text-neutral-600"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setFilter("past")}
          className={`px-4 py-1 rounded-full ${
            filter === "past"
              ? "bg-primary text-white"
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
