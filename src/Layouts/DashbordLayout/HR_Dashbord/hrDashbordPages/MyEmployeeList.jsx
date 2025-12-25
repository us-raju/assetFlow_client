import React, { useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import Loading from "../../../../components/Loading/Loading";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const MyEmployeeList = () => {
  const { user, loading } = useAuth();
  // const instance = useAxios();
  const instanceSecure = useAxiosSecure()
  const {
    data: employees,
    isLoading,
  } = useQuery({
    queryKey: ["request_Asset", user?.email],
    queryFn: async () => {
      const res = await instanceSecure.get(
        `/myemployee?email=${user.email}&companyName=${user.companyName}`
      );
      return res.data;
    },
  });

  if (loading || isLoading) return <Loading></Loading>;


  return (
    <>
      <div>
        <div className="mb-5">
          <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
            My Employee List
          </h2>
          <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold mb-5 text-center">
            Employees Used:{employees.length}/{user.packageLimit}
          </h3>
        </div>
        <div className="table_Container">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-primary text-[12px] md:text-[16px]">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Joined Date</th>
                  <th>Asset</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-[12px] md:text-[16px]">
                {/* row 1 */}
                {employees.map((employee, indx) => (
                  <tr key={indx} className="text-secondary">
                    <th>
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={employee.EmployeeImage} />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="flex items-center">
                        <div>
                          <div className="font-bold">
                            {employee.employeeName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{employee.employeeEmail}</td>
                    <td>
                      {employee.JoinedDate
                        ? new Date(employee.JoinedDate)
                            .toISOString()
                            .split("T")[0]
                        : "Loading..."}
                    </td>
                    <td>{employee.AssetCount}</td>
                    <td>
                      <button className="btn border-secondary bg-transparent hover:bg-primary hover:text-base-200 duration-200 btn-xs sm:mr-2 mb-2 sm:mb-0">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEmployeeList;
