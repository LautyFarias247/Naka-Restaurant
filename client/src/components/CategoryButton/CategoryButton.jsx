import React, { useState } from 'react'
import style from './CategoryButton.module.css'
import { useDispatch } from 'react-redux'
import { setCategoryFilter, removeCategoryFilter, setDisplayedDishes } from '../../redux/actions/actions'

const CategoryButton = ({name}) => {
	const [pressed, setPressed] = useState(false)
	const dispatch = useDispatch()

	const handleClick = () => {
		if(pressed){
			setPressed(false)
			dispatch(removeCategoryFilter(name))
			dispatch(setDisplayedDishes())
		} else {
			setPressed(true)
			dispatch(setCategoryFilter(name))
			dispatch(setDisplayedDishes())
		}
	}
	return (
		<button className={pressed ? style.pressedCategoryButton : style.categoryButton} onClick={handleClick}>{name}</button>
	)
}

export default CategoryButton