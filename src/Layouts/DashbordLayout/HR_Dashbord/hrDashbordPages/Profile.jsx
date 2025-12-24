import React, { useState } from "react";
import { FaRegUserCircle, FaSquare } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import useAxios from "../../../../Hooks/useAxios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Profile = () => {
  const { user } = useAuth();
  const instance = useAxios();
  const { register, handleSubmit } = useForm();
  const [modalOpen, SetModalOpen] = useState(false);

  const handleProfileUpdate = (data) => {
    const updateData = {
      displayName: data.name,
      dateOfBirth: data.dateOfBirth,
    };
    instance
      .patch(`/user/${user.email}`, updateData)
      .then(() => {
        Swal.fire({
          title: "Profile Update Successful",
          icon: "success",
          position: "top",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: err.message,
          icon: "error",
        });
      });
  };
  const handleProfileImage = (data) => {
    const updateData = {
      photoURL: data.photo,
    };
    instance
      .patch(`/user/${user.email}`, updateData)
      .then(() => {
        SetModalOpen(false);
        Swal.fire({
          title: "Profile Photo Update Successful",
          icon: "success",
          position: "top",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: err.message,
          icon: "error",
        });
      });
  };

  return (
    <>
      <section>
        <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
          Profile
        </h2>

        <div className="bg-[#F5F5F5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] flex flex-col md:flex-row items-center max-w-[1000px] mx-auto rounded-[10px]">
          <div className="personalInfo w-full md:w-[50%] p-2 md:p-5">
            <div className="flex mb-5 relative">
              <div className="max-w-[45px] max-h-[45px] mr-5">
                {user ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <span className="w-full h-full">
                    <FaRegUserCircle size={45} />
                  </span>
                )}
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
              </div>
              {modalOpen ? (
                <div className="bg-base-200 text-right p-5 rounded-[10px] shadow-[0_20px_50px_rgba(8,112,184,0.3)] absolute top-0 left-0">
                  <form onSubmit={handleSubmit(handleProfileImage)}>
                    <input
                      type="url"
                      {...register("photo")}
                      className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
                      placeholder="Profile Image Link(url)"
                    />
                    <button
                      onClick={() => SetModalOpen(false)}
                      type="button"
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
            <div className="mt-10">
              <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold">
                Personal Information
              </h3>
              <div>
                <form onSubmit={handleSubmit(handleProfileUpdate)}>
                  <div>
                    <label className="label text-primary">Full Name</label>
                    <br />
                    <input
                      type="text"
                      defaultValue={user.displayName}
                      {...register("name")}
                      className="input text-secondary outline-primary border-secondary  focus:border-none placeholder:text-secondary"
                    />
                  </div>
                  <div>
                    <label className="label text-primary">Date of Birth</label>
                    <br />
                    <input
                      type="date"
                      defaultValue={user.dateOfBirth}
                      {...register("dateOfBirth")}
                      className="input text-secondary outline-primary border-secondary  focus:border-none "
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4"
                  >
                    Save Change
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="comapnyInfo w-full md:w-[50%] p-2 md:p-5">
            <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold">
              Company Information
            </h3>

            <div>
              <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold mb-5">
                {user.companyName}
              </h3>
              <div className="flex  items-center mb-5">
                <div className="logo mr-5">
                  {user ? (
                    <img
                      className="w-[45px] h-[45px]"
                      src={user.companyLogo}
                      alt=""
                    />
                  ) : (
                    <span>
                      <FaSquare size={45} />
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-[16px] lg:text-[18px] text-primary font-medium">
                    Subscription Plan
                  </h3>
                  <p className="text-secondary">{user.subscription}</p>
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
                    <p className="text-secondary">{user.subscription}</p>
                    <p className="text-secondary">{user.packageLimit}</p>
                    <p className="text-secondary">{user.currentEmployees}</p>
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
