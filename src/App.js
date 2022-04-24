import './App.css';
import About from './component/aboutFolder/about/About';
import Home from './component/homeFolder/home/Home';
import Project from './component/projectFolder/Project';
import Experience from './component/skill/Experience';
import Contact from './component/contactFolder/Contact';
import Navbar from './component/homeFolder/nav/Navbar';
import Test from "./Test"

function App() {
  return (
    <div className="bodyContainer">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
