import { useEffect } from "react";
import type { ParkingSlot } from "../types";

export const useIotSimulator = (
  setSlots: React.Dispatch<React.SetStateAction<ParkingSlot[]>>
) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setSlots(prev =>
        prev.map(slot =>
          Math.random() > 0.7
            ? {
                ...slot,
                status: slot.status === "available" ? "occupied" : "available"
              }
            : slot
        )
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [setSlots]);
};