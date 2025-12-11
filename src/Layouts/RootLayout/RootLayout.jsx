import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <section className="w-10/12 mx-auto md:w-11/12">
        <Navbar></Navbar>
      </section>
      <section className="w-10/12 mx-auto md:w-11/12">
        <Outlet></Outlet>
      </section>
      <section className="w-10/12 mx-auto md:w-11/12">
        <Footer></Footer>
      </section>
    </>
  );
};

export default RootLayout;
