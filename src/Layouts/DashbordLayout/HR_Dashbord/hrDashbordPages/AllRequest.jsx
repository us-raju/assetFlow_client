import React from "react";

const AllRequest = () => {
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
                {/* row 1 */}
                <tr className="text-secondary">
                  <th>Tamzid</th>
                  <td>
                    <div>
                      <div>
                        <div className="font-bold">Dells</div>
                      </div>
                    </div>
                  </td>

                  <td>10/12/2025</td>
                  <td className="text-yellow-500 rounded-[10px] py-1 ">
                    Pending
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRequest;
