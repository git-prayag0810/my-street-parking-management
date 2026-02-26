export type Role = "admin" | "user";

export interface ParkingSlot {
  id: number;
  status: "available" | "occupied";
}

export interface User {
  username: string;
  role: Role;
}