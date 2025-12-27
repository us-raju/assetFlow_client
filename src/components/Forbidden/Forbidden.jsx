import React from "react";
import Lottie from "lottie-react";
import forbiddenAnimation from "../../Animation/Forbidden403.json";
import { Link } from "react-router";
const Forbidden = () => {
  return (
   <div className="flex flex-col items-center justify-center h-screen">
      <div style={{ width: 200, height: 200 }}> 
        <Lottie
          animationData={forbiddenAnimation}
          loop={false}
          autoplay={true}
        />
      </div>
      
      <h1 className="text-3xl font-bold text-warning">
        You Are Forbidden to Access This Page
      </h1>
      
      <div className="my-3 space-x-3">
        <Link to="/" className="btn btn-primary text-base-200">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
