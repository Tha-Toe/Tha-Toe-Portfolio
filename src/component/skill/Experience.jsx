import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./experience.css";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";



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
    }
}

function Experience () {

    const {ref: leftRef, inView: leftVisible} = useInView();
    const {ref: rightRef, inView: rightVisible} = useInView();
    const [leftTrueVisible,setLeftTrueVisible] = useState(false);

    useEffect(() => {
        if(leftVisible) {
            setLeftTrueVisible(true)
        }
    },[leftVisible])


    return (
        <div className = "experienceContainer" id="skill">
            <div ref={leftRef} className={`${"eLeftContainer"} ${leftTrueVisible? "eLeftAnimation" : ""}`}>
                <div className="eleftHeader">Skill & Experience</div>
                <div className="eleftNote firstE">
                    I started study programming(web development) at october 16, 2021.
                    It took 2 months for me to learn HTML, CSS, JavaScript, Bootstrap (until I can create pure website)
                    and 3 months took to learn React Js and RestApi. It took a total of 5 months for front end development learning.
                </div>
                <div className="eleftNote secondE">And now I'm keep studying Node Js, Express Js, Mongo DB for back end development.</div>
                <div className="eleftNote thirdE">I've experience using Spotify Api (with backend log in feature) and Open Weather Api in my project.</div>
            </div>
            <div className="eRightContainer" ref={rightRef}>
                <div className="skillHeader">Front End Development</div>
                <div className="skillContainer">
                    <div className="skillName skillOne">HTML</div>
                    <div className="progressContainer">
                        <div className={`${"progressBar"} ${"skillOneBar"} ${rightVisible? "skillAnimation" : ""}`} ></div>
                        <motion.div className="progressLogoPink" 
                                drag = "x"
                                dragConstraints = {{right: 0, left: 0}}
                                >H</motion.div>
                    </div>
                </div>
                <div className="skillContainer">
                    <div className="skillName skillTwo">CSS</div>
                    <div className="progressContainer">
                        <div className={`${"progressBar"} ${"skillTwoBar"} ${rightVisible? "skillAnimation" : ""}`}></div>
                        <motion.div className="progressLogoBlue" 
                                drag = "x"
                                dragConstraints = {{right: 0, left: 0}}
                                >C</motion.div>
                    </div>
                </div>
                <div className="skillContainer">
                    <div className="skillName skillThree">Javascript</div>
                    <div className="progressContainer">
                        <div className={`${"progressBar"} ${"skillThreeBar"} ${rightVisible? "skillAnimation" : ""}`}></div>
                        <motion.div className="progressLogoPink" 
                                drag = "x"
                                dragConstraints = {{right: 0, left: 0}}
                                >J</motion.div>
                    </div>
                </div>
                <div className="skillContainer">
                    <div className="skillName skillFour">Bootstrap</div>
                    <div className="progressContainer">
                        <div className={`${"progressBar"} ${"skillFourBar"} ${rightVisible? "skillAnimation" : ""}`}></div>
                        <motion.div className="progressLogoBlue" 
                                drag = "x"
                                dragConstraints = {{right: 0, left: 0}}
                                >B</motion.div>
                    </div>
                </div>
                <div className="skillContainer">
                    <div className="skillName skillFive">React Js</div>
                    <div className="progressContainer">
                        <div className={`${"progressBar"} ${"skillFiveBar"} ${rightVisible? "skillAnimation" : ""}`}></div>
                        <motion.div className="progressLogoPink" 
                                drag = "x"
                                dragConstraints = {{right: 0, left: 0}}
                                >R</motion.div>
                    </div>
                </div>
                <div className="skillHeader">Back End Development</div>
                <div className="skillContainer">
                    <div className="skillName skillSix">Node Js</div>
                    <div className="progressContainer">
                        <div className={`${"progressBar"} ${"skillSixBar"} ${rightVisible? "skillAnimation" : ""}`}></div>
                        <motion.div className="progressLogoBlue" 
                                drag = "x"
                                dragConstraints = {{right: 0, left: 0}}
                                >N</motion.div>                    </div>
                </div>
                <div className="skillContainer">
                    <div className="skillName skillSeven">Express JS</div>
                    <div className="progressContainer">
                        <div className={`${"progressBar"} ${"skillSevenBar"} ${rightVisible? "skillAnimation" : ""}`}></div>
                        <motion.div className="progressLogoPink" 
                                drag = "x"
                                dragConstraints = {{right: 0, left: 0}}
                                >E</motion.div>
                    </div>
                </div>
                <div className="skillContainer">
                    <div className="skillName skillEight">Mongo DB</div>
                    <div className="progressContainer">
                        <div className={`${"progressBar"} ${"skillEightBar"} ${rightVisible? "skillAnimation" : ""}`}></div>
                        <motion.div className="progressLogoBlue" 
                                drag = "x"
                                dragConstraints = {{right: 0, left: 0}}
                                >M</motion.div>
                    </div>
                </div>
            </div>
            <motion.div    
                variants={scrollVariant} 
                animate="animate" 
                initial="initial" 
                transition={{duration: .5,delay: 7.4, yoyo: Infinity}}
                className="scrollLeft"
            >
                scroll
                <FontAwesomeIcon icon={faAnglesRight} className="headIcon"/>
            </motion.div>
            <motion.div    
                variants={scrollVariant} 
                animate="animate" 
                initial="initial" 
                transition={{duration: .5, delay:7.4, yoyo: Infinity}}
                className="scrollRight"
            >
                scroll
                <FontAwesomeIcon icon={faAnglesRight} className="headIcon"/>
            </motion.div>  
        </div>
    )
}

export default Experience;