import Lottie from "lottie-react";
import { Link } from "react-router";
import errorAnimation from "../../../Animation/PageNotFound404.json";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="max-w-lg w-full">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>

      <div className="text-center mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-10">
          404 - Page Not Found
        </h1>

        <Link
          to="/"
          className="px-8 py-4 bg-transparent text-primary border border-primary font-bold rounded-[10px] hover:bg-primary  hover:text-base-200 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          GO BACK HOME
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
