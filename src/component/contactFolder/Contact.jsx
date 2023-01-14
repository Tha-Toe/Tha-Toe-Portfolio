import React, { useEffect, useState } from "react";
import "./contact.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const creativeVariant = {
  initial: {
    opacity: 1,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 10,
  },
};

function Contact() {
  const mode = useSelector((state) => state.mode.mode);
  const [hV, setHv] = useState(false);
  const [lV, setLv] = useState(false);
  const [rV, setRv] = useState(false);

  const { ref: headRef, inView: headVisible } = useInView();
  const { ref: leftRef, inView: leftVisible } = useInView();
  const { ref: rightRef, inView: rightVisible } = useInView();

  useEffect(() => {
    if (headVisible) {
      setHv(true);
      console.log(headVisible);
    }
    if (leftVisible) {
      setLv(true);
    }
    if (rightVisible) {
      setRv(true);
    }
  }, [headVisible, leftVisible, rightVisible]);

  const postMessage = () => {};

  return (
    <>
      <div id="contact" className="contactMainContainer">
        <div
          className={`${"contactHeader"} ${hV ? "contactHeaderAnimation" : ""}`}
          ref={headRef}
        >
          Contact Me
        </div>
        <div className="contactContainer">
          <div
            className={`${"contactLeft"} ${lV ? "messageLeftAnimation" : ""}`}
            ref={leftRef}
          >
            <div
              className={`${"messageHeaderContainer"} ${
                mode === "light" && "light_mode_color_black"
              } ${hV ? "" : ""}`}
            >
              <div
                className={`${"messageHeader"} ${
                  mode === "light" && "light_mode_color_black"
                }`}
              >
                contact me with
              </div>
              <motion.div
                variants={creativeVariant}
                animate="animate"
                initial="initial"
                transition={{ duration: 0.5, yoyo: Infinity }}
              >
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  className={`${"headIcon"} ${
                    mode === "light" && "light_mode_color_black"
                  }`}
                />
              </motion.div>
            </div>
            <div className="contactNoteContainer">
              <FontAwesomeIcon icon={faPhone} className="contactIcon" />
              <div
                className={`${"contactNote"} ${
                  mode === "light" && "light_mode_color_black"
                }`}
              >
                <a href="tel:+959773159335">+959773159335</a>
              </div>
            </div>
            <div className="contactNoteContainer">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="contactIcon"
              />
              <div
                className={`${"contactNote"} ${
                  mode === "light" && "light_mode_color_black"
                }`}
              >
                Taungoo, Myanmar
              </div>
            </div>
            <div className="contactNoteContainer">
              <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />
              <div
                className={`${"contactNote"} ${
                  mode === "light" && "light_mode_color_black"
                }`}
              >
                <a href="mailto:thatoesaung510dev@gmail.com">
                  thatoesaung510dev@gmail.com
                </a>
              </div>
            </div>
            <div className="contactNoteContainer">
              <FontAwesomeIcon
                icon={faFacebook}
                className={`${"contactIcon"}`}
              />
              <a
                href="https://www.facebook.com/tha.toe.906"
                className={`${"contactNote addressLink"} ${
                  mode === "light" && "light_mode_color_black"
                }`}
              >
                Tha Toe
              </a>
            </div>
            <div className="contactNoteContainer">
              <FontAwesomeIcon
                icon={faTwitter}
                className={`${"contactIcon"}`}
              />
              <a
                href="https://twitter.com/ThaToeSaungDev?s=09"
                className={`${"contactNote addressLink"} ${
                  mode === "light" && "light_mode_color_black"
                }`}
              >
                Tha Toe Saung
              </a>
            </div>
            <div className="contactNoteContainer">
              <FontAwesomeIcon icon={faGithub} className="contactIcon" />
              <a
                className={`${"contactNote addressLink"} ${
                  mode === "light" && "light_mode_color_black"
                }`}
                href="https://github.com/Tha-Toe"
              >
                Tha-Toe
              </a>
            </div>
            <div className="contactNoteContainer">
              <FontAwesomeIcon icon={faLinkedinIn} className="contactIcon" />
              <a
                href="https://www.linkedin.com/in/tha-toe-saung-736a90238/"
                className={`${"contactNote addressLink"} ${
                  mode === "light" && "light_mode_color_black"
                }`}
              >
                Tha Toe Saung
              </a>
            </div>
          </div>
          <div
            ref={rightRef}
            className={`${"contactRight"} ${rV ? "messageRightAnimation" : ""}`}
          >
            <form
              action="https://formsubmit.co/thatoesaung510dev@gmail.com"
              method="POST"
            >
              <div className="messageHeaderContainer">
                <div
                  className={`${"messageHeader"} ${
                    mode === "light" && "light_mode_color_black"
                  }`}
                >
                  Or you can send me direct message below
                </div>
                <motion.div
                  variants={creativeVariant}
                  animate="animate"
                  initial="initial"
                  transition={{ duration: 0.5, yoyo: Infinity }}
                >
                  <FontAwesomeIcon
                    icon={faAnglesDown}
                    className={`${"headIcon"} ${
                      mode === "light" && "light_mode_color_black"
                    }`}
                  />
                </motion.div>
              </div>
              <input
                type="text"
                name="name"
                className={`${"messageInput"} ${
                  mode === "light" && "light_mode_input_bg_white"
                }`}
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                className={`${"messageInput"} ${
                  mode === "light" && "light_mode_input_bg_white"
                }`}
                placeholder="Your Email"
              />
              <input
                type="text"
                name="subject"
                className={`${"messageInput"} ${
                  mode === "light" && "light_mode_input_bg_white"
                }`}
                placeholder="Subject"
              />
              <textarea
                type="text"
                name="message"
                className={`${"messageInput msgBox"} ${
                  mode === "light" && "light_mode_input_bg_white"
                }`}
                placeholder="message"
                rows="4"
                cols="50"
              ></textarea>
              <button className="sendButton" type="submit">
                <FontAwesomeIcon icon={faEnvelope} className="buttonIcon" />{" "}
                Send Message{" "}
              </button>
              <input
                type="hidden"
                name="_next"
                value="https://thatoesaung.vercel.app/thankyou"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="developer_container">
        <div
          className={`${"dev_child"} ${rV && "messageRightAnimation"} ${
            mode === "light" && "light_mode_color_black"
          }`}
        >
          Designed & developed by -{" "}
          <a className="dev_name" href="https://thatoesaung.vercel.app">
            Tha Toe Saung
          </a>
          .
        </div>
      </div>
    </>
  );
}

export default Contact;
