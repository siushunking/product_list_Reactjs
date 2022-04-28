import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/cart-list/CardList';
import SearchBox from './components/search-box/SearchBox';

const perPage = 4
const App = () => {
 
  const [currentPage, setCurrentPage] = useState(1)
  const [monster, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')

    useEffect(() => {
      const getMonsters = async ()=>{ //axios cannot fetch
        // 
        try{
      fetch(`https://jsonplaceholder.typicode.com/users`).then((res)=>res.json()).then((user)=>{
        setMonsters(user)
      })
      }catch(error){
        console.log(error);
      }
    }
     getMonsters()
   }, [])

  const filteredMonsters = monster.filter((monsters)=>{
    return monsters.name.toLocaleLowerCase().includes(searchField)
  })
  const serachMonster = (e) => {
    e.preventDefault()
    setSearchField(e.target.value.toLocaleLowerCase())
  }

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage
  const monstersByPage = filteredMonsters.slice(startIndex, endIndex)
  const handlePrev = () => {
    if(currentPage <= 1) {
      alert('Fisrt page')
    } else {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNext = () => {
    if(monstersByPage.length < perPage) {
      alert('Last page')
    } else {
      setCurrentPage(currentPage + 1)
    }
  }
  return (
    <div>
    <SearchBox onChangeHandler={serachMonster}></SearchBox>
    <button onClick={handlePrev}>prev Page</button>
    <button onClick={handleNext}>Next Page</button>
    <h3>目前頁數: {currentPage}</h3>
    <CardList data={monstersByPage}/>
    </div>
  ); 

  
}

export default App;
