import React from "react";
import { motion } from "framer-motion";
import { TabButtonDataType } from "@/types";




const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }:TabButtonDataType) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-2 lg:font-extrabold lg:text-2xl font-medium text-sm   hover:text-white ${buttonClasses}  `}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 bg-primary-500 mt-2 mr-3 ` }        
      ></motion.div>
    </button>
  );
};

export default TabButton;