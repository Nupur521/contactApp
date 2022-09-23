import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
let contactValue;

//To set the initial value of contacts
 if(localStorage.getItem('contacts'))
    contactValue=JSON.parse(localStorage.getItem("contacts"));
 else
   contactValue=[];

function App() {

 const [contacts,setContacts]=useState(contactValue);
 const addContactHandler=(contact)=>{
    console.log(contact)
    setContacts([...contacts,contact]);
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
        <ContactList contacts={contacts}/>
    </div>
  )
}

export default App