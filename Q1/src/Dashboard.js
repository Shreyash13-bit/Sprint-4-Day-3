import React from "react";
import { useUser } from "./UserContext";

const Dashboard = () => {
  const { user, loginAsAdmin, loginAsUser, logout } = useUser();

  return (
    <div>
      <h2>Dashboard</h2>
      {!user.isLoggedIn ? (
        <>
          <button onClick={loginAsAdmin}>Login as Admin</button>
          <button onClick={loginAsUser}>Login as User</button>
        </>
      ) : (
        <>
          <p>Welcome, {user.name} ({user.role})</p>
          {user.role === "admin" && <button>Add Product</button>}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
