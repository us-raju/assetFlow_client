import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  return (
      <div className="min-h-screen flex items-center justify-center">
      <div className="w-[300px]">
        <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>

  );
};

export default Loading;
