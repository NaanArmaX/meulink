import { useState } from 'react';
import {FiLink} from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import api from '../../services/api';
import {saveLink} from '../../services/storelinks'

export default function Home(){

  const[link,setLink] = useState('');
  const[data,setData] = useState({});
  const[showModal,setShowModal] = useState(false);



  async function ShortLink(){
    try{
      const response = await api.post('/shorten',{long_url:link})



      setData(response.data);
      setShowModal(true);
      saveLink('@encurtalink',response.data);
      setLink('');
    }catch{
      alert("Ops,parece que algo deu errado");
      setLink('');
    }
  }

  

    return(
      <div  className="container-home" >
        
        <div className="logo">
        <img src="/logo.png" alt="logo" />
        <h1>ArmX Link</h1>
        <span>Cole Seu Link para encurtar</span>
        </div>

        <div className="area-input">
            
        <div>
            <FiLink size={24} color="#FFF"/>
            <input placeholder='Cole seu link aqui'
            value={link}
            onChange={(e) => setLink(e.target.value)}
            />

        </div>

        <button onClick={ShortLink}>Encurtar Link</button>

        </div>

        <Menu/>
       
       {showModal && (
         <LinkItem
         closeModal = { () => setShowModal(false)}
         content={data}
         />
       )}

      </div>
    )
  }