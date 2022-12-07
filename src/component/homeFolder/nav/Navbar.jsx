import React, { useEffect, useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../../store/slice";

const containerVariant = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  containerVisible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      duration: 0.5,
      delay: 2,
    },
  },
};

const logoVariant = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      yoyo: Infinity,
    },
  },
};

const navVariant = {
  hover: {
    scale: [1, 1.2, 1.1],
    transition: {
      duration: 0.4,
      type: "spring",
    },
  },
};

const humbagarVariant = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 300,
      delay: 2,
    },
  },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const refreshPage = () => {
    window.location.reload(true);
  };

  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();

  return (
    <>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="containerVisible"
        className={`${"nContainer white"} ${
          mode === "light" && "light_mode_bg_white"
        }`}
      >
        <div className="tLogo">
          <motion.img
            src="/innerLogo.png"
            className="logoImg"
            variants={logoVariant}
            animate="animate"
            onClick={refreshPage}
            whileHover={{
              scale: 1.1,
            }}
          />
        </div>
        <div className="navList">
          <div
            className={`${"mode_button_container"} ${
              mode === "dark" && "dark_container"
            }`}
            onClick={() => {
              if (mode === "dark") {
                dispatch(changeMode());
              } else {
                dispatch(changeMode());
              }
            }}
          >
            <div
              className={`${"mode_button"} ${mode === "dark" && "dark_button"}`}
            >
              <div
                className={`${"mode_icon_container"} ${
                  mode === "dark" && "dark_icon_container"
                }`}
              >
                {mode === "dark" ? (
                  <FontAwesomeIcon icon={faMoon} className="mode_icon" />
                ) : (
                  <FontAwesomeIcon icon={faLightbulb} className="mode_icon" />
                )}
              </div>
            </div>
          </div>
          <motion.a
            className={`${"navChild"} ${
              mode === "light" && "light_mode_color_black"
            }`}
            variants={navVariant}
            whileHover="hover"
            href="#home"
          >
            Home
          </motion.a>
          <motion.a
            className={`${"navChild"} ${
              mode === "light" && "light_mode_color_black"
            }`}
            variants={navVariant}
            whileHover="hover"
            href="#about"
          >
            About
          </motion.a>
          <motion.a
            className={`${"navChild"} ${
              mode === "light" && "light_mode_color_black"
            }`}
            variants={navVariant}
            whileHover="hover"
            href="#project"
          >
            Project
          </motion.a>
          <motion.a
            className={`${"navChild"} ${
              mode === "light" && "light_mode_color_black"
            }`}
            variants={navVariant}
            whileHover="hover"
            href="#skill"
          >
            Skill
          </motion.a>
          <motion.a
            className={`${"navChild"} ${
              mode === "light" && "light_mode_color_black"
            }`}
            variants={navVariant}
            whileHover="hover"
            href="#contact"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        className="tMobileLogo"
        variants={containerVariant}
        initial="hidden"
        animate="containerVisible"
      >
        <motion.img
          src="/innerLogo.png"
          className="logoImg"
          variants={logoVariant}
          animate="animate"
          onClick={refreshPage}
          whileHover={{
            scale: 1.1,
          }}
        />
      </motion.div>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="containerVisible"
        className={`${"mode_button_mobile_container"} ${
          mode === "dark" && "dark_container"
        }`}
      >
        <div
          className={`${"mode_button"} ${mode === "dark" && "dark_button"}`}
          onClick={() => {
            if (mode === "dark") {
              dispatch(changeMode());
            } else {
              dispatch(changeMode());
            }
          }}
        >
          <div
            className={`${"mode_icon_container"} ${
              mode === "dark" && "dark_icon_container"
            }`}
          >
            {mode === "dark" ? (
              <FontAwesomeIcon icon={faMoon} className="mode_icon" />
            ) : (
              <FontAwesomeIcon icon={faLightbulb} className="mode_icon" />
            )}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="humbagarContainer"
        variants={humbagarVariant}
        animate="animate"
        initial="initial"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <motion.div
          className={`${"stick"} ${menuOpen ? "stickOne" : ""}`}
        ></motion.div>
        <motion.div
          className={`${"stick"} ${menuOpen ? "stickTwo" : ""}`}
        ></motion.div>
        <motion.div
          className={`${"stick"} ${menuOpen ? "stickThree" : ""}`}
        ></motion.div>
      </motion.div>
      <div
        className={`${"menuContainer"} ${
          mode === "light" && "light_mode_bg_white"
        } ${menuOpen ? "menuActive" : "menuHide"}`}
      >
        <div className={`${"menuStatic"} ${menuOpen ? "menuAnimate" : ""}`}>
          <img src="/innerLogo.png" className="menulogoImg" />
          <div className="webDeveloper">Web Developer(front end)</div>
          <div className="humbagarListContainer">
            <a
              className={`${"humbagarList"} ${
                mode === "light" && "light_mode_color_black"
              }`}
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              className={`${"humbagarList"} ${
                mode === "light" && "light_mode_color_black"
              }`}
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              className={`${"humbagarList"} ${
                mode === "light" && "light_mode_color_black"
              }`}
              href="#project"
              onClick={() => setMenuOpen(false)}
            >
              Project
            </a>
            <a
              className={`${"humbagarList"} ${
                mode === "light" && "light_mode_color_black"
              }`}
              href="#skill"
              onClick={() => setMenuOpen(false)}
            >
              Skill
            </a>
            <a
              className={`${"humbagarList"} ${
                mode === "light" && "light_mode_color_black"
              }`}
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
