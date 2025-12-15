import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { LiaUsersSolid } from "react-icons/lia";
import { RxFilePlus } from "react-icons/rx";
import { TbArrowBigUpLines } from "react-icons/tb";
import { Link, Outlet } from "react-router";

const DashbordNav = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full  bg-base-100 shadow-sm">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4">
              {" "}
              <Link className="text-primary text-2xl font-bold" to="/">
                AssetFlow
              </Link>
            </div>
          </nav>
          {/* Page content here */}
          <div className="p-4">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <Link
                  to="/hr_dashbord"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Home"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">Home</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/hr_dashbord/addAsset"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Add Asset"
                >
                  <RxFilePlus />
                  <span className="is-drawer-close:hidden">Add Asset</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/hr_dashbord/allRequest"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="All Requests"
                >
                  <HiOutlineClipboardList />
                  <span className="is-drawer-close:hidden">All Requests</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/hr_dashbord/myEmployeeList"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Employee List"
                >
                  <LiaUsersSolid />
                  <span className="is-drawer-close:hidden">
                    My Employee List
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/hr_dashbord/upgradePackage"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Upgrade Package"
                >
                  <TbArrowBigUpLines />
                  <span className="is-drawer-close:hidden">
                    Upgrade Package
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/hr_dashbord/profile"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Profile"
                >
                  <FaRegUserCircle />
                  <span className="is-drawer-close:hidden">Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashbordNav;
