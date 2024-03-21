import React, { useEffect, useState } from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import content from "../../../lib/content.json";


const scrollVariant = {
  initial: {
    rotate: 90,
    y: -10,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    rotate: 90,
    y: 10,
  },
};

function About() {
  const mode = useSelector((state) => state.mode.mode);
  const [leftTrueVisible, setLeftTrueVisible] = useState(false);
  const { ref: leftRef, inView: leftVisible } = useInView();

  const [rightTrueVisible, setRightTrueVisible] = useState(false);
  const { ref: rightRef, inView: rightVisible } = useInView();

  useEffect(() => {
    if (leftVisible) {
      setLeftTrueVisible(true);
    }
    if (rightVisible) {
      setRightTrueVisible(true);
    }
  }, [leftVisible, rightVisible]);

  const currentYear = new Date().getFullYear();
  const myBirth = 2002;
  const myAge = currentYear - myBirth;
  const firstPWithAge  = content.aboutMe.first_p.replace('{age}', myAge);
  const started = 2021;
  const exp = currentYear - started;
  const firstP = firstPWithAge.replace('{experience}', exp);

  return (
    <div className="aboutContainer" id="about">
      <div
        ref={leftRef}
        className={`${"leftAbout"} ${leftTrueVisible ? "leftAnimate" : ""}`}
      >
        <img
          src="/myPhoto.png"
          className={`${"myPhoto"} ${
            mode === "light" && "light_mode_bg_white_card"
          }`}
        />
      </div>
      <div
        ref={rightRef}
        className={` ${"rightAbout"} ${
          mode === "light" && "light_mode_bg_white_card light_mode_color_black"
        } ${rightTrueVisible ? "rightAnimate" : ""}`}
      >
        <div className="aboutHead">Who I am?</div>
        <div className="aboutMe">About Me</div>
        <p className="about_text">
          {firstP}
        </p>
        <p className="about_text">
          {content.aboutMe.second_p}
        </p>
        <p className="about_text">
          {content.aboutMe.third_p}
        </p>
        <motion.button
          className="cvButton"
          whileHover={{
            scale: [1, 1.3, 1.1],
            transition: {
              duration: 0.2,
            },
          }}
        >
          <a
            className="cvLink"
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:f38064ff-5ad4-442f-9bb9-9c674b2aa0c4"
          >
            <FontAwesomeIcon icon={faDownload} /> Download CV
          </a>
        </motion.button>
      </div>
      <motion.div
        variants={scrollVariant}
        animate="animate"
        initial="initial"
        transition={{ duration: 0.5, delay: 7.4, yoyo: Infinity }}
        className={`${"scrollLeft"} ${
          mode === "light" && "light_mode_color_black"
        }`}
      >
        scroll
        <FontAwesomeIcon
          icon={faAnglesRight}
          className={`${"headIcon"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        />
      </motion.div>
      <motion.div
        variants={scrollVariant}
        animate="animate"
        initial="initial"
        transition={{ duration: 0.5, delay: 7.4, yoyo: Infinity }}
        className={`${"scrollRight"} ${
          mode === "light" && "light_mode_color_black"
        }`}
      >
        scroll
        <FontAwesomeIcon
          icon={faAnglesRight}
          className={`${"headIcon"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        />
      </motion.div>
    </div>
  );
}

export default About;
