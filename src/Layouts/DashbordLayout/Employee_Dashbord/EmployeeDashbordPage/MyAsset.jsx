import React from "react";
import useAxios from "../../../../Hooks/useAxios";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../components/Loading/Loading";

const MyAsset = () => {
  const { user } = useAuth();
  const instance = useAxios();

  const { data: employeeAssets, isLoading } = useQuery({
    queryKey: ["employeeAssets", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await instance.get(`/assetAssgin?email=${user.email}`);
      return res.data;
    },
  });
  if (isLoading) return <Loading></Loading>;

  return (
    <>
      <section>
        <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
          My Asset
        </h2>

        <div className="mb-5 flex items-center justify-between">
          <label className="input border border-secondary outline-primary rounded-[10px]  mr-2 md:mr-0">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="text-secondary  placeholder:text-secondary"
              required
              placeholder="Search"
            />
          </label>
          <select
            defaultValue=""
            className="select input border border-secondary outline-primary rounded-[10px]  mr-2 md:mr-0"
          >
            <option value="" disabled>
              Asset Type
            </option>
            <option value="returnable">Returnable</option>
            <option value="non-returnable">Non-Returnable</option>
          </select>
        </div>
        <div className="table_Container">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-primary text-[12px] md:text-[16px]">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Company Name</th>
                  <th>Request Date</th>
                  <th>Approval Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-[12px] md:text-[16px]">
                {employeeAssets?.map((asset) => (
                  <tr key={asset._id} className="text-secondary">
                    <th>
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={asset.Image} />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="flex items-center">
                        <div>
                          <div className="font-bold">{asset.assetName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{asset.assetType}</td>
                    <td>{asset.companyName}</td>
                    <td>10/12/2025</td>
                    <td>
                      {
                        new Date(asset.assignmentDate)
                          .toISOString()
                          .split("T")[0]
                      }
                    </td>
                    <td className="text-success">Approved</td>
                    <td>
                      {asset.assetType === "Returnable" ? (
                        <button className="btn border-secondary bg-transparent hover:bg-primary hover:text-base-200 duration-200 btn-xs sm:mr-2 mb-2 sm:mb-0">
                          Return
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAsset;
