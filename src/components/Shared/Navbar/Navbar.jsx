import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, LogOut } = useAuth();
  const handleHrLogOut = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          title: "LogOut Successfull",
          icon: "success",
          position: "top-start",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: errorMessage,
          icon: "error",
          draggable: false,
        });
      });
  };
  const links = (
    <>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/employeeRegister">Join as Employee</Link>
      </li>

      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/hrRegister">Join as HR Manager </Link>
      </li>
    </>
  );
  const HrdrowdownLinks = (
    <>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/hr_dashbord/assetList">Asset List</Link>
      </li>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/hr_dashbord/addAsset">Add Asset</Link>
      </li>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/hr_dashbord/allRequest">All Requests</Link>
      </li>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/hr_dashbord/myEmployeeList">Employee List</Link>
      </li>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/hr_dashbord/profile">Profile</Link>
      </li>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <button onClick={handleHrLogOut} type="button">
          Logout
        </button>
      </li>
    </>
  );
  const employeedrowdownLinks = (
    <>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/"> My Assets</Link>
      </li>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/"> My Team</Link>
      </li>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/">Request Asset</Link>
      </li>

      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <Link to="/">Profile</Link>
      </li>
      <li className="hover:text-base-200 hover:bg-primary hover:rounded-[10px]">
        <button>Logout</button>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-primary font-medium "
          >
            {links}

            <li>
              <details>
                <summary className="hover:text-base-200 hover:bg-primary hover:rounded-[10px] ">
                  Employee
                </summary>
                <ul className="p-2 bg-base-100 w-40 z-1 text-primary font-medium">
                  {/* drop down li  */}
                  {employeedrowdownLinks}
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <Link className="text-primary text-2xl font-bold" to="/">
          AssetFlow
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-primary font-medium ">
          {links}
          <li>
            <details>
              <summary className="hover:text-base-200 hover:bg-primary hover:rounded-[10px] ">
                HR Manager
              </summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                {/* drop down li  */}
                {HrdrowdownLinks}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-[45px] h-[45px]">
          {user ? (
            <Link to="/Profile">
              <img className="w-full h-full rounded-full" src={user.companyLogo} alt="" />
            </Link>
          ) : (
            <span className="w-full h-full">
              <FaRegUserCircle size={45} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
