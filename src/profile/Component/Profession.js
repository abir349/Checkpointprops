import React from 'react'

function Profession({person , handlealert}) {
  return (
     <div style={{  display:"flex", justifyContent:"space-around"}}>
        {person.map((el) =>(
        <div  className='card1'>
          <p>Profession:{el.Profession}</p>
          <p>Number:{el.Number}</p>
          </div>))}
          <div>
         <button onClick={() =>{handlealert("hello")}} className='button1' style={{backgroundColor:"beige	" }}> Contact me now</button>
           </div>

      </div>
  )
}

export default Profession