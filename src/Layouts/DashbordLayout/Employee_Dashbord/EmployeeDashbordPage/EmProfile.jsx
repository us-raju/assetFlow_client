import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const EmProfile = () => {
  const [modalOpen, SetModalOpen] = useState(false);
  return (
    <>
      <section>
        <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
          Profile
        </h2>

        <div className="bg-[#F5F5F5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] flex flex-col md:flex-row items-center max-w-[500px] mx-auto rounded-[10px]">
          <div className="personalInfo w-full p-2 md:p-5 ">
            <div className="flex mb-5 relative">
              <div className="w-[60px] h-[60px] mr-5">
                {" "}
                <span className="w-[45px] h-[45px] ">
                  <FaRegUserCircle size={45} />
                </span>
                <button
                  onClick={() => SetModalOpen(true)}
                  type="button"
                  className="text-primary font-bold cursor-pointer border border-secondary mt-1 px-1 rounded-[10px] hover:bg-primary hover:text-base-200"
                >
                  Update
                </button>
              </div>
              <div>
                <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold">
                  Tamzid
                </h3>
                <p className="text-secondary">raju@gamil.com</p>
                <p className="text-secondary">No Company Affiliations</p>
              </div>
              {modalOpen ? (
                <div className="bg-base-200 text-right p-5 rounded-[10px] shadow-[0_20px_50px_rgba(8,112,184,0.3)] absolute top-0 left-0">
                  <form>
                    <input
                      type="url"
                      className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
                      placeholder="Profile Image Link(url)"
                    />
                    <button
                      onClick={() => SetModalOpen(false)}
                      type="submit"
                      className="text-primary font-bold cursor-pointer border border-secondary mt-3 px-1 rounded-[10px] hover:bg-primary hover:text-base-200 mr-3"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-primary font-bold cursor-pointer border border-secondary mt-3 px-1 rounded-[10px] hover:bg-primary hover:text-base-200"
                    >
                      Save
                    </button>
                  </form>
                </div>
              ) : (
                ""
              )}
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
        </div>
      </section>
    </>
  );
};

export default EmProfile;
