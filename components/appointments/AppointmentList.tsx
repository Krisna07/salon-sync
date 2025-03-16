interface AppointmentListProps {
  filter: "upcoming" | "past";
}

const AppointmentList: React.FC<AppointmentListProps> = ({ filter }) => {
  return (
    <div className="space-y-4">
      {/* Add appointment items here */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold mb-2">Salon Name</h3>
            <p className="text-neutral-600">Service Type</p>
            <p className="text-sm text-neutral-500">Date and Time</p>
          </div>
          <div className="bg-neutral-100 px-3 py-1 rounded-full text-sm">
            Status
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;
