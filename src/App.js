import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import uuid from 'react-uuid'
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import  './styles/app.css';
import ContactDetails from './components/ContactDetails';
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
    const newContactList=contacts.filter(contact=>{
        return contact.id!==id;
     })
     localStorage.setItem("contacts",JSON.stringify(newContactList));
     setContacts(newContactList);
    };

     
 

 const [contacts,setContacts]=useState(contactValue);
 const addContactHandler=(contact)=>{
    setContacts([...contacts,{id: uuid(),...contact}]);
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
<div className='contactManager'>
<Router>
<Header/>
<Routes>
<Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/>
<Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
<Route path="/contact/:id" element=<ContactDetails/>/>
        {/* passing function as a parameter to pass prop from child to parent */}
</Routes>
</Router>
</div>
  )
}

export default App