import * as React from 'react';
import { useDispatch } from 'react-redux';
import { getDishesByName } from '../../redux/actions/actions';
import { useState } from 'react';
import style from "./SearchBar.module.css"

const SearchBar = () => {
    
  const dispatch = useDispatch();
  const [food, setFoods] = useState("")
  
  const handleInputChange = (event) =>{
    event.preventDefault()
    setFoods(event.target.value)

}

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getDishesByName(food))
    
  }

  return (
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Buscar por" onChange={handleInputChange} value={food}/>
          <button class="btn btn-primary btn-sm mb-1 ms-2" type="submit">Buscar</button>
      </form>
  )
}

export default SearchBar