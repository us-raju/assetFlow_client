import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
      <motion.div
        className="h-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Loading;
