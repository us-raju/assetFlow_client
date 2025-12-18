import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import Loading from "../../../../components/Loading/Loading";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const HRCompanyInfo = () => {
  const { register, handleSubmit } = useForm();
  const { user, setUser, loading, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const handleHrRegistation = (data) => {
    const role = data.role;
    const companyName = data.companyName;
    const companyLogo = data.companyLogo;
    const packageLimit = data.packageLimit;
    const currentEmployees = data.currentEmployees;
    const subscription = data.subscription;
    const dateOfBirth = data.dateOfBirth;

    updateUserProfile({
      companyName: companyName,
      companyLogo: companyLogo,
      role: role,
      dateOfBirth: dateOfBirth,
      subscription: subscription,
      currentEmployees: currentEmployees,
      packageLimit: packageLimit,
    }).then(() => {
      setUser({
        ...user,

        companyName: companyName,
        companyLogo: companyLogo,
        role: role,
        dateOfBirth: dateOfBirth,
        subscription: subscription,
        currentEmployees: currentEmployees,
        packageLimit: packageLimit,
      });
    });
    Swal.fire({
      title: "Registration",
      icon: "success",
      position: "top",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/hr_dashbord");
  };
  if (loading) return <Loading></Loading>;

  console.log(user);
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
