import React from "react";
import { FaRegUserCircle, FaSquare } from "react-icons/fa";

const Profile = () => {
  return (
    <>
      <section>
        <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
          Profile
        </h2>

        <div className="bg-[#F5F5F5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] flex flex-col md:flex-row items-center max-w-[1000px] mx-auto rounded-[10px]">
          <div className="personalInfo w-full md:w-[50%] p-2 md:p-5 ">
            <div className="flex mb-5">
              <div className="max-w-[45px] max-h-[45px] mr-5">
                {" "}
                <span className="w-full h-full">
                  <FaRegUserCircle size={45} />
                </span>
              </div>
              <div>
                <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold">
                  Tamzid
                </h3>
                <p className="text-secondary">raju@gamil.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold">
                Personal Information
              </h3>
              <div>
                <div>
                  <label className="label text-primary">Full Name</label>
                  <br />
                  <input
                    type="text"
                    defaultValue="Tamzid"
                    className="input text-secondary outline-primary border-secondary  focus:border-none placeholder:text-secondary"
                  />
                </div>
                <div>
                  <label className="label text-primary">Date of Birth</label>
                  <br />
                  <input
                    type="date"
                    className="input text-secondary outline-primary border-secondary  focus:border-none "
                  />
                </div>
                <button
                  type="submit"
                  className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4"
                >
                  Save Change
                </button>
              </div>
            </div>
          </div>
          <div className="comapnyInfo w-full md:w-[50%] p-2 md:p-5">
            <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold">
              Company Information
            </h3>

            <div>
              <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold mb-5">
                ABC CORP
              </h3>
              <div className="flex  items-center mb-5">
                <div className="logo mr-5">
                  <span>
                    <FaSquare size={45} />
                  </span>
                </div>
                <div>
                  <h3 className="text-[16px] lg:text-[18px] text-primary font-medium">
                    Subscription Plan
                  </h3>
                  <p className="text-secondary">Basic</p>
                </div>
              </div>
              <div>
                <h3 className="text-[16px] lg:text-[18px] text-primary font-medium">
                  Subscription Info
                </h3>
                <div className="flex justify-between items-center w-[300px]">
                  <div>
                    <p className="text-secondary">Currnet Plan</p>
                    <p className="text-secondary">Employee Limit</p>
                    <p className="text-secondary">Used</p>
                  </div>
                  <div>
                    <p className="text-secondary">Basic</p>
                    <p className="text-secondary">5</p>
                    <p className="text-secondary">1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
