import React from "react";
import { Outlet } from "react-router";
import Footer from "../../../components/Shared/Footer/Footer";
import DashbordNav from "./DashbordNav/DashbordNav";

const HR_Dashbord = () => {
  return (
    <>
      <DashbordNav className="sticky top-0"></DashbordNav>

      <Footer></Footer>
    </>
  );
};

export default HR_Dashbord;
