import React, { useState } from "react";
import "./experience.css";
import "./experienceCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function SkillCard({mode, skill,index}){
    const [opened,setOpened] = useState(index ===0 ? true: false);

    const handleOpen = () => {
        setOpened((prev) => !prev);
    }
    if(opened){
        return(
            <div 
            className={`${"eLeftSmallContainer firstE listMain"} ${
              mode === "light" && "light_mode_color_black"
            } ${!opened && "not_opened"}
            `} onClick={handleOpen}>
              <div
                className={`${"eleftNote firstE listHeader"} ${
                  mode === "light" && "light_mode_color_black"
                }`}
              >
                {skill.header}
              </div>
              <ul clas>
                {
                  skill.content.map((each,i) => 
                    <li
                    className={`${"firstE listNote"} ${
                      mode === "light" && "light_mode_color_black"
                    }`}
                    key={i}
                  >
                    {each}
                  </li>
                  )
                }
              </ul>
            </div>
        )
    }else{
        return(
        <div 
            className={`${"eLeftSmallContainer firstE listMain closedCard"} ${
              mode === "light" && "light_mode_color_black"
            } ${!opened && "not_opened"}
            `} onClick={handleOpen}>
              <div
                className={`${"headerClosedCard"} ${
                  mode === "light" && "light_mode_color_black"
                }`}
              >
                {skill.header}
              </div>
              <div className="rightGp">
                {/* <div
                    className={`${"firstE listHeader cardRightText"} ${
                    mode === "light" && "light_mode_color_black"
                    }`}
                >
                    See my skill
                </div> */}
                <FontAwesomeIcon icon={faChevronDown} className="drop_icon"/>
              </div>
            </div>
        )
    }

}