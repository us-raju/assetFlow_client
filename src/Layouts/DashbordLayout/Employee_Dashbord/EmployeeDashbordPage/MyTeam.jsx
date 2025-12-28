import React, { useState } from "react";
import teamImg from "../../../../assets/testimonial1.jpg";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import useAxios from "../../../../Hooks/useAxios";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../components/Loading/Loading";
import { CgProfile } from "react-icons/cg";
const MyTeam = () => {
  const { user } = useAuth();
  const instance = useAxios();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const today = new Date();
  const currentMonth = today.getMonth() + 1;

  const { data: affiliationEmployees, isLoading } = useQuery({
    queryKey: ["employeeAssets", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await instance.get(`/my-team?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading></Loading>;
  const seen = new Set();

  const displayedEmployees = (
    affiliationEmployees
      ? selectedCompany
        ? affiliationEmployees.find((c) => c.companyName === selectedCompany)
            ?.members ?? []
        : affiliationEmployees.flatMap((c) => c?.members ?? [])
      : []
  ).filter((emp) => {
    if (!emp || !emp.dateOfBirth) return false;

    const key = emp._id ?? `${emp.employeeName}-${emp.dateOfBirth}`;

    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const birthdayThisMonth = displayedEmployees.filter((emp) => {
  const empMonth = Number(emp.dateOfBirth.split("-")[1]);
  return empMonth === currentMonth;
});

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
                <button onClick={() => setSelectedCompany(null)}>
                  All Companies
                </button>
              </li>
              {affiliationEmployees?.length > 0 ? (
                affiliationEmployees.map((company) => (
                  <li key={company.companyName}>
                    <button
                      onClick={() => setSelectedCompany(company.companyName)}
                    >
                      {company.companyName}
                    </button>
                  </li>
                ))
              ) : (
                <li className="text-gray-400">No Company Found</li>
              )}
            </ul>
          </div>
        </div>
        <div className="cards_Container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {displayedEmployees.map((employee, indx) => (
            <div
              key={indx}
              className="card bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]"
            >
              <figure>
                {employee.photoURL ? (
                  <img className="h-[165px]" src={employee.photoURL} />
                ) : (
                  <span className="h-[165px]">
                    <CgProfile size={165} />
                  </span>
                )}
              </figure>
              <div className="p-5 pt-2">
                <div className="flex items-center">
                  <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold mr-2">
                    Name:
                  </h3>
                  <p className="text-secondary">{employee.employeeName}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-primary text-[12px] md:text-[16px] font-semibold mr-2">
                    Email:
                  </p>
                  <p className="text-secondary">{employee.employeeEmail}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-primary text-[12px] md:text-[16px] font-semibold mr-2">
                    Position:
                  </p>
                  <p className="text-secondary">{employee.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-primary text-[18px] font-semibold">
            🎂 Upcoming Birthdays (This Month)
          </h3>
          <ul className="list-disc ml-12 text-secondary">
            {birthdayThisMonth.map((emp, indx) =>
              emp ? (
                <li key={indx}>
                  {emp.employeeName ?? "Unknown"} —{" "}
                  {emp.dateOfBirth
                    ? new Date(emp.dateOfBirth).toLocaleDateString("en-GB")
                    : "N/A"}
                </li>
              ) : null
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default MyTeam;
