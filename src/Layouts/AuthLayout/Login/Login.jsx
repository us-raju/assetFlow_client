import { s } from "motion/react-m";
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router";

const Login = () => {
  const [registrationLinkModal, setRegistrationLinkModal] = useState(false);
  return (
    <>
      <section className="mt-10">
        <div className="">
          <form className="bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] max-w-lg p-5 rounded-[10px] mx-auto relative">
            <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-2 text-center">
              Login
            </h2>
            <fieldset className="fieldset">
              <label className="label text-primary font-semibold">Email*</label>
              <input
                type="text"
                className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full rounded-[10px]"
                placeholder="Email"
              />
              {/* password  */}
              <label className="label text-primary font-semibold">
                Password*
              </label>
              <input
                type="password"
                className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full rounded-[10px]"
                placeholder="Password"
              />
              <button
                type="submit"
                className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4 rounded-[10px]"
              >
                Login
              </button>
              <p className="text-primary font-semibold text-center mt-2">OR</p>
              <button
                type="submit"
                className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4 rounded-[10px]"
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
                Don't have account?
                <button
                  type="button"
                  onClick={() => setRegistrationLinkModal(true)}
                  className="text-blue-400 cursor-pointer"
                >
                  Create account
                </button>
              </p>
            </fieldset>
            {registrationLinkModal ? (
              <div className="bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] max-w-lg p-10 mx-auto rounded-[10px] mt-10 absolute top-[50%] ">
                <Link
                  to="/employeeRegister"
                  className="block my-2 border border-secondary p-2 bg-transparent text-center hover:bg-primary hover:text-base-200 duration-200 rounded-[10px]"
                >
                  Create an employee account
                </Link>
                <Link
                  to="/hrRegister"
                  className="block my-2 border border-secondary p-2 bg-transparent text-center hover:bg-primary hover:text-base-200 duration-200 rounded-[10px]"
                >
                  Create an HR account
                </Link>

                <button onClick={()=>setRegistrationLinkModal(false)}
                  className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-transparent text-primary border border-primary hover:bg-primary hover:text-base-200  cursor-pointer top-2.5 right-2.5 absolute"
                  type="button"
                >
                  <FaXmark></FaXmark>
                </button>
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
