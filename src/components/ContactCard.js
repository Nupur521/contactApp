import React from 'react'
import '../styles/contactCard.css'
import user from '../assets/images/user.png'

function ContactCard(props) {
    const {id,name, email}=props.contact;
  return (
    <div className='item'>
    <img className="Header__icons" alt="Nupur Agarwal" src={user}/>
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}
                    <i className="trashIcon fa-sharp fa-solid fa-trash"></i></div>
                </div>
               
               </div>
  )
}

export default ContactCard