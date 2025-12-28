import React, { useEffect, useRef, useState } from "react";

import useAuth from "../../../../Hooks/useAuth";
import Loading from "../../../../components/Loading/Loading";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AssetList = () => {
  const { loading, user } = useAuth();
  const assetModalRef = useRef();
  const { register, handleSubmit, reset } = useForm();
  const [productId, setProductId] = useState("");
  const [search, setSearch] = useState("");

  const instanceSecure = useAxiosSecure();

  const {
    data: assets,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["request_Asset"],
    queryFn: async () => {
      const res = await instanceSecure.get(`/asset/${user.email}`);
      return res.data;
    },
  });

  const assetModal = (id) => {
    assetModalRef.current.showModal();
    setProductId(id);
  };
  const assetModalClose = () => {
    assetModalRef.current.close();
  };
  const AssetUpdateFunc = (data) => {
    const updatedData = {};
    Object.keys(data).forEach((assetKey) => {
      if (
        data[assetKey] !== "" &&
        data[assetKey] !== null &&
        data[assetKey] !== undefined &&
        data[assetKey] !== "Product Type"
      ) {
        updatedData[assetKey] = data[assetKey];
      }
    });

    instanceSecure
      .patch(`/asset/${productId}`, updatedData)
      .then((res) => {
        refetch();
        Swal.fire({
          title: "asset Update Successfully",
          icon: "success",
          position: "top",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        const errMessage = err.message;
        Swal.fire({
          title: errMessage,
          icon: "error",
        });
      });

    reset();
    assetModalRef.current.close();
  };

  const deleteAsset = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          instanceSecure.delete(`/asset/${id}`).then((res) => {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Asset has been deleted.",
              icon: "success",
            });
          });
        }
      })
      .catch((err) => {
        const errMessage = err.message;
        Swal.fire({
          title: errMessage,
          icon: "error",
        });
      });
  };

  if (!assets) return <Loading></Loading>;
  const filtfilteredAssets = assets.filter((asset) => {
    const matchesSearch = asset.productName
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesSearch;
  });
  if (loading || isLoading) return <Loading></Loading>;

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
              onChange={(e) => setSearch(e.target.value)}
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
                {filtfilteredAssets.map((asset) => (
                  <tr key={asset._id} className="text-secondary">
                    <th>
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
                      <button
                        type="button"
                        onClick={() => assetModal(asset._id)}
                        className="btn border-secondary bg-transparent hover:bg-primary hover:text-base-200 duration-200 btn-xs sm:mr-2 mb-2 sm:mb-0"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteAsset(asset._id)}
                        className="btn btn-ghost btn-xs border-secondary bg-transparent hover:bg-primary hover:text-base-200 duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <dialog ref={assetModalRef} id="my_modal_3" className="modal">
          <form
            method="dialog"
            onSubmit={handleSubmit(AssetUpdateFunc)}
            className="fieldset bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] p-5 rounded-[10px] max-w-lg mx-auto modal-box"
          >
            <button
              type="button"
              onClick={assetModalClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-2 text-center">
              Update an Asset
            </h2>
            <label className="label text-primary font-semibold">
              Product Name
            </label>
            <input
              {...register("productName")}
              type="name"
              className="input text-secondary outline-primary border-secondary  focus:border-none placeholder:text-secondary w-full"
              placeholder="Product Name"
            />
            <label className="label text-primary font-semibold">
              Product Image
            </label>
            <input
              {...register("productImage")}
              type="url"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Product Image Link(url)"
            />
            <label className="label text-primary font-semibold">
              Product Type
            </label>
            <select
              {...register("productType")}
              className="select text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
            >
              <option selected disabled>
                Product Type
              </option>
              <option>Returnable</option>
              <option>Non-returnable</option>
            </select>{" "}
            <label className="label text-primary font-semibold">
              Product Quantity
            </label>
            <input
              {...register("productQuantity")}
              type="number"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder=" Product Quantity"
            />
            <button
              type="submit"
              className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4"
            >
              Update Asset
            </button>
          </form>
        </dialog>
      </section>
    </>
  );
};

export default AssetList;
