import React, { useEffect, useRef, useState } from "react";
import "./project.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
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

const Project = () => {
  const mode = useSelector((state) => state.mode.mode);
  const [hoverCardId, setHoverCardId] = useState(null);

  const mouseHoverAndLeave = ({ condition, id }) => {
    console.log(condition, id);
    if (condition) {
      setHoverCardId(id);
    } else {
      setHoverCardId(null);
    }
  };

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
      id: 3,
      projectName: "Electric Soul",
      projectDetail:
        "This is ticket sale website from Hong Kong. I created it in Flo3 Company. I used Saleor, NEXT.JS fullstack, Tailwind CSS, Typescript, Redis, GraphQL, Saleor Auth, Stripe payment(credit cards), Miscrosoft Azure blob storage for this website stack.  ",
      projectImage: "/electricSoul.png",
      projectLink: "https://www.electricsoul.com",
    },
    {
      id: 4,
      projectName: "Sports Battle",
      projectDetail:
        "Sports Battle is the company project. It is a sports website. Type user name as hello and password as 123 to log in. I use Material Ui + React to build that website. This is the most complicated website I have ever worked",
      projectImage: "/SportBattle.png",
      projectLink: "https://sports-battle-final.netlify.app",
    },
    {
      id: 5,
      projectName: "Music World",
      projectDetail:
        "This is my own music player web application. You can play,save and upload song free. I hope you enjoy it",
      projectImage: "/MusicWorld.png",
      projectLink: "https://music-world-web.vercel.app",
    },

    {
      id: 6,
      projectName: "Karzo",
      projectDetail:
        "Karzo is committed to aggregating and managing fleet suppliers on their digital platform across the region. I created it in Flo3 Company. I used Next JS, Builder.io, Odoo ( Python ), Tailwind CSS, Typescript, Framer Motion.",
      projectImage: "/karzo.png",
      projectLink: "https://www.karzo.com",
    },
  ]);

  return (
    <div className="projectContainer" id="project">
      <div className="projectHeader">My Fav Projects (6)</div>
      <a href="/projects">
        <button className={`${"sendButton"} ${"marginTop"}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="buttonIcon" />{" "}
          See All projects{" "}
        </button>
      </a>
      <div className="projectListNew">
        {projectNewList.map((each, index) => (
          <ProjectComponent project={each} index={index} key={index} />
        ))}
      </div>
      <a href="/projects">
        <button className="sendButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="buttonIcon" />{" "}
          See All projects{" "}
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

export default Project;
