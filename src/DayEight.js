
import React, {useState, useEffect} from 'react'

export default function Day8() {
  const [message, setMessage] = useState("Hello dear one, learning React...?")
  useEffect(() => {
    console.log('use effect hook called');
    setTimeout(() =>{
      setMessage("Great... This is time to learn about HOOKS")
    }, 2000)
  })
  return (
    <div>
    <h1>DAY8</h1>
      <h1 style={{textAlign:"center",color:"blueviolet",paddingTop:70}}>{message}</h1>
    </div>
  );
}