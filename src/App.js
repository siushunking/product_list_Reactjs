import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/cart-list/CardList';
import SearchBox from './components/search-box/SearchBox';

const App = () => {
 

  const [monster, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')
  try{
    useEffect(() => {
      const getMonsters = async ()=>{ //axios cannot fetch
      fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((user)=>{
        setMonsters(user)
      })
     }
     getMonsters()
   }, [])
  }catch(error){
    console.log(error);
  }

  const filteredMonsters = monster.filter((monsters)=>{
    return monsters.name.toLocaleLowerCase().includes(searchField)
  })
  const serachMonster = (e) => {
    e.preventDefault()
    setSearchField(e.target.value.toLocaleLowerCase())
  }


    return (
      <div>
      <SearchBox onChangeHandler={serachMonster}></SearchBox>
      <CardList data={filteredMonsters}/>
      </div>
    ); 

  
}

export default App;
