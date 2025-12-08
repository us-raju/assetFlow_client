import React from "react";
import aboutImg from "../../../assets/about_img.png";
import { FcBarChart, FcOpenedFolder } from "react-icons/fc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosUnlock } from "react-icons/io";
const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row  items-stretch gap-10 mt-20">
        <div className="w-full lg:w-[40%]">
          <img className="h-full" src={aboutImg} alt="" />
        </div>
        <div className="w-full lg:w-[60%]">
          <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-2">
            About AssetFlow
          </h2>
          <p className="text-[12px] lg:text-[18px] text-secondary mb-2">
            AssetFlow is a smart and reliable asset management platform
            designed to help modern organizations track, organize, and manage
            their company assets with ease. Our goal is to simplify your
            workflow, improve accountability, and ensure your team always stays
            productive and informed.
          </p>
          <div className="mb-2 bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] py-2 px-3 rounded-[10px]">
            <div className="flex items-center">
              <span className="mr-2 text-primary">
                <FcOpenedFolder size={25} />
              </span>
              <h3 className="text-[16px] lg:text-2xl text-primary font-semibold mb-2">
                Centralized Asset Tracking
              </h3>
            </div>
            <p className="text-[12px] lg:text-[18px] text-secondary ">
              Monitor all company assets from a single, organized dashboard—no
              more spreadsheets or manual paperwork.
            </p>
          </div>
          <div className="mb-2 bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] py-2 px-3 rounded-[10px]">
            <div className="flex items-center">
              <span className="mr-2 text-primary">
                <IoSettingsOutline size={25} />
              </span>
              <h3 className="text-[16px] lg:text-2xl text-primary font-semibold mb-2">
                Streamlined Workflow for HR & Managers
              </h3>
            </div>
            <p className="text-[12px] lg:text-[18px] text-secondary ">
              From employee onboarding to asset handover, AssetFlow makes every
              process faster, clearer, and fully documented.
            </p>
          </div>
          <div className="mb-2 bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] py-2 px-3 rounded-[10px]">
            <div className="flex items-center ">
              <span className="mr-2 text-primary">
                <FcBarChart size={25} />
              </span>
              <h3 className="text-[16px] lg:text-2xl text-primary font-semibold mb-2">
                Real-Time Updates & Transparency
              </h3>
            </div>
            <p className="text-[12px] lg:text-[18px] text-secondary ">
              Track asset status, employee assignments, and maintenance needs in
              real time to reduce errors and boost operational efficiency.
            </p>
          </div>
          <div className=" bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] py-2 px-3 rounded-[10px]">
            <div className="flex items-center">
              <span className="mr-2 text-primary">
                <IoIosUnlock size={25} />
              </span>
              <h3 className="text-[16px] lg:text-2xl text-primary font-semibold mb-2">
                Secure & Scalable for Any Company Size
              </h3>
            </div>
            <p className="text-[12px] lg:text-[18px] text-secondary ">
              Built with enterprise-grade security, AssetFlow scales as your
              business grows—perfect for small teams to large corporations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
