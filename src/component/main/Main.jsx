import React, { useEffect, useState } from "react";
import "./main.css";
import {motion, transform} from "framer-motion";
import {useInView} from "react-intersection-observer";

function Main () {
    const [first] = useState(["H","i",","," I","'","m"]);
    const [second] = useState(["T","h","a","   ","T","o","e"," S","a","u","n","g",","]);
    const [third] = useState(["w","e","b"," d","e","v","e","l","o","p","e","r",","]);

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
                <motion.div  className="mNote hi" >
                    {first.map((e,index) => 
                        <motion.span 
                                key={index} 
                                className={`"e" ${noteVisible? "noteVisible": ""}`} 
                                style={{"--i":index+1}}
                                initial="hidden"
                                animate="mNoteVisible"
                                variants={{
                                    hidden: {
                                        scale: 1,
                                        opacity: 0
                                    },
                                    mNoteVisible: {
                                    /*    
                                        scale: [1,1.5,1],
                                        rotate: [-20,-20,0],
                                        translateY: [-20,0],
                                        position: "relative",
                                        display: "inline-block",
                                    */
                                   /*  
                                        scaleY: 1,
                                        scaleX: 1,
                                    */
                                        opacity: 1,
                                        transition:{
                                            duration: .5,
                                            delay: 0.1 * (index+1)
                                        },

                                    }
                                }}
                            
                                whileHover={{
                                    color: "#29FCDC",
                                    position: "relative", 
                                    //scale: [1,1.3,.9,1], 
                                    //transition: {duration: .7}, 
                                    //rotate:["0deg","10deg","-10deg","0deg"],
                                    scaleY: [1,.6,.6,1.1,.9,1.1,1],
                                    scaleX: [1,1.2,1.2,.9,1.1,.9,1]
                                }} 
                                
                        >{e}
                        </motion.span>)}
                </motion.div>
                <div className="mNote im" >{second.map((e,index) => <motion.span key={index} className="e"  style={{"--i":index+6}}>{e}</motion.span>)}</div>
                <div className="mNote web" >{third.map((e,index) => <motion.span key={index} className="e"  style={{"--i":index+18}}>{e}</motion.span>)}</div>
            </div>
            <div className="rightMContainer">this is img </div>
        </div>
    )
}
export default Main;