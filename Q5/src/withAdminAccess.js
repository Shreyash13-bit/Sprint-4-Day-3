import React from "react";

const withAdminAccess = (WrappedComponent) => {
  return function AdminProtected(props) {
    const { role } = props;

    if (role !== "admin") {
      return <h2>Access Denied: Admins only</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAccess;
