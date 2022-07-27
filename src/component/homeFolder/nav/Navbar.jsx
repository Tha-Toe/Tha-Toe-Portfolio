import React, { useEffect, useState } from "react";
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
            stiffness: 300,
            duration: .5,
            delay: 2,
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

const humbagarVariant = {
    initial: {
        opacity: 0,
        y: -200,
    },
    animate: {
        opacity: 1,
        y: 0,        
        transition: {
            duration: 1,
            type: "spring",
            stiffness: 300,
            delay: 2,
        }
    }
}

function Navbar () {


    const [menuOpen,setMenuOpen] = useState(false);


    const refreshPage = () => {
        window.location.reload(true);
    }

    useEffect(() => {

    },[])

    return(
        <>
            <motion.div className="nContainer white"
                variants={containerVariant}
                initial="hidden"
                animate="containerVisible"
            >
                <div className="tLogo">
                    <motion.img src="/innerLogo.png" className="logoImg"
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
            <motion.div className="tMobileLogo"
                                variants={containerVariant}
                                initial="hidden"
                                animate="containerVisible"
            >
                        <motion.img src="/innerLogo.png" className="logoImg"
                            variants={logoVariant}
                            animate="animate"
                            onClick={refreshPage}
                            whileHover={{
                                scale: 1.1,
                            }}
                        />
            </motion.div>
            <motion.div className="humbagarContainer"
                                variants={humbagarVariant}
                                animate="animate"
                                initial="initial"
                                onClick={() => setMenuOpen(!menuOpen)}
            >
                <motion.div className={`${"stick"} ${menuOpen? "stickOne" : ""}`}></motion.div>
                <motion.div className={`${"stick"} ${menuOpen? "stickTwo" : ""}`}></motion.div>
                <motion.div className={`${"stick"} ${menuOpen? "stickThree" : ""}`}></motion.div>
            </motion.div>
            <div className={`${"menuContainer"} ${menuOpen? "menuActive":"menuHide"}`}>
                <div className={`${"menuStatic"} ${menuOpen? "menuAnimate" : ""}`}>
                    <img src="/innerLogo.png" className="menulogoImg"/>
                    <div className="webDeveloper">Web Developer(front end)</div>
                    <div className="humbagarListContainer">
                        <a className="humbagarList" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                        <a className="humbagarList" href="#about" onClick={() => setMenuOpen(false)}>About</a>
                        <a className="humbagarList" href="#project" onClick={() => setMenuOpen(false)}>Project</a>
                        <a className="humbagarList" href="#skill" onClick={() => setMenuOpen(false)}>Skill</a>
                        <a className="humbagarList" href="#contact" onClick={() => setMenuOpen(false)}s>Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;