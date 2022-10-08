import React from 'react'
import '../styles/contactCard.css'
import user from '../assets/images/user.png'
import {Link} from 'react-router-dom'
function ContactCard(props) {


    const {id,name, email}=props.contact;
  
  return (
    <div className='contact'>
    <div className="item">
    <div className='item__image'>
    <img className="avatar" width="45rem" alt="Nupur Agarwal" src={user}/></div>
        <Link style={{textDecoration: 'none', color:'black'}} to={`/contact/${id}`}>
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    </div></Link></div>
                <div className='item__trashIcon'><i className="trashIcon fa-sharp fa-solid fa-trash" id={id} 
                    onClick={()=> props.clickHandler(id)}></i>
               </div></div>
  )
}

export default ContactCard

