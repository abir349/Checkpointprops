import React from 'react'

function Bio({person}) {
  return (
     <div style={{ display:"flex", justifyContent:"space-around"}}>
        {person.map((el) =>(
        <div  className='card1'>
          <p>Bio:{el.bio}</p>
          <p>Age:{el.age}</p></div>))}
      </div>
  )
}

export default Bio