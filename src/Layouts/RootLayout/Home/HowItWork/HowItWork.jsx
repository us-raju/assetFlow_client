import React from "react";
import { LuClipboardList } from "react-icons/lu";
import { MdLibraryAdd, MdOutlineAdminPanelSettings } from "react-icons/md";

const HowItWork = () => {
  return (
    <div>
      <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
        How It Works
      </h2>
      <div className="sectionContainer  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 h-full">
          <div className=" p-5 rounded-[10px] bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
            <div className="flex items-baseline">
              <span className="mr-2 text-primary font-bold">
                <MdLibraryAdd size={18} />
              </span>
              <h3 className="text-[18px] md:text-[20px] text-primary font-medium">
                Add & Manage All Assets
              </h3>
            </div>
            <p className="text-[12px] md:text-[18px] text-secondary mb-2">
              Admins add new assets, update stock, track availability, and
              organize items by category, department, or location.
            </p>
          </div>
          <div className=" p-5 rounded-[10px] bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
            <div className="flex items-baseline">
              <span className="mr-2 text-primary font-bold">
                <MdOutlineAdminPanelSettings size={18} />
              </span>
              <h3 className="text-[18px] md:text-[20px] text-primary font-medium">
                Review Employee Requests
              </h3>
            </div>
            <p className="text-[12px] md:text-[18px] text-secondary mb-2">
              HR/Admin sees all asset requests, checks availability, and
              manually approves or rejects based on company policy.
            </p>
          </div>
          <div className=" p-5 rounded-[10px] bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
            <div className="flex items-baseline">
              <span className="mr-2 text-primary font-bold">
                <LuClipboardList size={18} />
              </span>
              <h3 className="text-[18px] md:text-[20px] text-primary font-medium">
               Issue & Track Asset Usage
              </h3>
            </div>
            <p className="text-[12px] md:text-[18px] text-secondary mb-2">
              After approval, the asset is assigned to the employee. Admin can track who is using what and monitor return or replacement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
