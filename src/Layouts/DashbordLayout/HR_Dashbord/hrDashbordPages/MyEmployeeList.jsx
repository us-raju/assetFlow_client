import React, { useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import Loading from "../../../../components/Loading/Loading";

const MyEmployeeList = () => {
  const { user, loading } = useAuth();
  const instance = useAxios();
  // const [myEmployee, setMyEmployee] = useState([]);
  const {
    data: employee,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["request_Asset", user?.email],
    queryFn: async () => {
      const res = await instance.get(
        `/myemployee?email=${user.email} & companyName=${user.companyName}`
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
            Employees Used:1/5
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
                <tr className="text-secondary">
                  <th>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </th>
                  <td>
                    <div className="flex items-center">
                      <div>
                        <div className="font-bold">Dells</div>
                      </div>
                    </div>
                  </td>
                  <td>raju@gmail.com</td>
                  <td>10/12/2025</td>
                  <td>10</td>
                  <td>
                    <button className="btn border-secondary bg-transparent hover:bg-primary hover:text-base-200 duration-200 btn-xs sm:mr-2 mb-2 sm:mb-0">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEmployeeList;
