import React ,{useState} from "react";
import Main from "../main/Main";
import Navbar from "../nav/Navbar";
import "./home.css";
import Intro from "../intro/Intro"
import {AnimatePresence,motion} from "framer-motion"

function Home () {

    const [introShow,setIntroShow] = useState(true);
    setTimeout(() => {
            setIntroShow(false);
    }, 4000);

    return(
        <div className="hContainer" id="home">
                <AnimatePresence>
                    {introShow&&<Intro />}
                </AnimatePresence>
                <Navbar />
                <Main />
        </div>
    )
}
export default Home;