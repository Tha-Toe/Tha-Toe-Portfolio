import React, { useState } from "react";
import "./thankyou.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faRotateBack } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
const thankVariant = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 },
  },
};

function Thankyou() {
  const [showModal, setShowModal] = useState(true);
  const mode = useSelector((state) => state.mode.mode);

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className={`${"thankContainer"} $${
            mode === "light" && "light_mode_bg_white"
          }`}
          variants={thankVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <FontAwesomeIcon icon={faCircleCheck} className="successIcon" />
          <h4 className="successText">successful send email</h4>
          <h1 className="thankTest">Thank you for contact me</h1>
          <h3 className="replayTest">I will reply you a later soon</h3>
          <Link to="/">
            <button className="backButton" onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faRotateBack} className="backIcon" />
              Go Back
            </button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Thankyou;
