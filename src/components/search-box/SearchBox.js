import React from 'react'

function SearchBox(props) {
  return (
    <div> 
    <input onChange={props.onChangeHandler} className='serach-box' type='search' placeholder='search onsters'></input> 
    </div>
  )
}

export default SearchBox