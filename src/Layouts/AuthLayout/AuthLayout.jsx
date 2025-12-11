import React from "react";

import { Outlet } from "react-router";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const AuthLayout = () => {
  return (
    <>
      <section className="w-10/12 md:w-11/12 mx-auto">
        <Navbar></Navbar>
      </section>
      <section className="w-10/12 md:w-11/12 mx-auto">
        <Outlet></Outlet>
      </section>
      <section className="w-10/12 md:w-11/12 mx-auto">
        <Footer></Footer>
      </section>
    </>
  );
};

export default AuthLayout;
