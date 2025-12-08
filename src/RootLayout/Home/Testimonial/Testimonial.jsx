import React from "react";
import testimonialImg1 from "../../../assets/testimonial1.jpg";
import testimonialImg2 from "../../../assets/testimonial2.jpg";
import testimonialImg3 from "../../../assets/testimonial3.jpg";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className="my-20">
      <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-5 text-center">
        Testimonial
      </h2>
      <div className="sectionContainer  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 h-full">
          <div className=" p-5 rounded-[10px] bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
            <p className="text-[12px] md:text-[18px] text-secondary mb-2">
              "AssetFlow has streamlined our entire asset tracking process. Our
              HR team saves hours every week."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 mr-2 ">
                <img
                  className="w-full h-full rounded-full"
                  src={testimonialImg1}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] text-primary font-medium inline-block">
                  Sarah Mitchell,
                </h3>
                <h3 className="text-[14px] md:text-[16px] text-primary ml-1 inline-block">
                  HR Manager
                </h3>
                <h3 className="text-[16px] md:text-[18px] text-primary font-medium">
                  TechNova Ltd
                </h3>
              </div>
            </div>
          </div>
          <div className=" bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] p-5 rounded-[10px]">
            <p className="text-[12px] md:text-[18px] text-secondary mb-2">
              "Managing employee asset requests is so much easier now. The
              approval system is fast and transparent."
            </p>
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] mr-2 ">
                <img
                  className="w-full h-full rounded-full"
                  src={testimonialImg2}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] text-primary font-medium inline-block">
                  David Chen
                </h3>
                <h3 className="text-[14px] md:text-[16px] text-primary ml-1 inline-block">
                  HR Manager
                </h3>
                <h3 className="text-[16px] md:text-[18px] text-primary font-medium">
                  BlueWave Corp
                </h3>
              </div>
            </div>
          </div>
          <div className=" bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] p-5 rounded-[10px]">
            <p className="text-[12px] md:text-[18px] text-secondary mb-2">
              "The dashboard gives us a real-time view of every asset. No more
              confusion about who has what."
            </p>
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] mr-2 ">
                <img
                  className="w-full h-full rounded-full"
                  src={testimonialImg3}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] text-primary font-medium inline-block">
                  Emily Rodriguez
                </h3>
                <h3 className="text-[14px] md:text-[16px] text-primary ml-1 inline-block">
                  HR Manager
                </h3>
                <h3 className="text-[16px] md:text-[18px] text-primary font-medium">
                  FusionWorks
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
