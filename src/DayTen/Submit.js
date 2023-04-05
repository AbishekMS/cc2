import React from "react";
//import Register from "./Register";

function Submit({name,email,passport,phone,tDate,rDate,destination,reason}){
    return(
        <div>
        <h2>Name:{name} </h2>
        <h2>Email: {email} </h2>
        <h2>Passport: {passport}</h2>
        <h2>Phone number: {phone}</h2>
        <h2>Travel Date: {tDate}</h2>
        <h2>Return Date: {rDate} </h2>
        <h2>Destination: {destination} </h2>
        <h2>Reason: {reason}</h2>
        </div>
    )
}
export default Submit;