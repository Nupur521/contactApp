import React, { useState } from "react";
import "../styles/addcontact.css";
import {useNavigate} from 'react-router-dom';




function AddContact(props) {
  const [details, changeDetails] = useState({
    name: "",
    email: "",
  });

  //addcontact function
  function addcontact(e) {
    e.preventDefault(); //because we are using a button and we don't want our page to get refreshed
    if (details.name === "" || details.email === "") {
      alert("the fields are empty");
      return;
    } else {
      props.addContactHandler(details);
                      changeDetails(previousState => {
    return { ...previousState, name: "" }})
                   changeDetails(previousState => {
    return { ...previousState, email: "" }})
    }
  }

  return (
    <div className="addContact">
      <div className="addContact__heading"><h1>Add Contact</h1></div>
      <div className="addContact__form">
     <form  className="contactForm" onSubmit={addcontact}>
          <div>
            <div>
              <label className="labelForName">Name</label>
            </div>
            <div className="name">
              <input
                type="text"
                name=""
                value={details.name}
                onChange={(e) =>
                  changeDetails((previousState) => {
                    return { ...previousState, name: e.target.value };
                  })
                }
                id=""
              />
            </div>
          </div>
          <div>
            <div>
              <label className="labelForEmail">Email</label>
            </div>
            <div className="email">
              <input type="text" name="" id="" value={details.email}
              onChange={(e)=> changeDetails(previousState=>{
                    return{...previousState,email:e.target.value}
                })} />
            </div>
          </div>
   <button className="formButton" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddContact;


