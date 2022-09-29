import {useState, useEffect} from 'react';
import  './App.css'
import SearchBox from './components/search-box/search-box';
import CardList from './components/card-list/card-list';

const App = () => {
  const[monsters, setMonsters] = useState([]);
  const[searchField, setSearchField] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((users) => setMonsters(users))
  }, [])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  })

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Relodex</h1>
      <SearchBox 
      className="monster-search-box"
      placeholder="Search Monsters"
      onChange={onSearchChange}/>
      <CardList 
      monsters={filteredMonster} />
    </div>
  )
}

export default App