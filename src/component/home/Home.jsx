import React from "react";
import Main from "../main/Main";
import Navbar from "../nav/Navbar";
import "./home.css";

function Home () {
    return(
        <div className="hContainer">
                <Navbar />
                <Main />
        </div>
    )
}
export default Home;