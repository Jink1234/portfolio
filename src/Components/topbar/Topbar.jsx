import "./topbar.scss"
import { Person, Mail } from "@mui/icons-material"

export default function  Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Jinkala.</a>
                <div className="itemcontainer">
                    <Person className="icon"/>
                    <span>+91 8374******</span>
                </div>
                <div className="itemcontainer">
                    <Mail className="icon"/>
                    <span>jinkala@gmail.com</span>
                </div>
               
            </div>
            
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
