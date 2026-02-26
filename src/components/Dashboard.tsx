import { useState } from "react";
import ParkingSlot from "./ParkingSlot";
import type { ParkingSlot as Slot } from "../types";
import { useIotSimulator } from "../iot/useIotSimulator";
import { useAuth } from "../auth/AuthContext";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const [slots, setSlots] = useState<Slot[]>([
    { id: 1, status: "available" },
    { id: 2, status: "occupied" },
    { id: 3, status: "available" },
    { id: 4, status: "occupied" },
  ]);

  useIotSimulator(setSlots);

  const available = slots.filter(s => s.status === "available").length;

  return (
    <div>
      <h2>📊 Dashboard ({user?.role})</h2>
      <p>Available Slots: {available}</p>

      <div className="grid">
        {slots.map(slot => <ParkingSlot key={slot.id} slot={slot} />)}
      </div>
    </div>
  );
};

export default Dashboard;