import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...props }) => {
  const isAuthenticated = localStorage.getItem("user");
  return isAuthenticated ? (
    React.cloneElement(children, { ...props })
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
