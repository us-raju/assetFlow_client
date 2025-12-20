import React, { useEffect, useState } from "react";
import useAxios from "../../../../Hooks/useAxios";
import useAuth from "../../../../Hooks/useAuth";
import Loading from "../../../../components/Loading/Loading";

const AssetList = () => {
  const [assets, setAssets] = useState([]);
  const { loading } = useAuth();
  const instance = useAxios();
  useEffect(() => {
    instance.get("/asset").then((res) => {
      const assetData = res.data;
      setAssets(assetData);
    });
  }, [instance]);
  if (loading) return <Loading></Loading>;
  console.log(assets);
  return (
    <>
      <section>
        <div className="mb-5">
          <label className="input border border-secondary outline-primary rounded-[10px]">
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
              placeholder="Search by asset name"
            />
          </label>
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
                  <th>Quantity</th>
                  <th>Date Added</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-[12px] md:text-[16px]">
                {assets.map((asset) => (
                  <tr className="text-secondary">
                    <th key={asset._id}>
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={asset.productImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="flex items-center">
                        <div>
                          <div className="font-bold">{asset.productName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{asset.productType}</td>
                    <td>{asset.productQuantity}</td>
                    <td>{asset.addedDate}</td>
                    <td>
                      <button className="btn border-secondary bg-transparent hover:bg-primary hover:text-base-200 duration-200 btn-xs sm:mr-2 mb-2 sm:mb-0">
                        Edit
                      </button>
                      <button className="btn btn-ghost btn-xs border-secondary bg-transparent hover:bg-primary hover:text-base-200 duration-200">
                        Delete
                      </button>
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

export default AssetList;
