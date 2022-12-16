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
  const [hoverCardId, setHoverCardId] = useState(null);

  const imageRef = useRef();

  const [cardWidth, setCardWidth] = useState(0);

  const [cardSize, setCardSize] = useState(0);

  const [cardVisible, setCardVisible] = useState(false);

  const { ref: cardRef, inView: siteVisible } = useInView();

  useEffect(() => {
    if (siteVisible) {
      setCardVisible(true);
      setCardSize(imageRef.current.offsetWidth);
      if (hoverCardId) {
        setCardWidth(0);
      } else {
        setCardWidth(imageRef.current.offsetWidth);
      }
    }
  }, [siteVisible, hoverCardId]);

  const mouseHoverAndLeave = ({ condition, id }) => {
    console.log(condition, id);
    if (condition) {
      setHoverCardId(id);
    } else {
      setHoverCardId(null);
    }
  };
  // {
  //   id: 1,
  //   projectName: "Bike Project",
  //   projectDetail:
  //     "              This is bike project for big bike crazy. You can watch some pouplar bike detail. It includes Yamaha, Honda, Kawasaki, Ducati bikes.",
  //   projectImage: "/bikeP.PNG",
  //   projectLink: "https://moto.vercel.app",
  // },
  // {
  //   id: 3,
  //   projectName: "Music Project",
  //   projectDetail:
  //     "This is music project. You can find artist name and song title. And you can also find Album name. But you can't play song. Just created for experience.",
  //   projectImage: "/musicP.PNG",
  //   projectLink: "https://musicplay.vercel.app",
  // },
  const [projectList, setProjectList] = useState([
    {
      id: 1,
      projectName: "Sports Battle",
      projectDetail:
        "Sports Battle is the company project. It is a sports website. Type user name as hello and password as 123 to log in. I use Material Ui + React to build that website. This is the most complicated website I have ever worked",
      projectImage: "/sportsBattleP.png",
      projectLink: "https://sports-battle-final.netlify.app",
    },
    {
      id: 2,
      projectName: "Memory Game Project",
      projectDetail:
        "              This is memory game project. I create it to get some knowledge and logic. It is simple and short time. I hope you enjoy it.",
      projectImage: "/gameP.PNG",
      projectLink: "https://minigame-v3.vercel.app",
    },
    {
      id: 3,
      projectName: "Koin Wise",
      projectDetail:
        "Koin Wise is company project. I used react js to build it.",
      projectImage: "/koinwiseP.png",
      projectLink: "https://koinwise.netlify.app",
    },
    {
      id: 4,
      projectName: "Yell Min Oo's portfolio",
      projectName2: "(3D charater artist)",
      projectDetail:
        "This is client Yell Min Oo portfolio project. He is famous 3D charater artist from Myanmar. I used Next js and firebase for his portfolio.",
      projectImage: "/yellminoo-client1.png",
      projectLink: "https://yellminoo.vercel.app",
    },
    {
      id: 5,
      projectName: "Yankee Social",
      projectDetail:
        "This is Yankee social media website. I used React js, Scss/Sass and MongoDb for this social media.",
      projectImage: "/yankee1.png",
      projectLink: "https://yankee.vercel.app",
    },
    {
      id: 6,
      projectName: "Weather Project",
      projectDetail:
        "This is weather project. I used open weather api to create it. You can find any city name and you can save. Default city is Mandalay",
      projectImage: "/weatherP.PNG",
      projectLink: "https://weatherliveapp.vercel.app",
    },
  ]);

  return (
    <div className="projectContainer" id="project">
      <div className="projectHeader">My Project</div>
      <div className="projectList" ref={cardRef}>
        {projectList.map((each, index) => (
          <div
            key={index}
            className={`${"project"} ${cardVisible ? "pOneAnimation" : ""}`}
            onMouseEnter={() => {
              mouseHoverAndLeave({ condition: true, id: each.id });
            }}
            onMouseLeave={() => {
              mouseHoverAndLeave({ condition: false, id: each.id });
            }}
          >
            <div
              className="projectHover"
              style={{
                width: `${cardSize}px`,
                height: `${cardSize}px`,
                position: "absolute",
                zIndex: 1,
                transform: `translateX(-${
                  hoverCardId === each.id ? cardWidth : cardSize
                }px)`,
                transition: `all .4s ease`,
              }}
            >
              <div className="projectName">{each.projectName}</div>
              <div className="projectName">{each.projectName2}</div>
              <div className="projectDetail">{each.projectDetail}</div>
              <a href={each.projectLink} target="_blank">
                <button className="projectButton">View Project</button>
              </a>
            </div>
            <div
              className={`${"hoverLeft"} ${
                hoverCardId === each.id ? "hoverLeftStart" : ""
              }`}
            ></div>
            <img
              src={each.projectImage}
              className="projectImg imgOne"
              ref={imageRef}
            />
            <div
              className={`${"hoverRight"} ${
                hoverCardId === each.id ? "hoverRightStart" : ""
              }`}
            ></div>
          </div>
        ))}
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
