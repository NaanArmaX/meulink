
import './links.css';
import {FiArrowLeft,FiLink,FiTrash} from 'react-icons/fi';
import { Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import {getLinkSave,linkDelete} from '../../services/storelinks';
import LinkItem from '../../components/LinkItem'

export default function Links(){

  const [myLinks,setMyLinks] = useState([]);

  const [data,setData] = useState({});
  const[showModal,setShowModal] = useState(false);

  const [emptyList,setemptyList] = useState(false);


  useEffect(() => {
    async function getLinks(){
      const result = await getLinkSave('@encurtalink')

      if(result.length === 0){
       setemptyList(true);
      }
      setMyLinks(result);
    }

    getLinks();

  },[])

  function openLink(link){
    setData(link)
    setShowModal(true)
  }

  async function deleteLink(id){
    const result = await linkDelete(myLinks,id);

    if(result.length === 0){
      setemptyList(true);
    }

    setMyLinks(result)

  }


    return(
     <div className='links-container'>

      <div className='links-header'>
        <Link to={"/"}>
        <FiArrowLeft size={38} color="#FFF"/>
        </Link>
       
       <h1>Meus Links</h1>
      </div>

      {emptyList && (

        <div className='links-item'>
          <h2 className='empty-text'>
            Sua Lista está vazia
          </h2>

        </div>

      )}


      
      {myLinks.map( link => (

          <div key={link.id} className='links-item'>

          <button className='link' onClick={() => openLink(link)}>
            <FiLink size={18} color='#FFF'/>
            {link.long_url}
          </button>
          <button className='link-delete' onClick={() => deleteLink(link.id)}>
            <FiTrash size={24} color='#FF5454'/>
          </button>
          </div>

      ))}

      {showModal && (
        <LinkItem
        closeModal ={ () => setShowModal(false) }
        content={data}
        />
      )}


     </div>
    )
  }