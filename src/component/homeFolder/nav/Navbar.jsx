import React from "react";
import "./navbar.css";
import {motion} from "framer-motion"


const containerVariant = {
    hidden: {
        opacity: 0,
        y: -200
    },containerVisible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 200,
            duration: .5,
            delay: 6,
        }
    }
}

const logoVariant = {
    animate: {
        rotate: 360,
        transition: {
            duration: 2,
            yoyo: Infinity,
        }
    }
}

const navVariant = {
    hover: {
        scale: [1,1.2,1.1],
        transition: {
            duration: .4,
            type: "spring"
        }
    }
}

function Navbar () {

    const refreshPage = () => {
        window.location.reload(true);
    }

    return(
        <motion.div className="nContainer white"
            variants={containerVariant}
            initial="hidden"
            animate="containerVisible"
        >
            <div className="tLogo">
                <motion.img src="/myLogo.png" className="logoImg"
                    variants={logoVariant}
                    animate="animate"
                    onClick={refreshPage}
                    whileHover={{
                        scale: 1.1,
                    }}
                />
            </div>
            <div className="navList">
                <motion.a className="navChild" variants={navVariant} whileHover="hover" href="#home">Home</motion.a>
                <motion.a className="navChild" variants={navVariant} whileHover="hover"href="#about">About</motion.a>
                <motion.a className="navChild" variants={navVariant} whileHover="hover" href="#project">Project</motion.a>
                <motion.a className="navChild" variants={navVariant} whileHover="hover" href="#skill">Skill</motion.a>
                <motion.a className="navChild" variants={navVariant} whileHover="hover" href="#contact">Contact Me</motion.a>
            </div>
        </motion.div>
    )
}
export default Navbar;