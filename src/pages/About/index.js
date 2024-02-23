import { Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './about.css';



export default function Home(){

    return(

       
        
        
        <div  className="links-container" >
        
      <div className='links-header'>
        <Link to={"/"}>
        <FiArrowLeft size={38} color="#FFF"/>
        </Link>
       
       <h1>Sobre O Site</h1>
      </div>

      <div className='AboutText'>
       
        <h2>Site criado em React e suas diversas bibliotecas Totalmente responsivo tanto para proporções menores de browers como para dispositivos mobiles , Com uso de Api (bitly) para encurtar os links</h2>
<br>
        <a>https://barber-sage.vercel.app/<a/>
      </div>
        

      </div>

        
    )
  }
