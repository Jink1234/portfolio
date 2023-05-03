import { useState } from "react";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonials from "./Components/testimonials/Testimonials";
import Topbar from "./Components/topbar/Topbar";
import Works from "./Components/works/Works";
import "./app.scss"
import Menu from "./Components/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen]=useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>

      </div>
    </div>
  );
}

export default App;
