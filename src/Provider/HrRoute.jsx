import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/Loading/Loading";
import Forbidden from "../components/Forbidden/Forbidden";

const HrRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) return <Loading></Loading>;
  console.log("Current User:", user);
  if (user && user.role === "hr") {
    return children;
  }
  if (user.role !== "hr") {
    return <Forbidden></Forbidden>;
  }
  return <Navigate to="/login" state={location.pathname} />;
};

export default HrRoute;
