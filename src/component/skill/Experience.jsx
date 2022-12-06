import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./experience.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

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
        <div className="eleftHeader">Skill & Experience</div>
        <div
          className={`${"eleftNote firstE"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          I started study programming(web development) since October 16, 2021.
        </div>
        <div
          className={`${"eleftNote secondE"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          I'm junior React developer(front-end). I have hand-on experience in
          working with semantic Html, Css, Sass/Scss, Tailwind Css, Bootstrap,
          Material Ui Javascript, React Js, Next Js for front-end development. I
          learned Git Hub, Npm, Yarn, Restful Api, etc. which are important for
          developers.
        </div>
        <div
          className={`${"eleftNote thirdE"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          Although I'm a front-end developer, I used to write back-end
          development language like Node Js, Express Js. And I have used
          database like mongoDB, Firebase.
        </div>
      </div>
      <div className="eRightContainer" ref={rightRef}>
        <div className="skillHeader">Front End Development</div>
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
          <div className="skillName js">Javascript</div>
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
          <div className="skillName react">React Js</div>
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
          <div className="skillName next">Next Js</div>
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
        <div className="skillHeader">Back End Development</div>
        <div className="skillContainer">
          <div className="skillName node">Node Js</div>
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
        <FontAwesomeIcon icon={faAnglesRight} className="headIcon" />
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
        <FontAwesomeIcon icon={faAnglesRight} className="headIcon" />
      </motion.div>
    </div>
  );
}

export default Experience;
