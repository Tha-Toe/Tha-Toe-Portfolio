import './App.css';
import About from './component/aboutFolder/about/About';
import Home from './component/homeFolder/home/Home';
import Project from './component/projectFolder/Project';
import Experience from './component/skill/Experience';
import Contact from './component/contactFolder/Contact';

function App() {
  return (
    <div className="bodyContainer">
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
