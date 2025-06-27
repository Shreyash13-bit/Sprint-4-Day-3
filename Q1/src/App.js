import React from "react";
import { UserProvider } from "./UserContext";
import Dashboard from "./Dashboard";

function App() {
  return (
    <UserProvider>
      <div>
        <h1>Role-Based Access Control</h1>
        <Dashboard />
      </div>
    </UserProvider>
  );
}

export default App;
