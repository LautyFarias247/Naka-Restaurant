import React, { useEffect, useState } from "react";
import style from "./CategoryButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryFilter,
  removeCategoryFilter,
  setDisplayedDishes,
} from "../../redux/actions/actions";

const CategoryButton = ({ name }) => {
  const [pressed, setPressed] = useState(false);
  const dispatch = useDispatch();
	const loadingDishes = useSelector((state) => state.loadingDishes);

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem(`button${name}`));
    if (state) {
      setPressed(true);
    }
  }, []);

  useEffect(() => {
		if(!loadingDishes){
			if (pressed) {
				dispatch(setCategoryFilter(name));
				dispatch(setDisplayedDishes());
			} else {
				dispatch(removeCategoryFilter(name));
				dispatch(setDisplayedDishes());
			}
		}
  }, [loadingDishes,pressed, name, dispatch]);

  const handleClick = () => {
    const newState = !pressed;
    setPressed(newState);
    localStorage.setItem(`button${name}`, JSON.stringify(newState));
  };
  return (
    <button
      className={pressed ? style.pressedCategoryButton : style.categoryButton}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
