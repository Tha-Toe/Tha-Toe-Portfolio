import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./experience.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const content = {
  p1: "I started study programming(web development) since 2021.",
  p2: "I'm Next JS developer. I have hand-on experience in working with semantic Html, CSS, SCSS/SASS, Tailwind CSS, Bootstrap, Material UI JavaScript, React JS, NEXT.JS. I learned Git Hub, Npm, Yarn, Restful Api, GraphQL server etc, which are important for developers.",
  p3: "Although I'm a frontend developer, I used to write backend development language like Node JS, Express JS. And I have used database like MongoDB, Firebase, MySQL.",
  p4: "As work experience, I have over a year realworld experience, I had compeleted a three-month internship as a frontend developer in World of Professional Singapore company. And I had worked 8 months as a full time developer there. And currently I'm working as a fulltime NEXT JS developer at Flo3 UK company."
}

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

function Experience() {
  const mode = useSelector((state) => state.mode.mode);
  const { ref: leftRef, inView: leftVisible } = useInView();
  const { ref: rightRef, inView: rightVisible } = useInView();
  const [leftTrueVisible, setLeftTrueVisible] = useState(false);

  useEffect(() => {
    if (leftVisible) {
      setLeftTrueVisible(true);
    }
  }, [leftVisible]);

  return (
    <div className="experienceContainer" id="skill">
      <div
        ref={leftRef}
        className={`${"eLeftContainer"} ${
          mode === "light" && "light_mode_bg_white_card"
        } ${leftTrueVisible ? "eLeftAnimation" : ""}`}
      >
        <div className="eleftHeader">Skills & Experience</div>
        <div
          className={`${"eleftNote firstE"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          {content.p1}
        </div>
        <div
          className={`${"eleftNote secondE"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          {content.p2}
        </div>
        <div
          className={`${"eleftNote thirdE"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          {content.p3}
        </div>
        <div
          className={`${"eleftNote thirdE"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          {content.p4}
        </div>
      </div>
      <div className="eRightContainer" ref={rightRef}>
        <div className="skillHeader">Frontend Development</div>
        <div className="skillContainer">
          <div className="skillName html">HTML</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"htmlBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoPink"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              H
            </motion.div>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillName css">CSS/SASS</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"cssBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoBlue"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              C
            </motion.div>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillName js">Javascript/TypeScript</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"jsBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoPink"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              J
            </motion.div>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillName bootstrap">Bootstrap</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"bootstrapBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoBlue"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              B
            </motion.div>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillName tailwind">Tailwind Css</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"tailwindBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoPink"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              T
            </motion.div>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillName react">React JS</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"reactBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoBlue"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              R
            </motion.div>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillName next">NEXT.JS</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"nextBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoPink"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              Nx
            </motion.div>
          </div>
        </div>
        <div className="skillHeader">Backend Development</div>
        <div className="skillContainer">
          <div className="skillName node">Node JS</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"nodeBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoPink"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              N
            </motion.div>{" "}
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillName express">Express JS</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"expressBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoBlue"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              E
            </motion.div>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillName mongo">Mongo DB</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"mongoBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoPink"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              M
            </motion.div>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillName firebase">Firebase</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"firebaseBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoBlue"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              F
            </motion.div>
          </div>
        </div>
        <div className="skillContainer">
          <div className="skillName mongo">MySQL</div>
          <div className="progressContainer">
            <div
              className={`${"progressBar"} ${"mongoBar"} ${
                rightVisible ? "skillAnimation" : ""
              }`}
            ></div>
            <motion.div
              className="progressLogoPink"
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
            >
              MS
            </motion.div>
          </div>
        </div>
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

export default Experience;
