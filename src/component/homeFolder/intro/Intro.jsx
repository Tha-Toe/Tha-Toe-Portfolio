import React from "react";
import "./intro.css"
import {motion} from "framer-motion"

const logoVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}

const pathVariant = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity:1,
        pathLength:1,
        transition: {duration: 3,
        ease: "easeInOut"}
    }

}
function Intro () {
    return(
        <motion.div className="introContainer" exit={{opacity: 0}}>
            <svg className="introBorder" xmlns="http://www.w3.org/2000/svg" width="250" height="350" viewBox="0 0 24 24" fill="none" stroke="#ff5d40" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hexagon">
                <motion.path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                variants={pathVariant} initial="hidden" animate="visible"
                ></motion.path>
            </svg>
            <motion.img  src="/introLogo.png" 
            className="introLogo"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            />
        </motion.div>
    )
}
export default Intro;