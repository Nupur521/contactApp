import React,{useState,useEffect} from 'react';
import uuid from 'react-uuid'
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
let contactValue;


//To set the initial value of contacts
 if(localStorage.getItem('contacts'))
 {
    contactValue=JSON.parse(localStorage.getItem("contacts"));
    console.log(contactValue);
 }
 else
   contactValue=[];
 

function App() {

     const removeContactHandler=(id)=>{
        console.log(id);
    const newContactList=contacts.filter(contact=>{
        return contact.id!==id;
     })
     localStorage.setItem("contacts",JSON.stringify(newContactList));
     setContacts(newContactList);
    };

     
 

 const [contacts,setContacts]=useState(contactValue);
 const addContactHandler=(contact)=>{
    setContacts([...contacts,{id: uuid(),...contact}]);
    console.log(contacts);
 };


        useEffect(()=>{
        const contactItems=JSON.parse(localStorage.getItem("contacts"));
     if(contactItems)
        setContacts(contactItems);
},[]);

 useEffect(()=>{
    localStorage.setItem("contacts",JSON.stringify(contacts))
 },[contacts]);

  return (
<div> 
        <Header/>
        {/* passing function as a parameter to pass prop from child to parent */}
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  )
}

export default App