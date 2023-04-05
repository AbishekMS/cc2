
import React ,{useState} from "react";
//import Submit from "./Submit";

import './Register.css'
import Submit from "./Submit";
function Register(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [passport,setPassport]=useState('');
    const [tDate,setTdate]=useState('');
    const [rDate,setRdate]=useState('');
    const [destination,setDestination]=useState('');
    const [reason,setReason]=useState('');

  
const handler=()=>{
   alert(name+" "+email+" "+phone);
    
}
   
  

    return(
        <div className="registration">
        <form >
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)}></input>
        <label>Email</label>
        <input  type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)}></input>
        <label>Phone No.</label>
        <input type="number" name="number" value={phone} onChange={e=>setPhone(e.target.value)}></input>
        <label>Passport</label>
        <input type="text" name="passport" value={passport} onChange={e=>setPassport(e.target.value)}></input>
        <label>Travel Date</label>
        <input type="date" name="tDate" value={tDate} onChange={e=>setTdate(e.target.value)}></input>
        <label>Return Date</label>
        <input type="date" name="" value={rDate} onChange={e=>setRdate(e.target.value)}></input>
        <label>Destination</label>
        <input type="text" name="" value={destination} onChange={e=>setDestination(e.target.value)}></input>
        <label>Reson for travel</label>
        <textarea
          rows="6"
          placeholder="Enter message..."
          name="message"
          required value={reason} onChange={e=>setReason(e.target.value)}
         ></textarea>
        <button type="submit"  style={{fontSize:20}} onClick={handler} > submit form</button>
      </form>
      </div>
    );
}
export default Register;