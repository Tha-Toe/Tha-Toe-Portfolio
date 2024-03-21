import React, { useEffect, useRef, useState } from "react";
import "./projectAll.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import ProjectComponent from "./ProjectComponent";

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

const ProjectAll = () => {
  const mode = "dark";
  const [hoverCardId, setHoverCardId] = useState(null);

  const imageRef = useRef();

  const [cardWidth, setCardWidth] = useState(0);

  const [cardSize, setCardSize] = useState(0);

  const [cardVisible, setCardVisible] = useState(false);

  const { ref: cardRef, inView: siteVisible } = useInView();

  // useEffect(() => {
  //   if (siteVisible) {
  //     setCardVisible(true);
  //     setCardSize(imageRef.current.offsetWidth);
  //     if (hoverCardId) {
  //       setCardWidth(0);
  //     } else {
  //       setCardWidth(imageRef.current.offsetWidth);
  //     }
  //   }
  // }, [siteVisible, hoverCardId]);

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
  const [projectList] = useState([
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
      projectName: "Music World",
      projectDetail:
        "This is my own music player web application. You can play,save and upload song free. I hope you enjoy it",
      projectImage: "/music_world.png",
      projectLink: "https://music-world-web.vercel.app",
    },
    {
      id: 3,
      projectName: "Koin Wise",
      projectDetail:
        "Koin Wise is company project. I used React JS to build it.",
      projectImage: "/koinwiseP.png",
      projectLink: "https://koinwise.netlify.app",
    },
    {
      id: 4,
      projectName: "Yell Min Oo's portfolio",
      projectName2: "(3D charater artist)",
      projectDetail:
        "This is client Yell Min Oo portfolio project. He is famous 3D charater artist from Myanmar. I used NEXT.JS and Firebase for his portfolio.",
      projectImage: "/yellminoo-client2.png",
      projectLink: "https://yellminoo.vercel.app",
    },
    {
      id: 5,
      projectName: "Yankee Social",
      projectDetail:
        "This is Yankee social media website. I used ReactJS and SCSS/SASS for frontend, Note JS and Express JS for backend, MongoDB for database.",
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

  const [projectNewList] = useState([
    {
      id: 1,
      projectName: "Mediclick (Philippines)",
      projectDetail:
        "This is Philippines Medicine E Commerce webiste. I created it in Flo3 Company. I used Saleor, NEXT.JS fullstack, Tailwind CSS, Typescript, Redis, GraphQL, OAuth, Dummy Payment, Microsoft Azure blob storage for this website stack.",
      projectImage: "/Mediclick.png",
      projectLink: "https://www.mediclick.ph",
    },
    {
      id: 2,
      projectName: "Liquid Collection (Hong Kong)",
      projectDetail:
        "This is wines website from Hong Kong. I created it in Flo3 Company. I used Saleor, NEXT.JS fullstack, Tailwind CSS, Typescript, Redis, GraphQL, Saleor Auth, Stripe payment(credit cards), Miscrosoft Azure blob storage for this website stack.  ",
      projectImage: "/LiquidCollection.png",
      projectLink: "https://www.liquidcollectionhk.com",
    },
    {
      id: 2,
      projectName: "Electric Soul",
      projectDetail:
        "This is ticket sale website from Hong Kong. I created it in Flo3 Company. I used Saleor, NEXT.JS fullstack, Tailwind CSS, Typescript, Redis, GraphQL, Saleor Auth, Stripe payment(credit cards), Miscrosoft Azure blob storage for this website stack.  ",
      projectImage: "/electricSoul.png",
      projectLink: "https://electric-soul-v2-ui.vercel.app/",
    },
    {
      id: 3,
      projectName: "Sports Battle",
      projectDetail:
        "Sports Battle is the company project. It is a sports website. Type user name as hello and password as 123 to log in. I use Material Ui + React to build that website. This is the most complicated website I have ever worked",
        projectImage: "/SportBattle.png",
        projectLink: "https://sports-battle-final.netlify.app",
    },
    {
      id: 4,
      projectName: "Music World",
      projectDetail:
        "This is my own music player web application. You can play,save and upload song free. I hope you enjoy it",
      projectImage: "/MusicWorld.png",
      projectLink: "https://music-world-web.vercel.app",
    },
    {
      id: 5,
      projectName: "Koin Wise",
      projectDetail:
        "Koin Wise is company project. I used React JS to build it.",
      projectImage: "/Koinwise.png",
      projectLink: "https://koinwise.netlify.app",
    },

    {
      id: 6,
      projectName: "Weather Project",
      projectDetail:
        "This is weather project. I used open weather api to create it. You can find any city name and you can save. Default city is Mandalay",
      projectImage: "/WeatherLive.png",
      projectLink: "https://weatherliveapp.vercel.app",
    },
  ]);

  return (
    <div className="projectContainer projectAllContainer" id="project">
      <div className="projectHeader">My All Projects ({projectNewList.length})</div>
      {/* <div className="projectList" ref={cardRef}>
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
              <div className="projectName projectName2">
                {each.projectName2}
              </div>
              <div className="projectDetail">{each.projectDetail}</div>
              <a href={each.projectLink} target="_blank">
                <button className="projectButton">Go to website</button>
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
      </div> */}
      <a href="/">
        <button className={`${"sendButton"} ${"marginTop"}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="buttonIcon" />{" "}
                  Go Back{" "}
        </button>
      </a>
      <div className="projectListNew">
        {
          projectNewList.map((each,index) => 
            <ProjectComponent project={each} index={index} key={index}/>
          )
        }
      </div>
      <a href="/">
        <button className="sendButton">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="buttonIcon" />{" "}
                  Go Back{" "}
        </button>     
</a>
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
};

export default ProjectAll;
