import React from 'react'
import '../../public/Card_list.css'
function CardList(props) {
  

  return (
    <div className="card-container">  
      {props.data.map(monsters => {
      return ( 
       <div id={monsters.id} >
       <h2>{monsters.name}</h2>
       </div>
        )
    })}
    </div>
  )
}

export default CardList