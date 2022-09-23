import React from 'react'
import ContactCard from './ContactCard'


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
    <div>{renderContactList}</div>
  )
}

export default ContactList