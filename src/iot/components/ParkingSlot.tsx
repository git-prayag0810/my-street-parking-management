import React from "react";
import { ParkingSlot as Slot } from "../../types/ParkingSlot";

const ParkingSlot: React.FC<{ slot: Slot }> = ({ slot }) => (
  <div className={`slot ${slot.status}`}>
    <h3>Slot {slot.id}</h3>
    <p>{slot.status}</p>
  </div>
);

export default ParkingSlot;