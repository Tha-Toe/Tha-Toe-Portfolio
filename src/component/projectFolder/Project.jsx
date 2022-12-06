import React, { useEffect, useRef, useState } from "react";
import "./project.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const Project = () => {
  const mode = useSelector((state) => state.mode.mode);
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);
  const [hoverFour, setHoverFour] = useState(false);
  const [hoverFive, setHoverFive] = useState(false);
  const [hoverSix, setHoverSix] = useState(false);

  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const fiveRef = useRef();
  const sixRef = useRef();

  const [projectOneWidth, setProjectOneWidth] = useState(0);
  const [projectTwoWidth, setProjectTwoWidth] = useState(0);
  const [projectThreeWidth, setProjectThreeWidth] = useState(0);
  const [projectFourWidth, setProjectFourWidth] = useState(0);
  const [projectFiveWidth, setProjectFiveWidth] = useState(0);
  const [projectSixWidth, setProjectSixWidth] = useState(0);

  const [projectOneSize, setProjectOneSize] = useState(0);
  const [projectTwoSize, setProjectTwoSize] = useState(0);
  const [projectThreeSize, setProjectThreeSize] = useState(0);
  const [projectFourSize, setProjectFourSize] = useState(0);
  const [projectFiveSize, setProjectFiveSize] = useState(0);
  const [projectSixSize, setProjectSixSize] = useState(0);

  const [pOneVisible, setPOneVisible] = useState(false);
  const [pTwoVisible, setPTwoVisible] = useState(false);
  const [pThreeVisible, setPThreeVisible] = useState(false);
  const [pFourVisible, setPFourVisible] = useState(false);
  const [pFiveVisible, setPFiveVisible] = useState(false);
  const [pSixVisible, setPSixVisible] = useState(false);

  const { ref: pOneRef, inView: pOneView } = useInView();
  const { ref: pTwoRef, inView: pTwoView } = useInView();
  const { ref: pThreeRef, inView: pThreeView } = useInView();
  const { ref: pFourRef, inView: pFourView } = useInView();
  const { ref: pFiveRef, inView: pFiveView } = useInView();
  const { ref: pSixRef, inView: pSixView } = useInView();

  useEffect(() => {
    if (pOneView) {
      setPOneVisible(true);
      setProjectOneSize(oneRef.current.offsetWidth);
      if (hoverOne) {
        setProjectOneWidth(0);
      } else {
        setProjectOneWidth(oneRef.current.offsetWidth);
      }
    }
  }, [pOneView, hoverOne]);

  useEffect(() => {
    if (pTwoView) {
      setPTwoVisible(true);
      setProjectTwoSize(twoRef.current.offsetWidth);
      if (hoverTwo) {
        setProjectTwoWidth(0);
      } else {
        setProjectTwoWidth(twoRef.current.offsetWidth);
      }
    }
  }, [pTwoView, hoverTwo]);

  useEffect(() => {
    if (pThreeView) {
      setPThreeVisible(true);
      setProjectThreeSize(threeRef.current.offsetWidth);
      if (hoverThree) {
        setProjectThreeWidth(0);
      } else {
        setProjectThreeWidth(threeRef.current.offsetWidth);
      }
    }
  }, [pThreeView, hoverThree]);

  useEffect(() => {
    if (pFourView) {
      setPFourVisible(true);
      setProjectFourSize(fourRef.current.offsetWidth);
      if (hoverFour) {
        setProjectFourWidth(0);
      } else {
        setProjectFourWidth(fourRef.current.offsetWidth);
      }
    }
  }, [pFourView, hoverFour]);

  useEffect(() => {
    if (pFiveView) {
      setPFiveVisible(true);
      setProjectFiveSize(fiveRef.current.offsetWidth);
      if (hoverFive) {
        setProjectFiveWidth(0);
      } else {
        setProjectFiveWidth(fiveRef.current.offsetWidth);
      }
    }
  }, [pFiveView, hoverFive]);

  useEffect(() => {
    if (pSixView) {
      setPSixVisible(true);
      setProjectSixSize(sixRef.current.offsetWidth);
      if (hoverSix) {
        setProjectSixWidth(0);
      } else {
        setProjectSixWidth(sixRef.current.offsetWidth);
      }
    }
  }, [pSixView, hoverSix]);

  return (
    <div className="projectContainer" id="project">
      <div className="projectHeader">My Project</div>
      <div className="projectList">
        <div
          className={`${"project"} ${pOneVisible ? "pOneAnimation" : ""}`}
          ref={pOneRef}
          onMouseEnter={() => {
            setHoverOne(true);
          }}
          onMouseLeave={() => {
            setHoverOne(false);
          }}
        >
          <div
            className="projectHover"
            style={{
              width: `${projectOneSize}px`,
              height: `${projectOneSize}px`,
              position: "absolute",
              zIndex: 1,
              transform: `translateX(-${projectOneWidth}px)`,
              transition: `all .4s ease`,
            }}
          >
            <div className="projectName">Bike Project</div>
            <div className="projectDetail">
              This is bike project for big bike crazy. You can watch some
              pouplar bike detail. It includes Yamaha, Honda, Kawasaki, Ducati
              bikes.
            </div>
            <a href="https://moto.vercel.app">
              <button className="projectButton">View Project</button>
            </a>
          </div>
          <div
            className={`${"hoverLeft"} ${hoverOne ? "hoverLeftStart" : ""}`}
          ></div>
          <img src="/bikeP.PNG" className="projectImg imgOne" ref={oneRef} />
          <div
            className={`${"hoverRight"} ${hoverOne ? "hoverRightStart" : ""}`}
          ></div>
        </div>

        <div
          className={`${"project"} ${pTwoVisible ? "pTwoAnimation" : ""}`}
          ref={pTwoRef}
          onMouseEnter={() => {
            setHoverTwo(true);
          }}
          onMouseLeave={() => {
            setHoverTwo(false);
          }}
        >
          <div
            className="projectHover"
            style={{
              width: `${projectTwoSize}px`,
              height: `${projectTwoSize}px`,
              position: "absolute",
              zIndex: 1,
              transform: `translateX(-${projectTwoWidth}px)`,
              transition: `all .4s ease`,
            }}
          >
            <div className="projectName">Memory Game Project</div>
            <div className="projectDetail">
              This is memory game project. I create it to get some knowledge and
              logic. It is simple and short time. I hope you enjoy it.
            </div>
            <a href="https://minigame-v3.vercel.app">
              <button className="projectButton">View Project</button>
            </a>
          </div>
          <div
            className={`${"hoverLeft"} ${hoverTwo ? "hoverLeftStart" : ""}`}
          ></div>
          <img src="/gameP.PNG" className="projectImg imgTwo" ref={twoRef} />
          <div
            className={`${"hoverRight"} ${hoverTwo ? "hoverRightStart" : ""}`}
          ></div>
        </div>

        <div
          className={`${"project"} ${pThreeVisible ? "pThreeAnimation" : ""}`}
          ref={pThreeRef}
          onMouseEnter={() => {
            setHoverThree(true);
          }}
          onMouseLeave={() => {
            setHoverThree(false);
          }}
        >
          <div
            className="projectHover"
            style={{
              width: `${projectThreeSize}px`,
              height: `${projectThreeSize}px`,
              position: "absolute",
              zIndex: 1,
              transform: `translateX(-${projectThreeWidth}px)`,
              transition: `all .4s ease`,
            }}
          >
            <div className="projectName">Music Project</div>
            <div className="projectDetail">
              This is music project. You can find artist name and song title.
              And you can also find Album name. But you can't play song. Just
              created for experience.
            </div>
            <a href="https://musicplay.vercel.app">
              <button className="projectButton">View Project</button>
            </a>
          </div>
          <div
            className={`${"hoverLeft"} ${hoverThree ? "hoverLeftStart" : ""}`}
          ></div>
          <img
            src="/musicP.PNG"
            className="projectImg imgThree"
            ref={threeRef}
          />
          <div
            className={`${"hoverRight"} ${hoverThree ? "hoverRightStart" : ""}`}
          ></div>
        </div>

        <div
          className={`${"project"} ${pFourVisible ? "pFourAnimation" : ""}`}
          ref={pFourRef}
          onMouseEnter={() => {
            setHoverFour(true);
          }}
          onMouseLeave={() => {
            setHoverFour(false);
          }}
        >
          <div
            className="projectHover"
            style={{
              width: `${projectFourSize}px`,
              height: `${projectFourSize}px`,
              position: "absolute",
              zIndex: 1,
              transform: `translateX(-${projectFourWidth}px)`,
              transition: `all .4s ease`,
            }}
          >
            <div className="projectName">Weather Project</div>
            <div className="projectDetail">
              This is weather project. I used open weather api to create it. You
              can find any city name and you can save. Default city is Mandalay.
            </div>
            <a href="https://weatherliveapp.vercel.app">
              <button className="projectButton">View Project</button>
            </a>
          </div>
          <div
            className={`${"hoverLeft"} ${hoverFour ? "hoverLeftStart" : ""}`}
          ></div>
          <img
            src="weatherP.PNG"
            className="projectImg imgFour"
            ref={fourRef}
          />
          <div
            className={`${"hoverRight"} ${hoverFour ? "hoverRightStart" : ""}`}
          ></div>
        </div>
        <div
          className={`${"project"} ${pFiveVisible ? "pFourAnimation" : ""}`}
          ref={pFiveRef}
          onMouseEnter={() => {
            setHoverFive(true);
          }}
          onMouseLeave={() => {
            setHoverFive(false);
          }}
        >
          <div
            className="projectHover"
            style={{
              width: `${projectFiveSize}px`,
              height: `${projectFiveSize}px`,
              position: "absolute",
              zIndex: 1,
              transform: `translateX(-${projectFiveWidth}px)`,
              transition: `all .4s ease`,
            }}
          >
            <div className="projectName">
              Yell Min Oo(3D charater artist) portfolio
            </div>
            <div className="projectDetail">
              This is client Yell Min Oo portfolio project. He is famous 3D
              charater artist from Myanmar. I used Next js and firebase for his
              portfolio.
            </div>
            <a href="https://yellminoo.vercel.app">
              <button className="projectButton">View Project</button>
            </a>
          </div>
          <div
            className={`${"hoverLeft"} ${hoverFive ? "hoverLeftStart" : ""}`}
          ></div>
          <img
            src="yellminoo-client1.png"
            className="projectImg imgFour"
            ref={fiveRef}
          />
          <div
            className={`${"hoverRight"} ${hoverFive ? "hoverRightStart" : ""}`}
          ></div>
        </div>
        <div
          className={`${"project"} ${pSixVisible ? "pFourAnimation" : ""}`}
          ref={pSixRef}
          onMouseEnter={() => {
            setHoverSix(true);
          }}
          onMouseLeave={() => {
            setHoverSix(false);
          }}
        >
          <div
            className="projectHover"
            style={{
              width: `${projectSixSize}px`,
              height: `${projectSixSize}px`,
              position: "absolute",
              zIndex: 1,
              transform: `translateX(-${projectSixWidth}px)`,
              transition: `all .4s ease`,
            }}
          >
            <div className="projectName">Yankee Social</div>
            <div className="projectDetail">
              This is Yankee social media website. I used React js, Scss/Sass
              and MongoDb for this social media. It's the most complicated and
              longest project I've ever had.
            </div>
            <a href="https://yankee.vercel.app">
              <button className="projectButton">View Project</button>
            </a>
          </div>
          <div
            className={`${"hoverLeft"} ${hoverSix ? "hoverLeftStart" : ""}`}
          ></div>
          <img src="yankee1.png" className="projectImg imgFour" ref={sixRef} />
          <div
            className={`${"hoverRight"} ${hoverSix ? "hoverRightStart" : ""}`}
          ></div>
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
};

export default Project;
