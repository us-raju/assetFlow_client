import React from "react";
import bannerImg from "../../../../assets/heroImgresize.jpg";
import { easeInOut, motion } from "framer-motion";
import useAuth from "../../../../Hooks/useAuth";
import Loading from "../../../../components/Loading/Loading";
import { Link, useNavigate } from "react-router";
const Banner = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  if (loading) return <Loading></Loading>;
  const hanldeNaviage = () => {
    if (user) {
      if (user.role === "hr") {
        navigate("/hr_dashbord");
      }
      if (user.role === "employee") {
        navigate("/employee_dashbord");
      }
    } else {
      navigate("/authLayout/login");
    }
  };

  return (
    <>
      <div
        className="bg-center bg-cover bg-no-repeat h-[400] lg:h-[600px] flex flex-col justify-center py-3"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="max-w-[140px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[640px] ">
          <motion.h1
            className="text-[18px] lg:text-5xl text-primary font-semibold mb-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Simplify HR & Asset Management in One Platform
          </motion.h1>

          <motion.p
            className="text-[12px] lg:text-2xl text-secondary font-medium"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Manage employees, track company assets, and automate HR
            workflows—all from a clean and smart dashboard.
          </motion.p>

          <div className="mt-5 flex flex-col  lg:flex-row sm:w-[150px] lg:w-full">
            <Link
              onClick={hanldeNaviage}
              className="border border-secondary mb-3 lg:mb-0 lg:mr-5 py-1 px-2 lg:py-2 lg:px-4  rounded-[10px] text-[12px] text-primary lg:text-[18px] font-medium hover:bg-primary hover:text-base-200 rsor-pointer"
            >
              Get Started
            </Link>

            <Link to="/hr_dashbord/upgradePackage" className="border border-secondary py-1 px-2 lg:py-2 lg:px-4 rounded-[10px] text-[12px] text-primary lg:text-[18px] font-medium hover:bg-primary hover:text-base-200  cursor-pointer">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
