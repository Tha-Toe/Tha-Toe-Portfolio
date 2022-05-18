import React, { useEffect, useState } from "react";
import "./main.css";
import {motion, transform} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";



const creativeVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        scale: 1.5,
        y: -50,

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

function Main () {
    const [hi] = useState(["H","i",","]);
    const [im] = useState(["I","'","m"]);
    const [tha] = useState(["T","h","a"]);
    const [toe] = useState(["T","o","e"]);
    const [saung] = useState(["S","a","u","n","g",","]);
    const [web] = useState(["w","e","b"]);
    const [developer] = useState([" d","e","v","e","l","o","p","e","r",","]);


    const {ref: mNoteRef, inView: mNoteVisible} = useInView();
    const [noteVisible,setNoteVisible] = useState(false);
    
    useEffect(() => {
        if(mNoteVisible) {
            setNoteVisible(true);
        }
    },[mNoteVisible])



    return(
        <div className="mContainer white">
            <div className="leftMContainer" ref={mNoteRef}>
                <div className="firstLine">
                    <motion.div  className="mNote firstHi" >
                        {hi.map((e,index) => 
                            <motion.span 
                                    key={index} 
                                    className={`"e" ${noteVisible? "noteVisible": ""}`} 
                                    style={{"--i":index+1}}
                                    initial="hidden"
                                    animate="mNoteVisible"
                                    variants={{
                                        hidden: {
                                            
                                            scaleY: 1.3,
                                            scaleX: 0.8,
                                            rotate: -20,
                                            opacity: 0,
                                            
                                        },
                                        mNoteVisible: {
                                            
                                            scaleY: 1,
                                            scaleX: 1,
                                            rotate: 0,
                                            opacity: 1,
                                            
                                            transition:{
                                                duration: .5,
                                                delay: (0.05 * (index+1))+0.5,
                                                type:"spring",
                                                stiffness: 800
                                            },
                                        }
                                    }}
                                    whileHover= {{
                                        scale: 1.2,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                        }
                                    }}
                                    drag
                                    dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}} 
                            >{e}
                            </motion.span>)}
                    </motion.div>
                    <motion.div  className="mNote first" >
                        {im.map((e,index) => 
                            <motion.span 
                                    key={index} 
                                    className={`"e" ${noteVisible? "noteVisible": ""}`} 
                                    style={{"--i":index+4}}
                                    initial="hidden"
                                    animate="mNoteVisible"
                                    variants={{
                                        hidden: {
                                            scale: 1,
                                            opacity: 0,
                                            scaleY: 1.3,
                                            scaleX: 0.8,
                                            rotate: -20,
                                        },
                                        mNoteVisible: {
                                            scaleY: 1,
                                            scaleX: 1,
                                            rotate: 0,
                                            opacity: 1,
                                            transition:{
                                                duration: .5,
                                                type:"spring",
                                                stiffness: 800,
                                                delay: (0.05 * (index+4))+0.5
                                            },
                                        }
                                    }}
                                    whileHover= {{
                                        scale: 1.2,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                        }
                                    }}
                                    drag
                                    dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                            >{e}
                            </motion.span>)}
                    </motion.div>
                </div>
                <div className="secondLine">
                    <motion.div  className="mNote second" >
                        {tha.map((e,index) => 
                            <motion.span 
                                    key={index} 
                                    className={`"e" ${noteVisible? "noteNameVisible": ""} "orange" `} 
                                    style={{"--i":index+7}}
                                    initial="hidden"
                                    animate="mNoteVisible"
                                    variants={{
                                        hidden: {
                                            scale: 1,
                                            scaleY: 1.3,
                                            scaleX: 0.8,
                                            rotate: -20,
                                            opacity: 0
                                        },
                                        mNoteVisible: {
                                            scaleY: 1,
                                            scaleX: 1,
                                            rotate: 0,
                                            opacity: 1,
                                            transition:{
                                                duration: .5,
                                                delay: (0.05 * (index+7))+0.5,
                                                type:"spring",
                                                stiffness: 800
                                            },
                                        }
                                    }}
                                    whileHover= {{
                                        scale: 1.2,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                        }
                                    }}
                                    drag
                                    dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                            >{e}
                            </motion.span>)}
                    </motion.div>
                    <motion.div  className="mNote second" >
                        {toe.map((e,index) => 
                            <motion.span 
                                    key={index} 
                                    className={`"e" ${noteVisible? "noteNameVisible": ""}`} 
                                    style={{"--i":index+10}}
                                    initial="hidden"
                                    animate="mNoteVisible"
                                    variants={{
                                        hidden: {
                                            scale: 1,
                                            scaleY: 1.3,
                                            scaleX: 0.8,
                                            rotate: -20,
                                            opacity: 0
                                        },
                                        mNoteVisible: {
                                            scaleY: 1,
                                            scaleX: 1,
                                            rotate: 0,
                                            opacity: 1,
                                            transition:{
                                                duration: .5,
                                                delay: (0.05 * (index+10))+0.5,
                                                type:"spring",
                                                stiffness: 800
                                            },
                                        }
                                    }}
                                    whileHover= {{
                                        scale: 1.2,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                        }
                                    }}
                                    drag
                                    dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                            >{e}
                            </motion.span>)}
                    </motion.div>
                    <motion.div  className="mNote second" >
                        {saung.map((e,index) => 
                            <motion.span 
                                    key={index} 
                                    className={`"e" ${noteVisible? "noteNameVisible": ""}`} 
                                    style={{"--i":index+13}}
                                    initial="hidden"
                                    animate="mNoteVisible"
                                    variants={{
                                        hidden: {
                                            scale: 1,
                                            scaleY: 1.3,
                                            scaleX: 0.8,
                                            rotate: -20,
                                            opacity: 0
                                        },
                                        mNoteVisible: {
                                            scaleY: 1,
                                            scaleX: 1,
                                            rotate: 0,
                                            opacity: 1,
                                            transition:{
                                                duration: .5,
                                                delay: (0.05 * (index+13))+0.5,
                                                type:"spring",
                                                stiffness: 800
                                            },
                                        }
                                    }}
                                    whileHover= {{
                                        scale: 1.2,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                        }
                                    }}
                                    drag
                                    dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                            >{e}
                            </motion.span>)}
                    </motion.div>
                </div>
                <div className="thirdLine">
                    <motion.div  className="mNote third" >
                        {web.map((e,index) => 
                            <motion.span 
                                    key={index} 
                                    className={`"e" ${noteVisible? "noteVisible": ""}`} 
                                    style={{"--i":index+19}}
                                    initial="hidden"
                                    animate="mNoteVisible"
                                    variants={{
                                        hidden: {
                                            scale: 1,
                                            scaleY: 1.3,
                                            scaleX: 0.8,
                                            rotate: -20,
                                            opacity: 0
                                        },
                                        mNoteVisible: {
                                            scaleY: 1,
                                            scaleX: 1,
                                            rotate: 0,
                                            opacity: 1,
                                            transition:{
                                                duration: .5,
                                                delay: (0.05 * (index+19))+0.5,
                                                type:"spring",
                                                stiffness: 800
                                            },
                                        }
                                    }}
                                    whileHover= {{
                                        scale: 1.2,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                        }
                                    }}
                                    drag
                                    dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                            >{e}
                            </motion.span>)}
                    </motion.div>
                    <motion.div  className="mNote third" >
                        {developer.map((e,index) => 
                            <motion.span 
                                    key={index} 
                                    className={`"e" ${noteVisible? "noteVisible": ""}`} 
                                    style={{"--i":index+22}}
                                    initial="hidden"
                                    animate="mNoteVisible"
                                    variants={{
                                        hidden: {
                                            scale: 1,
                                            scaleY: 1.3,
                                            scaleX: 0.8,
                                            rotate: -20,
                                            opacity: 0
                                        },
                                        mNoteVisible: {
                                            scaleY: 1,
                                            scaleX: 1,
                                            rotate: 0,
                                            opacity: 1,
                                            transition:{
                                                duration: .5,
                                                delay: (0.05 * (index+22))+0.5,
                                                type:"spring",
                                                stiffness: 800
                                            },
                                        },
                                    }}
                                    whileHover= {{
                                        scale: 1.2,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                        }
                                    }}
                                    drag
                                    dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                            >{e}
                            </motion.span>)}
                    </motion.div>
                </div>
            </div>
            <div className="rightMContainer">
                <motion.div className="one" variants={creativeVariant} animate="animate" initial="initial" transition={{duration: .5, delay: 2.1, yoyo: Infinity,}}></motion.div>
                <motion.div className="two" variants={creativeVariant} animate="animate" initial="initial" transition={{duration: .5, delay: 2.3, yoyo: Infinity,}}></motion.div>
                <motion.div className="three" variants={creativeVariant} animate="animate" initial="initial" transition={{duration: .5, delay: 2.5, yoyo: Infinity,}}></motion.div>
                <motion.div className="four" variants={creativeVariant} animate="animate" initial="initial" transition={{duration: .5, delay: 2.7, yoyo: Infinity,}}></motion.div>
                <motion.div className="five" variants={creativeVariant} animate="animate" initial="initial" transition={{duration: .5, delay: 2.9, yoyo: Infinity,}}></motion.div>
                <motion.div className="six" variants={creativeVariant} animate="animate" initial="initial" transition={{duration: .5, delay: 3.1, yoyo: Infinity,}}></motion.div>
                <motion.div className="seven" variants={creativeVariant} animate="animate" initial="initial" transition={{duration: .5, delay: 3.3, yoyo: Infinity,}}></motion.div>
            </div>
            <motion.div    
                variants={scrollVariant} 
                animate="animate" 
                initial="initial" 
                transition={{duration: .5,delay: 3.4, yoyo: Infinity}}
                className="scrollLeft"
            >
                scroll
                <FontAwesomeIcon icon={faAnglesRight} className="headIcon"/>
            </motion.div>
            <motion.div    
                variants={scrollVariant} 
                animate="animate" 
                initial="initial" 
                transition={{duration: .5, delay:3.4, yoyo: Infinity}}
                className="scrollRight"
            >
                scroll
                <FontAwesomeIcon icon={faAnglesRight} className="headIcon"/>
            </motion.div>                          
        </div>
    )
}
export default Main;