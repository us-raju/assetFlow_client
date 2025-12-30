import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/Loading/Loading";
import Forbidden from "../components/Forbidden/Forbidden";

const HrRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) return <Loading></Loading>;


  if (!user) {
    return <Navigate to="/" />;
  }

  if (user.role !== "hr") {
    return <Navigate to="/authLayout/forbidden" replace />;
  }

  return children;
};

export default HrRoute;
