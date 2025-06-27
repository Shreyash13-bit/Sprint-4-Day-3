import React from "react";
import ProductEdit from "./ProductEdit";
import withAdminAccess from "./withAdminAccess";

const ProtectedProductEdit = withAdminAccess(ProductEdit);

function App() {
  const currentUserRole = "user"; // Change to 'admin' to allow access

  return (
    <div>
      <ProtectedProductEdit role={currentUserRole} />
    </div>
  );
}

export default App;
