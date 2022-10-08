import React from 'react'
import ContactCard from './ContactCard'
import {Link} from "react-router-dom"


function ContactList(props) {

    const removeContactHandler =(id)=>{
       props.getContactId(id);
    };
    const renderContactList=props.contacts.map((contact)=>{
         return(

   <ContactCard contact={contact} key={contact.id} clickHandler={removeContactHandler}/>
             )
    })
  return (
    <div> <h1>Contact List</h1>
    {renderContactList}
     <Link to="/add"><button> Add Contact</button></Link></div>
  )
}

export default ContactList