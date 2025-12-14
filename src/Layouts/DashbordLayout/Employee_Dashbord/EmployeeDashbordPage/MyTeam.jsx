import React from "react";
import teamImg from "../../../../assets/testimonial1.jpg";
import { IoArrowDownCircleOutline } from "react-icons/io5";
const MyTeam = () => {
  return (
    <>
      <section>
        <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
          My Team
        </h2>
        <div className="mb-5">
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              <p className="text-primary font-semibold">Select Company</p>{" "}
              <span>
                <IoArrowDownCircleOutline />
              </span>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm text-secondary"
            >
              <li>
                <a>ACB Company</a>
              </li>
              <li>
                <a>XYZ Company</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="cards_Container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="card bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
            <figure>
              <img src={teamImg} />
            </figure>
            <div className="p-5 pt-2">
              <div className="flex items-center">
                <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold mr-2">
                  Name:
                </h3>
                <p className="text-secondary">Tamzid</p>
              </div>
              <div className="flex items-center">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold mr-2">
                  Email:
                </p>
                <p className="text-secondary">raju@gmail.com</p>
              </div>
              <div className="flex items-center">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold mr-2">
                  Position:
                </p>
                <p className="text-secondary">Not Assigned</p>
              </div>
            </div>
          </div>
          <div className="card bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
            <figure>
              <img src={teamImg} />
            </figure>
            <div className="p-5 pt-2">
              <div className="flex items-center">
                <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold mr-2">
                  Name:
                </h3>
                <p className="text-secondary">Tamzid</p>
              </div>
              <div className="flex items-center">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold mr-2">
                  Email:
                </p>
                <p className="text-secondary">raju@gmail.com</p>
              </div>
              <div className="flex items-center">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold mr-2">
                  Position:
                </p>
                <p className="text-secondary">Not Assigned</p>
              </div>
            </div>
          </div>
          <div className="card bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
            <figure>
              <img src={teamImg} />
            </figure>
            <div className="p-5 pt-2">
              <div className="flex items-center">
                <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold mr-2">
                  Name:
                </h3>
                <p className="text-secondary">Tamzid</p>
              </div>
              <div className="flex items-center">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold mr-2">
                  Email:
                </p>
                <p className="text-secondary">raju@gmail.com</p>
              </div>
              <div className="flex items-center">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold mr-2">
                  Position:
                </p>
                <p className="text-secondary">Not Assigned</p>
              </div>
            </div>
          </div>
          <div className="card bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
            <figure>
              <img src={teamImg} />
            </figure>
            <div className="p-5 pt-2">
              <div className="flex items-center">
                <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold mr-2">
                  Name:
                </h3>
                <p className="text-secondary">Tamzid</p>
              </div>
              <div className="flex items-center">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold mr-2">
                  Email:
                </p>
                <p className="text-secondary">raju@gmail.com</p>
              </div>
              <div className="flex items-center">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold mr-2">
                  Position:
                </p>
                <p className="text-secondary">Not Assigned</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-primary text-[18px] font-semibold">
            🎂 Upcoming Birthdays (This Month)
          </h3>
          <ul className="list-disc ml-12 text-secondary">
            <li>Sarah — 12 Mar</li>
            <li>Alex — 28 Mar</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default MyTeam;
