import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../../Hooks/useAuth";
import Loading from "../../../../../components/Loading/Loading";
import { BiCheckCircle } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const PaymentSuccess = () => {
  // const {  loading } = useAuth();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const instanceSecure = useAxiosSecure();
  const [paymentDetails, setPaymentDetails] = useState([]);

  useEffect(() => {
    if (sessionId) {
      instanceSecure
        .get(`/payment-seccess?session_id=${sessionId}`)
        .then((res) => {
          setPaymentDetails(res.data.data);
        });
    }
  }, [instanceSecure, sessionId]);
  // if (loading) return <Loading></Loading>;
  console.log(paymentDetails);
  return (
    <>
      <section>
        <div className="fieldset bg-[#f5f5f5] shadow-[0_20px_50px_rgba(8,112,184,0.3)] p-5 rounded-[10px] max-w-lg mx-auto ">
          <FaCheck className="mx-auto h-16 w-16 text-success" />
          <h2 className="text-[18px] lg:text-3xl text-primary font-bold mb-2 text-center">
            Payment Successfull !
          </h2>
          <p className="mt-2 text-secondary text-center">
            Thank you for your purchase.
          </p>

          <div className="mt-4 space-y-2">
            <p>
              <strong>Transaction ID:</strong> {paymentDetails.transactionId}
            </p>
            <p>
              <strong>package:</strong> {paymentDetails.packageName}
            </p>
            <p>
              <strong>Amount Paid:</strong> ${paymentDetails.amount}
            </p>
            <p>
              <strong>paymentDate:</strong>
              {paymentDetails?.paymentDate
                ? new Date(paymentDetails.paymentDate)
                    .toISOString()
                    .split("T")[0]
                : "Loading..."}
            </p>
          </div>
          <Link
            to="/hr_dashbord"
            className="btn text-primary border-secondary bg-transparent hover:text-base-200 hover:bg-primary  mt-4"
          >
            Go To Dashbord
          </Link>
        </div>
      </section>
    </>
  );
};

export default PaymentSuccess;
