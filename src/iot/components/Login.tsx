import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"admin" | "user">("user");

  return (
    <div className="login">
      <h2>🔐 Smart Parking Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <select onChange={e => setRole(e.target.value as any)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={() => login(username, role)}>Login</button>
    </div>
  );
};

export default Login;