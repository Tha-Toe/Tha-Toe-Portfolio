import React from "react";
import "./navbar.css";

function Navbar () {
    return(
        <div className="nContainer white">
            <div className="tLogo"><img src="/myLogo.png" className="logoImg"/></div>
            <div className="navList">
                <a className="navChild">Home</a>
                <a className="navChild">About</a>
                <a className="navChild">Project</a>
                <a className="navChild">Skill</a>
                <a className="navChild">Contact Me</a>
            </div>
        </div>
    )
}
export default Navbar;