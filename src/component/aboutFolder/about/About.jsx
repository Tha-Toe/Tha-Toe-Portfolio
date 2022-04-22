import React, { useEffect, useState } from 'react';
import "./about.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

const leftVariant = {
    initial: {
        opacity: 0,
        x: -300,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .7,
            type: "spring",
            stiffness: 100
        }
    }
}
const rightVariant = {
    initial: {
        opacity: 0,
        x: 300,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .7,
            type: "spring",
            stiffness: 100
        }
    }
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
    }
}

function About () {
    const [leftTrueVisible,setLeftTrueVisible] = useState(false);
    const {ref: leftRef, inView: leftVisible} = useInView();

    const [rightTrueVisible,setRightTrueVisible] = useState(false);
    const {ref: rightRef, inView: rightVisible} = useInView();
    
    useEffect(() => {
        if(leftVisible){
            setLeftTrueVisible(true);
        }
        if(rightVisible) {
            setRightTrueVisible(true);
        }
    },[leftVisible,rightVisible]);

    return(
        <div className="aboutContainer" id='about'>
            <motion.div className="leftAbout" ref={leftRef} variants={leftVariant} initial="initial" animate = {`${leftVisible? "animate": ""}`}>
                <img src="/myPhoto.png" className="myPhoto"/>
            </motion.div>
            <motion.div className="rightAbout" ref={rightRef} variants={rightVariant} initial="initial" animate = {`${rightVisible? "animate": ""}`}>
                <div className="aboutHead">Who I am?</div>
                <div className="aboutMe">About Me</div>
                <p>I'm Tha Toe Saung, 20years old, junior React web developer with front end development skills.
                    I am passionate about leveraging my diverse backgrounds to decipher challenging problems and
                     create delightful experiences. I honed my skills at web development.
                </p>
                <p>I develop websites with HTML, CSS, Bootstrap, JavaScript, React, react-redux, react-router, framer-motion and GitHub at front end development.</p>
                <p>And I have some knowledge and keep studying as Node Js, Express Js, MongoDB for backend development.</p>
                <motion.button className="cvButton"
                    whileHover={{
                        scale: [1,1.3,1.1],
                        transition: {
                            duration: .2,
                        }
                    }}
                >
                    <a className="cvLink" href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:1d12a958-ebe5-3eda-9bae-3c6668249c37">
                        <FontAwesomeIcon icon={faDownload}/> Download CV
                    </a>
                </motion.button>
            </motion.div>
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

export default About;