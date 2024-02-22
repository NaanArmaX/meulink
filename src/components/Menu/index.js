import { FaGithub , FaQuestion } from "react-icons/fa";
import {Link} from 'react-router-dom';
import './menu.css'

export default function Menu(){
 return(
    <div className="menu">
        
        
        <a className="social" href="https://github.com/NaanArmaX" target="_blank">
        <FaGithub color="#FFF" size={24}/>
        </a>
        
        <a className="social">
        <Link to="/sobre">
        <FaQuestion color="#FFF" size={24}/>
        </Link>
        </a>
        

        <Link className="menu-item" to="/links">
        Meus Links
        </Link>
       
    </div>
 )
}