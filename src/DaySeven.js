import user from './data.json';
import React from 'react';
const App7 = () =>{
return(
  
  <div>
  <h1>DAY 7</h1>
      {user.data.map((data) => {
        return <div key={data.id}>
        <span style={{display:"flex"}}>
         <h3>{data.title} :  </h3>
         
         <h3> {data.author}</h3>
         </span>
        </div>
      })}
    
  </div>
  
)
}
export default App7;