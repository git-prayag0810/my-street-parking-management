import type { ParkingSlot as Slot } from "../types";

interface Props {
  slot: Slot;
}

const ParkingSlot = ({ slot }: Props) => {
  return (
    <div
      className={`card ${
        slot.status === "available" ? "available" : "occupied"
      }`}
    >
      Slot {slot.id}
      <br />
      {slot.status}
    </div>
  );
};

export default ParkingSlot;