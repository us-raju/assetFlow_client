import React from "react";
import Loading from "../../../../components/Loading/Loading";
import useAuth from "../../../../Hooks/useAuth";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const AllRequest = () => {
  const { loading, user } = useAuth();

  const instance = useAxios();

  const {
    data: requestAssets,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["request_Asset", user?.email],
    queryFn: async () => {
      const res = await instance.get(`/request?email=${user.email}`);
      return res.data;
    },
  });

  // employee usage query
  const { data: usage } = useQuery({
    queryKey: ["employeeUsage", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await instance.get(`/employee-usage?email=${user.email}`);
      return res.data;
    },
  });

  const handleAcceptRequest = (asset) => {
    if (usage?.used >= usage?.max) {
      return Swal.fire({
        icon: "info",
        title: "Limit Reached",
        text: "Employee limit exceeded. Upgrade your package.",
      });
    }

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I Want to Accept!",
    }).then((result) => {
      if (result.isConfirmed) {
        instance
          .post(`/request/${asset._id}`, { assetId: asset.assetId })
          .then(() => {
            refetch();
            Swal.fire({
              title: "Accepted!",
              text: "You Accept Asset Request.",
              icon: "success",
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.response?.data?.message || err.message,
            });
          });
      }
    });
  };
  const handleRejectRequest = (id) => {
    const update = {
      requestStatus: "Rejected",
    };
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I Want to Reject!",
    }).then((result) => {
      if (result.isConfirmed) {
        instance
          .patch(`/request/${id}`, update)
          .then(() => {
            refetch();
            Swal.fire({
              title: "Rejected!",
              text: "You Reject Asset Request.",
              icon: "success",
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      }
    });
  };

  if (loading || isLoading) return <Loading></Loading>;

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
                      <button
                  
                        onClick={() => handleAcceptRequest(asset)}
                        className="btn border-secondary bg-transparent hover:bg-success hover:text-base-200 duration-200 btn-xs sm:mr-2 mb-2 sm:mb-0"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleRejectRequest(asset._id)}
                        className="btn btn-ghost btn-xs border-secondary bg-transparent hover:bg-warning hover:text-base-200 duration-200"
                      >
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
