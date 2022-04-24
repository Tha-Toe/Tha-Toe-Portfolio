import React ,{useState} from "react";
import Main from "../main/Main";
import Navbar from "../nav/Navbar";
import "./home.css";
import Intro from "../intro/Intro"
import {AnimatePresence,motion} from "framer-motion"

function Home () {
    return(
        <div className="hContainer" id="home">
                <Main />
        </div>
    )
}
export default Home;