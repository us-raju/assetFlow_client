import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const EmployeeRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, setUser, updateUserProfile, SingIngoogle, user } = useAuth();
  const navigate = useNavigate();
  const instance = useAxios();

  const handleEmployeeRegistration = (data) => {
    const displayName = data.fullName;
    const email = data.email;
    const role = data.role;
    const dateOfBirth = data.dateOfBirth;
    const photoURL = data.ProfileImage;

    signUp(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        const userData = {
          displayName: displayName,
          email: email,
          role: role,
          dateOfBirth: dateOfBirth,
          photoURL: photoURL,
        };
        Swal.fire({
          title: "Registration",
          icon: "success",
          position: "top",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/employee_dashbord");

        instance
          .post("/user", userData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            const errMessage = err.message;
            console.log(errMessage);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: errorMessage,
          icon: "error",
        });
      });
  };

  const handleGoogleSignIn = () => {
    const role = "employee";

    SingIngoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        const userData = {
          ...user,
          role: role,
        };
        Swal.fire({
          title: "Registration",
          icon: "success",
          position: "top",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/employee_dashbord");
        instance
          .post("/user", userData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            const errMessage = err.message;
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: errorMessage,
          icon: "error",
        });
      });
  };

  return (
    <>
      <section className="mt-10">
        <form
          onSubmit={handleSubmit(handleEmployeeRegistration)}
          className="bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] max-w-lg p-5 rounded-[10px] mx-auto"
        >
          <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-2 text-center">
            Registration
          </h2>
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label text-primary font-semibold">
              Full Name*
            </label>
            <input
              {...register("fullName", { required: true })}
              type="text"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Full Name"
            />

            {/* Email  */}
            <label className="label text-primary font-semibold">Email*</label>
            <input
              {...register("email", { required: true })}
              type="text"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Email"
            />

            {/* Profile Image url  */}
            <label className="label text-primary font-semibold">
              Profile Image*
            </label>
            <input
              {...register("ProfileImage", { required: true })}
              type="url"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Profile Image (URL)"
            />
            {/* Role  */}
            <label className="label text-primary font-semibold">Role</label>
            <input
              {...register("role")}
              type="text"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              readOnly
              value="Employee"
            />
            {/* date of birth  */}
            <label className="label text-primary font-semibold">
              Date of Birth
            </label>
            <input
              {...register("dateOfBirth", { required: true })}
              type="date"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
            />
            {/* password  */}
            <div className="relative">
              <label className="label text-primary font-semibold">
                Password*
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                })}
                type={showPassword ? "text" : "password"}
                className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full pr-8"
                placeholder="Password"
              />
              <span className="absolute top-7 right-2 cursor-pointer z-30">
                {showPassword ? (
                  <IoEyeOutline
                    onClick={() => setShowPassword(false)}
                    size={20}
                  />
                ) : (
                  <IoEyeOffOutline
                    onClick={() => setShowPassword(true)}
                    size={20}
                  />
                )}
              </span>
              {errors.password?.type === "required" && (
                <p className="text-warning">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-warning">
                  Password must be at least 6 characters long
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-warning">
                  Password must include at least one uppercase letter, one
                  lowercase letter, one number, and one special character
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4"
            >
              Registration
            </button>
            <p className="text-primary font-semibold text-center mt-2">OR</p>
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className="text-secondary">
              Already have an account?
              <Link to="/login" className="text-blue-400">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default EmployeeRegister;
