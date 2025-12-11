import React from "react";
import { Link } from "react-router";

const HrRegister = () => {
  return (
    <>
      <section className="mt-10">
        <form className="bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] max-w-lg p-5 mx-auto rounded-[10px]">
          <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-2 text-center">
            Registration
          </h2>
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label text-primary font-semibold">
              Full Name*
            </label>
            <input
              type="text"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Full Name"
            />
            {/* Company Name  */}
            <label className="label text-primary font-semibold">
              Company Name*
            </label>
            <input
              type="text"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Company Name"
            />
            {/* Company logo url  */}
            <label className="label text-primary font-semibold">
              Company Logo*
            </label>
            <input
              type="url"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Company Logo (URL)"
            />
            {/* Email  */}
            <label className="label text-primary font-semibold">Email*</label>
            <input
              type="email"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Email"
            />
            {/* date of birth  */}
            <label className="label text-primary font-semibold">
              Date of Birth*
            </label>
            <input
              type="date"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Password"
            />
            {/* password  */}

            <label className="label text-primary font-semibold">
              Password*
            </label>
            <input
              type="password"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Password"
            />

            {/* Role  */}
            <label className="label text-primary font-semibold">
              Role
            </label>
            <input
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
              type="number"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              readOnly
              value="5"
            />
              {/* currentEmployees */}
            <label className="label text-primary font-semibold">
                 Current Employees
            </label>
            <input
              type="number"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              readOnly
              value="0"
            />
            {/* subscription */}
                <label className="label text-primary font-semibold">
              Subscription*
            </label>
            <input
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
            <p className="text-primary font-semibold text-center mt-2">OR</p>
            <button
              type="submit"
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

export default HrRegister;
