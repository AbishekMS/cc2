import { useState } from "react";
import React  from "react";
import './Contact.css'
import Submit from "./Submit";



function Contact() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [text, setText]=useState("");
  const handler=()=>{
  return( <Submit
   name={name}
   email={email}
   reason={text}
   />)
  }
 
  return (
    <div>
    <div className="contact">
      
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" >
          <label>Full Name</label>
          <input name="name" value={name} onChange={e=>setName(e.target.value)}  placeholder="Enter full name..." type="text" />
          <label>Email</label>
          <input name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email..." type="email" />
          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={text} 
            onChange={e=>setText(e.target.value)}></textarea>
          
          <button type="submit" className="main" onClick={handler}> Send Message</button>
        </form>
      </div>
       
    </div>
   
    </div>
  );
}

export default Contact;
