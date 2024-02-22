
import './error.css';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

export default function Error(){

return(
    <div className='Container-error'>
       <img src='404.png' alt='tela de error'/>
       <h1> Página Não Encontrada!</h1>
            <div className='links-arrow'> 
                <Link to={"/"}>
                    <FiArrowLeft size={38} color="#FFF"/>
                </Link>
            </div>
    </div>
)

}