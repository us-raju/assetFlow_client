import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxios from "../../../../Hooks/useAxios";
import Loading from "../../../../components/Loading/Loading";
import Swal from "sweetalert2";

const RequestAsset = () => {
  const { loading, user } = useAuth();
  const instance = useAxios();
  const [asstes, setAssets] = useState([]);
  const [modal, setModal] = useState(false);
  const textareaRef = useRef();
  const [selectedAsset, setSelectedAsset] = useState(null);

  useEffect(() => {
    instance.get("/asset").then((res) => {
      setAssets(res.data);
    });
  }, [instance]);
  const handleAssetRequest = (asset) => {
    setSelectedAsset(asset);
    setModal(true);
  };
  const handleFinalRequest = () => {
    const note = textareaRef.current.value;
    if (note === "") return;
    const requestData = {
      assetId: selectedAsset._id,
      assetName: selectedAsset.productName,
      assetType: selectedAsset.productType,
      requesterName: user.displayName,
      requesterEmail: user.email,
      hrEmail: selectedAsset.hrEmail,
      companyName: selectedAsset.companyName,
      requestDate: new Date().toISOString().split("T")[0],
      approvalDate: null,
      requestStatus: "Pending",
      processedBy: selectedAsset.hrEmail,
      note: note,
    };

    instance
      .post("/request", requestData)
      .then((res) => {
        Swal.fire({
          title: "Asset Request Successfull",
          icon: "success",
          position: "top",
          showConfirmButton: false,
          timer: 1500,
        });
        setModal(false);
      })
      .catch((err) => {
        const errMessage = err.message;
        Swal.fire({
          title: errMessage,
          icon: "error",
        });
      });
    setSelectedAsset(null);
  };
  if (loading) return <Loading></Loading>;

  return (
    <>
      <section>
        <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
          Request an Asset
        </h2>
        <div className="cards_Container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {asstes.map((asset) => (
            <div
              key={asset._id}
              className="card bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] relative"
            >
              <figure>
                <img className="h-[260px]" src={asset.productImage} />
              </figure>
              <div className="p-5 pt-2">
                <h3 className="text-[16px] lg:text-[18px] text-primary font-semibold">
                  {asset.productName}
                </h3>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-primary text-[12px] md:text-[16px] font-semibold">
                    Type:
                  </p>
                  <p className="text-secondary text-[12px] md:text-[16px] badge badge-outline">
                    {asset.productType}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-primary text-[12px] md:text-[16px] font-semibold">
                    Available Quantity:
                  </p>
                  <p className="text-secondary text-[12px] md:text-[16px] badge badge-outline">
                    {asset.productQuantity}
                  </p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleAssetRequest(asset)}
                    type="button"
                    className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary rounded-[10px] mt-4"
                  >
                    Request
                  </button>
                </div>
              </div>
              {/* modal  */}
              {selectedAsset?._id === asset._id && (
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] min-w-[350px] bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] p-5 rounded-[10px] max-w-lg mx-auto ">
                  <h3 className="mb-3 text-primary font-semibold text-center">
                    {selectedAsset.productName}
                  </h3>
                  <textarea
                    ref={textareaRef}
                    required
                    placeholder="Write a note for requesting product"
                    className="textarea textarea-primary focus:outline-0 w-full text-secondary"
                  ></textarea>
                  <div className="text-end">
                    <button
                      onClick={handleFinalRequest}
                      type="button"
                      className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4 mr-5"
                    >
                      Submit
                    </button>

                    <button
                      onClick={() => setSelectedAsset(null)}
                      type="button"
                      className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RequestAsset;
