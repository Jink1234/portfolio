
import "./intro.scss"
import Typewriter from 'typewriter-effect';

export default function Intro() {

 


  return (
    <div className='intro' id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/man.jpg" alt=""></img>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi! there, I am</h2>
            <h1>Venu Gopal</h1>
            <h3> Freelance  <span><Typewriter  options={{ 
           strings:[" Developer", " Designer", " Content Creater"],
           autoStart:true,
           delay:75,
           loop:true
           }}
           
           /> </span>
           
           
          
              </h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt=""></img>
          </a>
        </div>
    </div>
  )
}
