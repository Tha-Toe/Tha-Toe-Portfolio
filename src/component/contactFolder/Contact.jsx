import React, { useEffect, useState } from "react";
import "./contact.css";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesDown, faEnvelope, faMapLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";


const creativeVariant = {
    initial: {
        opacity: 1,
        y: -10,
    },
    animate: {
        opacity: 1,
        y: 10,
    }
}


function Contact () {

    const [hV,setHv] = useState(false);
    const [lV,setLv] = useState(false);
    const [rV,setRv] = useState(false);


    const {ref: headRef, inView: headVisible} = useInView();
    const {ref: leftRef, inView: leftVisible} = useInView();
    const {ref: rightRef, inView: rightVisible} = useInView();

    useEffect(() => {
        if(headVisible){
            setHv(true);
            console.log(headVisible)
        }
        if(leftVisible){
            setLv(true);
        }
        if(rightVisible){
            setRv(true);
        }
    },[headVisible,leftVisible,rightVisible])


    return(
        <div id="contact" className = "contactMainContainer">
            <div className={`${"contactHeader"} ${hV? "contactHeaderAnimation" : ""}`} ref={headRef}>Contact Me</div>
            <div className = "contactContainer">
                <div className={`${"contactLeft"} ${lV? "messageLeftAnimation" : ""}`} ref={leftRef}>
                    <div  className={`${"messageHeaderContainer"} ${hV? "" : ""}`}>
                                <div className="messageHeader">contact me with</div>
                                <motion.div    
                                        variants={creativeVariant} 
                                        animate="animate" 
                                        initial="initial" 
                                        transition={{duration: .5, yoyo: Infinity}}
                                        >
                                    <FontAwesomeIcon icon={faAnglesDown} className="headIcon"/>
                                </motion.div> 
                            </div>
                        <div className="contactNoteContainer">
                            <FontAwesomeIcon icon={faPhone} className="contactIcon"/>
                            <div className="contactNote">+959773159335</div>
                        </div>
                        <div className="contactNoteContainer">
                            <FontAwesomeIcon icon={faMapLocationDot} className="contactIcon"/>
                            <div className="contactNote">Taungoo, Myanmar</div>
                        </div>
                        <div className="contactNoteContainer">
                            <FontAwesomeIcon icon={faEnvelope} className="contactIcon"/>
                            <div className="contactNote">thatoesaung510dev@gmail.com</div>
                        </div>
                        <div className="contactNoteContainer">
                            <FontAwesomeIcon icon={faFacebook} className="contactIcon"/>
                            <a href="https://www.facebook.com/tha.toe.906" className="contactNote addressLink">Tha Toe</a>
                        </div>
                        <div className="contactNoteContainer">
                            <FontAwesomeIcon icon={faTwitter} className="contactIcon"/>
                            <a href="https://twitter.com/ThaToeSaungDev?s=09" className="contactNote addressLink">Tha Toe Saung</a>
                        </div>
                        <div className="contactNoteContainer">
                            <FontAwesomeIcon icon={faGithub} className="contactIcon"/>
                            <a className="contactNote addressLink" href="https://github.com/Tha-Toe">Tha-Toe</a>
                    </div>
                </div>
                <div ref={rightRef} className={`${"contactRight"} ${rV? "messageRightAnimation" : ""}`}>
                    <form action="https://formsubmit.co/thatoesaung510dev@gmail.com" method="POST" >
                        <div className="messageHeaderContainer">
                            <div className="messageHeader">Or you can send me direct message below</div>
                            <motion.div    
                                    variants={creativeVariant} 
                                    animate="animate" 
                                    initial="initial" 
                                    transition={{duration: .5, yoyo: Infinity}}
                                    >
                                <FontAwesomeIcon icon={faAnglesDown} className="headIcon"/>
                            </motion.div> 
                        </div>
                        <input type="text" name="name" className="messageInput" placeholder="Your Name"/>
                        <input type="email" name="email" className="messageInput" placeholder="Your Email"/>
                        <input type="text" name="subject" className="messageInput" placeholder="Subject"/>
                        <textarea type="text" name="message" className="messageInput msgBox" placeholder="message" rows="4" cols="50"></textarea>
                        <button className="sendButton" type="submit"><FontAwesomeIcon icon={faEnvelope} className="buttonIcon"/> Send Message </button>
                        <input type="hidden" name="_next" value="https://thatoesaung.vercel.app/thankyou" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;