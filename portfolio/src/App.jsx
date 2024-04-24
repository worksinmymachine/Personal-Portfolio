import { useState } from "react";
import Navbar from "./components/Navbar";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Technologies from "./components/Technologies";
import SkillCloud from "./components/SkillCloud";
import MyJourney from "./components/MyJourney";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Technologies/>
      <Work/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default App;
