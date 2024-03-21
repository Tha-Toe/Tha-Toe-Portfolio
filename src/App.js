import "./App.css";
import About from "./component/aboutFolder/about/About";
import Home from "./component/homeFolder/home/Home";
import Project from "./component/projectFolder/Project";
import Experience from "./component/skill/Experience";
import Contact from "./component/contactFolder/Contact";
import Navbar from "./component/homeFolder/nav/Navbar";
import { AnimatePresence } from "framer-motion";
import Intro from "./component/homeFolder/intro/Intro";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Thankyou from "./Thankyou";
import { useDispatch, useSelector } from "react-redux";
import { changeModeWithColor } from "./store/slice";
import ProjectAll from "./component/projectFolder/ProjectAll";

function App() {
  const [introShow, setIntroShow] = useState(true);
  const dispatch = useDispatch();
  setTimeout(() => {
    setIntroShow(false);
  }, 4000);
  const mode = useSelector((state) => state.mode.mode);
  useEffect(() => {
    let modeFromLocalStorage = localStorage.getItem("mode");
    if (modeFromLocalStorage === "dark") {
      dispatch(changeModeWithColor("dark"));
    } else if (modeFromLocalStorage === "light") {
      dispatch(changeModeWithColor("light"));
    }
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              introShow ? (
                <AnimatePresence>
                  <Intro />
                </AnimatePresence>
              ) : (
                <div
                  className={`${"body"} ${
                    mode === "light" && "light_mode_bg_white"
                  }`}
                >
                  <div
                    className={`${"bodyContainer"} ${
                      mode === "light" && "light_mode_bg_white"
                    }`}
                  >
                    <Navbar />
                    <Home />
                    <About />
                    <Project />
                    <Experience />
                    <Contact />
                  </div>
                </div>
              )
            }
          />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/projects" element={<ProjectAll />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
