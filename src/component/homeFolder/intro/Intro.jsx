import React from "react";
import "./intro.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const logoVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 3, ease: "easeInOut" },
  },
};
function Intro() {
  let mode = useSelector((state) => state.mode.mode);

  return (
    <motion.div
      className={`${"introContainer"} ${
        mode === "light" && "intro_light_white_bg"
      }`}
      exit={{ opacity: 0 }}
    >
      <svg
        className="introBorder feather feather-hexagon"
        xmlns="http://www.w3.org/2000/svg"
        width="250"
        height="350"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4fe0b5"
        strokeWidth=".5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
          variants={pathVariant}
          initial="hidden"
          animate="visible"
        ></motion.path>
      </svg>
      <motion.img
        src="/introLogo.png"
        className="introLogo"
        variants={logoVariants}
        initial="initial"
        animate="animate"
      />
    </motion.div>
  );
}
export default Intro;
