import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./experience.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import content from "../../lib/content.json"
import SkillCard from "./SkillCard";


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
  const currentYear = new Date().getFullYear();
  const myBirth = 2022;
  const exp = currentYear - myBirth;
  const p4  = content.skill.p4.replace('{experience}', exp);
  return (
    <div className="experienceContainer" id="skill">

      <div
        ref={leftRef}
        className={`${"eLeftContainer"} ${leftTrueVisible ? "eLeftAnimation" : ""}`}
      >
        <div className="eleftHeader">My Skills & Experience</div>
        {
          content.skills.map((skill,index) => 
            <SkillCard key={index} skill={skill} mode={mode} index={index}/>
          )
        }
        {/* <div
          className={`${"eleftNote firstE"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          {content.skill.p1}
        </div>
        <div
          className={`${"eleftNote secondE"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          {content.skill.p2}
        </div>
        <div
          className={`${"eleftNote thirdE"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          {content.skill.p3}
        </div>
        <div
          className={`${"eleftNote thirdE"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          {p4}
        </div> */}
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
