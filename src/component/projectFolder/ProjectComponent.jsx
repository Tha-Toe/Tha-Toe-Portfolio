import React,{useState} from "react";
import "./projectComponent.css";

export default function ProjectComponent({project,index}){
    const [hoverCardId, setHoverCardId] = useState(null);

    const mouseHoverAndLeave = ({ condition, id }) => {
        console.log(condition, id);
        if (condition) {
          setHoverCardId(id);
        } else {
          setHoverCardId(null);
        }
      };


    return(
        <div className="projectNew"
        onMouseEnter={() => {
            mouseHoverAndLeave({ condition: true, id: project.id });
          }}
          onMouseLeave={() => {
            mouseHoverAndLeave({ condition: false, id: project.id });
          }}
        >
            <img src={project.projectImage} alt="projectImage" className="projectImageNew"/>
            <div class="overlay">
                <div className="projectName">{project.projectName}</div>
                <div className="projectName projectName2">
                    {project.projectName2}
                </div>
                <div className="projectDetailNew">{project.projectDetail}</div>
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                    <button className="projectButton">Go to website</button>
                </a>
            </div>
            <div
              className={`${"hoverLeftNew"} ${
                hoverCardId === project.id ? "hoverLeftNewStart" : ""
              }`}
            ></div>
            <div
              className={`${"hoverRightNew"} ${
                hoverCardId === project.id ? "hoverRightNewStart" : ""
              }`}
            ></div>
        </div>
    )
}