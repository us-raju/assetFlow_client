import React from "react";

const RequestAsset = () => {
  return (
    <>
      <section>
        <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
          Request an Asset
        </h2>
        <div className="cards_Container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="p-5 pt-2">
              <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold">
                Dells
              </h3>
              <div className="flex items-center justify-between mb-2">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold">
                  Type:
                </p>
                <p className="text-secondary text-[12px] md:text-[16px] badge badge-outline">
                  Returnable
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold">
                  Available Quantity:
                </p>
                <p className="text-secondary text-[12px] md:text-[16px] badge badge-outline">
                  10
                </p>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary rounded-[10px] mt-4"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="p-5 pt-2">
              <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold">
                Dells
              </h3>
              <div className="flex items-center justify-between mb-2">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold">
                  Type:
                </p>
                <p className="text-secondary text-[12px] md:text-[16px] badge badge-outline">
                  Returnable
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold">
                  Available Quantity:
                </p>
                <p className="text-secondary text-[12px] md:text-[16px] badge badge-outline">
                  10
                </p>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary rounded-[10px] mt-4"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="p-5 pt-2">
              <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold">
                Dells
              </h3>
              <div className="flex items-center justify-between mb-2">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold">
                  Type:
                </p>
                <p className="text-secondary text-[12px] md:text-[16px] badge badge-outline">
                  Returnable
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-primary text-[12px] md:text-[16px] font-semibold">
                  Available Quantity:
                </p>
                <p className="text-secondary text-[12px] md:text-[16px] badge badge-outline">
                  10
                </p>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary rounded-[10px] mt-4"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestAsset;
