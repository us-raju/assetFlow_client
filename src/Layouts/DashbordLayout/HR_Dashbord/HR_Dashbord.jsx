import React from "react";
import DashbordNav from "../../../components/Shared/DashbordNav/DashbordNav";
import { Outlet } from "react-router";
import Footer from "../../../components/Shared/Footer/Footer";

const HR_Dashbord = () => {
  return (
    <>
      <DashbordNav className="sticky top-0"></DashbordNav>

      <Footer></Footer>
    </>
  );
};

export default HR_Dashbord;
