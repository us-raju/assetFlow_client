import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <>
      <section>
        <div>
          <RxCrossCircled className="mx-auto h-16 w-16 text-warning" />
          <h2 className="text-[18px] lg:text-3xl text-warning font-bold mb-2 text-center">
            Payment Cancelled !
          </h2>
          <div className="text-center">
            <Link
              to="/hr_dashbord/upgradePackage"
              className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4"
            >
              Try Again
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentCancel;
