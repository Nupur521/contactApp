 import React from "react";

import user from '../assets/images/user.png';
import {useParams} from "react-router-dom"


function ContactDetails() {


const {id}=useParams();
let name,email;
const contact=JSON.parse(localStorage.getItem("contacts"))
contact.map((item)=>{
  if(item.id===id)
  {
     name=item.name;
     email=item.email
  }
})

  return (
<div>{name}
{email}</div>
  )
}

export default ContactDetails
