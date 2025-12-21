import React, { useEffect, useState } from "react";
import Loading from "../../../../components/Loading/Loading";
import useAuth from "../../../../Hooks/useAuth";
import useAxios from "../../../../Hooks/useAxios";

const AllRequest = () => {
  const { loading, user } = useAuth();
  const [requestAssets, setRequestAssets] = useState([]);
  const instance = useAxios();

  useEffect(() => {
    if (!user) return;
    instance.get(`/request?email=${user.email}`).then((res) => {
      setRequestAssets(res.data);
    });
  }, [instance, user]);

  if (loading) return <Loading></Loading>;
  return (
    <>
      <div>
        <div className="table_Container">
          <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
            All Employee Request
          </h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-primary text-[12px] md:text-[16px]">
                <tr>
                  <th>Employee</th>
                  <th>Asset</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-[12px] md:text-[16px]">
                {requestAssets.map((asset) => (
                  <tr key={asset._id} className="text-secondary">
                    <th>{asset.requesterName}</th>
                    <td>
                      <div>
                        <div>
                          <div className="font-bold">{asset.assetName}</div>
                        </div>
                      </div>
                    </td>

                    <td>{asset.requestDate}</td>
                    <td className="text-yellow-500 rounded-[10px] py-1 ">
                      {asset.requestStatus}
                    </td>
                    <td>
                      <button className="btn border-secondary bg-transparent hover:bg-success hover:text-base-200 duration-200 btn-xs sm:mr-2 mb-2 sm:mb-0">
                        Accept
                      </button>
                      <button className="btn btn-ghost btn-xs border-secondary bg-transparent hover:bg-warning hover:text-base-200 duration-200">
                        Reject
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

export default AllRequest;
