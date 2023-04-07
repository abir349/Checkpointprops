import React from 'react'

function FullName({person}) {
  
   return (
      <div style={{ display:"flex", justifyContent:"space-around"}}>
        {person.map((el) =>(
          <div >
          <img className='Imgg1' src={el.img}/>
        <div  className='card1'>
          <p>FullName:{el.FullName}</p>
          <p>Email:{el.Email}</p>
          </div>
          </div>))}
      </div>
    );
}

export default FullName
