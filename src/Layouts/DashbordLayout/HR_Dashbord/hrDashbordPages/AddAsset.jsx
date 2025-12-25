import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddAsset = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const instanceSecure = useAxiosSecure()
  const handleAsset = (data) => {
    const productName = data.productName;
    const productImage = data.productImage;
    const productType = data.productType;
    const productQuantity = Number(data.productQuantity);
    const hrEmail = user.email;
    const companyName = user.companyName;
    const assetInfo = {
      productName: productName,
      productImage: productImage,
      productType: productType,
      productQuantity: productQuantity,
      hrEmail: hrEmail,
      companyName: companyName,
      addedDate: new Date().toISOString().split("T")[0],
    };

    instanceSecure
      .post("/asset", assetInfo)
      .then((res) => {
        Swal.fire({
          title: "asset added Successfully",
          icon: "success",
          position: "top",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      })
      .catch((err) => {
        const errMessage = err.message;
        Swal.fire({
          title: errMessage,
          icon: "error",
        });
      });
  };

  return (
    <>
      <section>
        <div className="form_container">
          <form
            onSubmit={handleSubmit(handleAsset)}
            className="fieldset bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] p-5 rounded-[10px] max-w-lg mx-auto "
          >
            <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-2 text-center">
              Add an Asset
            </h2>
            <label className="label text-primary font-semibold">
              Product Name
            </label>
            <input
              {...register("productName", { required: true })}
              type="name"
              className="input text-secondary outline-primary border-secondary  focus:border-none placeholder:text-secondary w-full"
              placeholder="Product Name"
            />
            <label className="label text-primary font-semibold">
              Product Image
            </label>
            <input
              {...register("productImage", { required: true })}
              type="url"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Product Image Link(url)"
            />
            <label className="label text-primary font-semibold">
              Product Type
            </label>
            <select
              {...register("productType", { required: true })}
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
              {...register("productQuantity", { required: true })}
              type="number"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder=" Product Quantity"
            />
            <button
              type="submit"
              className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4"
            >
              Save Asset
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddAsset;
