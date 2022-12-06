import "./App.css";
import About from "./component/aboutFolder/about/About";
import Home from "./component/homeFolder/home/Home";
import Project from "./component/projectFolder/Project";
import Experience from "./component/skill/Experience";
import Contact from "./component/contactFolder/Contact";
import Navbar from "./component/homeFolder/nav/Navbar";
import { AnimatePresence } from "framer-motion";
import Intro from "./component/homeFolder/intro/Intro";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Thankyou from "./Thankyou";

function App() {
  const [introShow, setIntroShow] = useState(true);
  setTimeout(() => {
    setIntroShow(false);
  }, 4000);

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
                <div className="bodyContainer">
                  <Navbar />
                  <Home />
                  <About />
                  <Project />
                  <Experience />
                  <Contact />
                </div>
              )
            }
          />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
