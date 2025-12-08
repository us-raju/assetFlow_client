import React from "react";
import { LuUserCheck } from "react-icons/lu";
import { RiCheckboxCircleLine, RiFoldersLine } from "react-icons/ri";
import { TfiLock } from "react-icons/tfi";

const Feature = () => {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-10 text-center">
          About AssetFlow
        </h2>
        <div className="cardContainer grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="mb-2 bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] py-2 px-3 rounded-[10px] ">
            <div className="flex items-baseline">
              <span className="mr-2 text-primary">
                <RiCheckboxCircleLine size={20} />
              </span>
              <h3 className="text-[16px] lg:text-[20px] text-primary font-semibold mb-2">
                Asset Request & Approval System
              </h3>
            </div>
            <div>
              <ul className="list-disc ml-5 text-[12px] lg:text-[18px] text-secondary">
                <li>Employee sends asset request</li>
                <li>HR/Admin approves or rejects</li>
                <li>Full request history</li>
                <li>Transparent workflow</li>
              </ul>
            </div>
          </div>
          <div className="mb-2 bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] py-2 px-3 rounded-[10px] ">
            <div className="flex items-baseline">
              <span className="mr-2 text-primary">
                <RiFoldersLine size={20} />
              </span>
              <h3 className="text-[16px] lg:text-[20px] text-primary font-semibold mb-2">
               Unified Asset Management
              </h3>
            </div>
            <div>
              <ul className="list-disc ml-5 text-[12px] lg:text-[18px] text-secondary">
                <li>Asset list overview</li>
                <li>Current status tracking</li>
                <li>Assign/unassign items</li>
                <li>Reduce asset loss</li>
              </ul>
            </div>
          </div>
          <div className="mb-2 bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] py-2 px-3 rounded-[10px] ">
            <div className="flex items-baseline">
              <span className="mr-2 text-primary">
                <LuUserCheck size={20} />
              </span>
              <h3 className="text-[16px] lg:text-[20px] text-primary font-semibold mb-2">
                Employee Asset Assignment Tracking
              </h3>
            </div>
            <div>
              <ul className="list-disc ml-5 text-[12px] lg:text-[18px] text-secondary">
                <li>Track assigned items</li>
                <li>See who owns what</li>
                <li>Assignment logs</li>
                <li>Quick asset returns</li>
              </ul>
            </div>
          </div>
          <div className="mb-2 bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] py-2 px-3 rounded-[10px] ">
            <div className="flex items-baseline">
              <span className="mr-2 text-primary">
                <TfiLock size={20} />
              </span>
              <h3 className="text-[16px] lg:text-[20px] text-primary font-semibold mb-2">
                Secure Role-Based Access
              </h3>
            </div>
            <div>
              <ul className="list-disc ml-5 text-[12px] lg:text-[18px] text-secondary">
                <li>HR/Admin full control</li>
                <li>Employees limited access</li>
                <li>Secure login & privacy</li>
                <li>Prevent unauthorized actions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
