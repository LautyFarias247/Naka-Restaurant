import {
  GET_ALL_DISHES,
  GET_CATEGORIES,
  SET_ORDERINGS,
  GET_DISHES_BY_NAME,
  SET_CATEGORY_FILTER,
  REMOVE_CATEGORY_FILTER,
	SET_DISPLAYED_DISHES,
  ADD_PRODUCT,
  GET_DISH_BY_ID,
  REMOVE_PRODUCT,
  REMOVE_ALL_PRODUCTS,
  REMOVE_MANY_PRODUCTS,
  GET_ALL_USERS,
  LOGIN_USER,
  GET_MY_ORDERS,
  GET_ALL_ORDERS,
  SET_STORAGED_USER,
  REMOVE_SESSION,
  ADD_FIRST_PRODUCT,
} from "../actions/actions";

const initialState = {
  allDishes: [],
  displayedDishes: [],
	loadingDishes: true,
  detail: {},
  categories: [],
  actualCategories: [],
  cart: [],
  orders: [],
  user: {},
  adminData: {},
};

const reducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case GET_ALL_DISHES:
      return {
        ...state,
        allDishes: payload,
        auxAllDishes: payload,
				loadingDishes: false
      };

    case GET_MY_ORDERS:
      return { ...state, orders: payload };

    case GET_ALL_ORDERS:
      return { ...state, adminData: { ...state.adminData, orders: payload } };

    case LOGIN_USER:
      localStorage.setItem("user", JSON.stringify(payload.user));
      return {
        ...state,
        user: payload.user,
        cart: payload.cart,
      };

    case REMOVE_SESSION:
      return { ...state, user: payload.user, cart: payload.cart };

    case SET_STORAGED_USER:
      return {
        ...state,
        user: payload.user,
        cart: payload.cart,
      };
    //CARRITO
    case ADD_FIRST_PRODUCT:
      const firstItem = payload.product;
      firstItem.quantity = 1;
      return { ...state, cart: [...state.cart, firstItem] };

    case ADD_PRODUCT:
      const item = payload.product;
      const index = state.cart.findIndex((product) => product._id === item._id);
      const cart = state.cart;
      cart[index].quantity += 1;
      return { ...state, cart };

    case REMOVE_PRODUCT:
      const removedItem = payload.product;
      const removedIndex = state.cart.findIndex(
        (product) => product._id === removedItem._id
      );

      if (state.cart[removedIndex].quantity > 1) {
        const newCart = state.cart;
        newCart[removedIndex].quantity -= 1;
        return { ...state, cart: newCart };
      } else {
        const newCart = state.cart.filter(
          (item) => item._id !== removedItem._id
        );
        return { ...state, cart: newCart };
      }

    case REMOVE_MANY_PRODUCTS:
      const removedItems = payload.product;
      const remainingItems = state.cart.filter(
        (item) => item._id !== removedItems._id
      );
      return { ...state, cart: remainingItems };

    case GET_DISHES_BY_NAME:
      return {
        ...state,
        allDishes: payload,
      };
    case GET_DISH_BY_ID:
      return { ...state, detail: payload };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    
		//filters
		case SET_CATEGORY_FILTER:
      return {
        ...state,
        actualCategories: [...state.actualCategories, payload.name],
      };

    case REMOVE_CATEGORY_FILTER:
      const newCategories = state.actualCategories.filter(
        (category) => category !== payload.name
      );
      return { ...state, actualCategories: newCategories };
		
		case SET_DISPLAYED_DISHES:
			const allDishes = state.allDishes

			const categoryFilters = state.actualCategories
			console.log({allDishes});
			console.log({categoryFilters});
			
			const displayedDishes = allDishes.filter((dish) =>
				categoryFilters.includes(dish.category)
			
			)

			console.log({displayedDishes});
			return {...state, displayedDishes: displayedDishes}

    case SET_ORDERINGS:
      let orderedDishes;
      if (payload === "any") {
        orderedDishes = state.allDishes.sort((a, b) => {
          if (a._id > b._id) {
            return 1;
          }
          if (b._id > a._id) {
            return -1;
          }
          return 0;
        });
      }
      if (payload === "Ascendent price") {
        orderedDishes = state.allDishes.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (b.price > a.price) {
            return -1;
          }
          return 0;
        });
      }
      if (payload === "Descendent price") {
        orderedDishes = state.allDishes.sort((a, b) => {
          if (a.price < b.price) {
            return 1;
          }
          if (b.price < a.price) {
            return -1;
          }
          return 0;
        });
      }
      return { ...state, allDishes: orderedDishes };

    case REMOVE_ALL_PRODUCTS:
      return { ...state, cart: []};

    case REMOVE_MANY_PRODUCTS:
  
      const newCart = state.cart.filter((item) => item._id !== payload._id);
      return { ...state, cart: newCart};

    case GET_ALL_USERS:
      return { ...state, adminData: { ...state.adminData, users: payload } };

    default:
      return { ...state };
  }
};

export default reducer;
