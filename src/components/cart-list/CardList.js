import React from 'react'
import '../../public/Card_list.css'
function CardList(props) {
  

  return (
    <div className="card-list-container">  
      {props.data.map(monsters => {
        return ( 
        <div className="card-wrapper" >
          <div className="card">
            <div>{monsters.name}</div>
          </div>
        </div>
          )
      })}
    </div>
  )
}

export default CardList