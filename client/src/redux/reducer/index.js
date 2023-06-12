import {
  GET_ALLDISHES,
  GET_CATEGORIES,
  SET_FLTEDDISHES,
  SET_ORDERINGS,
  CREATE_DISH,
  CREATE_PAYMENT,
  GET_DISHES_BY_NAME,
  SET_CATEGORY,
  ADD_PRODUCT,
  GET_DISH_BY_ID,
  REMOVE_PRODUCT,
  REMOVE_ALL_PRODUCTS,
  ADD_TOTAL_PRICE,
  REDUCE_TOTAL_PRICE,
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
  auxAllDishes: [],
  allDishes: [],
  detail: {},
  categories: [],
  actualCategory: "",
  cart: [],
  orders: [],
  totalPrice: 0,
  user: {},
  adminData: {},
};

const reducer = (state = initialState, { type, payload }) => {
  const allDishes = state.auxAllDishes;
  const totalPrice = state.totalPrice;

  switch (type) {
    case GET_ALLDISHES:
      return {
        ...state,
        allDishes: payload,
        auxAllDishes: payload,
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
			const firstItem = payload.product
			firstItem.quantity = 1
			return {...state, cart: [...state.cart, firstItem]}
    
		case ADD_PRODUCT:
			const item = payload.product
			const index = state.cart.findIndex(product => product._id === item._id)
			const cart = state.cart
			cart[index].quantity += 1
			return {...state, cart}
		
		case REMOVE_PRODUCT:
			const removedItem = payload.product
			const removedIndex = state.cart.findIndex(product => product._id === removedItem._id)
		
			if(state.cart[removedIndex].quantity > 1) {
				console.log(state.cart[removedIndex].quantity);

				const newCart = state.cart
				newCart[removedIndex].quantity -= 1
				return {...state, cart: newCart}
			}
			else{
				console.log("queda1solo");
				const newCart = state.cart.filter(item => item._id !== removedItem._id)
				return {...state, cart: newCart}
			}


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
    case SET_CATEGORY:
      return { ...state, actualCategory: payload };

    case SET_FLTEDDISHES:
      const fileteredDishes =
        payload === "all"
          ? allDishes
          : allDishes.filter((dish) => dish.category === payload);
      return { ...state, allDishes: fileteredDishes };

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
      if (payload === "Ascendent rating") {
        orderedDishes = state.allDishes.sort((a, b) => {
          if (a.rating > b.rating) {
            return 1;
          }
          if (b.rating > a.rating) {
            return -1;
          }
          return 0;
        });
      }
      if (payload === "Descendent rating") {
        orderedDishes = state.allDishes.sort((a, b) => {
          if (a.rating < b.rating) {
            return 1;
          }
          if (b.rating < a.rating) {
            return -1;
          }
          return 0;
        });
      }
      return { ...state, allDishes: orderedDishes };


    case REMOVE_PRODUCT:
      const removeProductIndex = state.cart.findIndex(
        (item) => item._id === payload._id
      );

      if (removeProductIndex >= 0) {
        if (state.cart[removeProductIndex].quantity >= 2) {
          const newCart = state.cart;
          newCart[removeProductIndex].quantity -= 1;

          !state.user.name &&
            localStorage.setItem("Cart", JSON.stringify(newCart));

          return { ...state, cart: newCart };
        } else {
          const newCart = state.cart.filter((item) => item._id !== payload._id);

          !state.user.name &&
            localStorage.setItem("Cart", JSON.stringify(newCart));

          return { ...state, cart: newCart };
        }
      } else {
        return { ...state };
      }

    case REMOVE_ALL_PRODUCTS:
      !state.user.name && localStorage.setItem("Cart", JSON.stringify([]));
      return { ...state, cart: [], totalPrice: 0 };

    case REMOVE_MANY_PRODUCTS:
      const reduce_price = payload.price * payload.quantity;
      const newCart = state.cart.filter((item) => item._id !== payload._id);
      !state.user.name && localStorage.setItem("Cart", JSON.stringify(newCart));
      return { ...state, cart: newCart, totalPrice: totalPrice - reduce_price };

    case ADD_TOTAL_PRICE:
      const addedPrice = payload.price;
      return { ...state, totalPrice: totalPrice + addedPrice };

    case REDUCE_TOTAL_PRICE:
      const reducePrice = payload.price;
      if (state.totalPrice > 0) {
        return { ...state, totalPrice: totalPrice - reducePrice };
      } else {
        return { ...state };
      }

    case GET_ALL_USERS:
      return { ...state, adminData: { ...state.adminData, users: payload } };

    default:
      return { ...state };
  }
};

export default reducer;
