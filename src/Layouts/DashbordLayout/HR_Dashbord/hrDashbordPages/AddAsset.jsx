import React from "react";

const AddAsset = () => {
  return (
    <>
      <section>
        <div className="form_container">
          <form className="fieldset bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] p-5 rounded-[10px] max-w-lg mx-auto ">
            <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-2 text-center">
              Add an Asset
            </h2>
            <label className="label text-primary font-semibold">
              Product Name
            </label>
            <input
              required
              type="name"
              className="input text-secondary outline-primary border-secondary  focus:border-none placeholder:text-secondary w-full"
              placeholder="Product Name"
            />
            <label className="label text-primary font-semibold">
              Product Image
            </label>
            <input
              required
              type="url"
              className="input text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full"
              placeholder="Product Image Link(url)"
            />
            <label className="label text-primary font-semibold">
              Product Type
            </label>
            <select className="select text-secondary outline-primary border-secondary focus:border-none placeholder:text-secondary w-full">
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
