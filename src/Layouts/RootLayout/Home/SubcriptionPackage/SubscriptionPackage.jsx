import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight, FaRegCheckCircle } from "react-icons/fa";
import Loading from "../../../../components/Loading/Loading";
import useAxios from "../../../../Hooks/useAxios";

const SubscriptionPackage = () => {
  const [subPackage, setSubPackage] = useState();
  const instance = useAxios();

  useEffect(() => {
    instance.get("/subcriptionPackage").then((data) => {
      const packageData = data.data;
      setSubPackage(packageData);
    });
  }, [instance]);

  if (!subPackage) return <Loading></Loading>;
  return (
    <>
      <div className="mt-20">
        <h2 className="text-[18px] lg:text-3xl text-primary font-bold text-center mb-5">
          Subcription Package
        </h2>
        <div className="packageContainer max-w-[890px] mx-auto grid gird-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5 ">
          {subPackage.map((data) => (
            <div
              key={data._id}
              className="bg-base-200 border border-secoundry rounded-[10px]"
            >
              <div className="bg-[#E9F1FF] m-5 p-5 rounded-[10px]">
                <h3 className="text-[18px] lg:text-3xl text-primary font-bold">
                  {data.name}
                </h3>
                <ins className="no-underline text-primary text-[16px] lg:text-[20px] font-medium">
                  ${data.price}
                </ins>
                <p className="text-secondary text-[12px] lg:text-[16px]">
                  <FaRegArrowAltCircleRight size={16} className="inline-block mr-2 text-primary" />
                  employee limit: {data.employeeLimit}
                </p>

                <h3 className="text-primary text-[18px] lg:text-2xl font-bold my-2">
                  Feature:
                </h3>
                <ul className="text-secondary text-[12px] lg:text-[16px] space-y-1">
                  {data.features.map((data, indx) => (
                    <li key={indx}>
                      <span className="inline-block mr-2 text-primary">
                        <FaRegCheckCircle />
                      </span>
                      {data}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <button className="border border-secondary py-1 px-2 lg:py-1 lg:px-4 rounded-[10px] text-[12px] lg:text-[18px] font-medium hover:bg-primary hover:text-base-200 cursor-pointer mt-3 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubscriptionPackage;
