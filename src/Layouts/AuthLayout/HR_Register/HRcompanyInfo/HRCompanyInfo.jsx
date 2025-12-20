import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import Loading from "../../../../components/Loading/Loading";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useAxios from "../../../../Hooks/useAxios";

const HRCompanyInfo = () => {
  const { register, handleSubmit } = useForm();
  const { user, loading, setUser } = useAuth();
  const instance = useAxios();
  const navigate = useNavigate();
  if (loading) return <Loading></Loading>;
  const handleHrRegistation = (data) => {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const role = data.role;
    const companyName = data.companyName;
    const companyLogo = data.companyLogo;
    const packageLimit = data.packageLimit;
    const currentEmployees = data.currentEmployees;
    const subscription = data.subscription;
    const dateOfBirth = data.dateOfBirth;

    const userData = {
      displayName: displayName,
      email: email,
      role: role,
      companyName: companyName,
      companyLogo: companyLogo,
      packageLimit: packageLimit,
      currentEmployees: currentEmployees,
      subscription: subscription,
      dateOfBirth: dateOfBirth,
      photoURL: photoURL,
    };
    setUser(userData);
    Swal.fire({
      title: "Registration",
      icon: "success",
      position: "top",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/hr_dashbord");
    instance
      .post("/user", userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        const errMessage = err.message;
        console.log(errMessage);
      });
  };

  return (
    <>
      <section className="mt-10">
        <form
          onSubmit={handleSubmit(handleHrRegistation)}
          className="bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] max-w-lg p-5 mx-auto rounded-[10px]"
        >
          <h2 className="text-[18px] lg:text-2xl text-primary font-bold mb-2 text-center">
            Fill Up form To Join As HR Manager
          </h2>
          <fieldset className="fieldset">
            {/* Company Name  */}
            <label className="label text-primary font-semibold">
              Company Name*
            </label>
            <input
              {...register("companyName", { required: true })}
              type="text"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Company Name"
            />

            {/* Company logo url  */}
            <label className="label text-primary font-semibold">
              Company Logo*
            </label>
            <input
              {...register("companyLogo", { required: true })}
              type="url"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Company Logo (URL)"
            />

            {/* date of birth  */}
            <label className="label text-primary font-semibold">
              Your Date of Birth*
            </label>
            <input
              {...register("dateOfBirth", { required: true })}
              type="date"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Password"
            />

            {/* Role  */}
            <label className="label text-primary font-semibold">Role</label>
            <input
              {...register("role")}
              type="text"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              readOnly
              value="hr"
            />

            {/* package limit  */}
            <label className="label text-primary font-semibold">
              Package Limit
            </label>
            <input
              {...register("packageLimit")}
              type="number"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              readOnly
              defaultValue="5"
            />
            {/* currentEmployees */}
            <label className="label text-primary font-semibold">
              Current Employees
            </label>
            <input
              {...register("currentEmployees")}
              type="number"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              readOnly
              defaultValue="0"
            />
            {/* subscription */}
            <label className="label text-primary font-semibold">
              Subscription
            </label>
            <input
              {...register("subscription")}
              type="text"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              readOnly
              value="Basic"
            />

            <button
              type="submit"
              className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4"
            >
              Registration
            </button>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default HRCompanyInfo;
