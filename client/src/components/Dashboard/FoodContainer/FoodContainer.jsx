import FoodItem from "../FoodItem/FoodItem";


const FoodContainer = ({foods}) => {
    return (
        <tbody>
            {foods?.map(food =>{
                return <FoodItem
                    id={food._id}
                    name={food.name}
                    price={food.price}
                    description={food.description}
                    category={food.category}
                    stock={food.stock}
                    isActive={food.is_Active} 
            
                />
            })}
        </tbody>
    );
}
 
export default FoodContainer;