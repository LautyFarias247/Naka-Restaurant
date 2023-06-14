import {
  //login
  LOGIN_USER,
  REMOVE_SESSION,
  //fetch
  GET_ALL_DISHES,
  GET_CATEGORIES,
  GET_USER_ORDERS,
  //filtros
  SET_CATEGORY_FILTER,
  REMOVE_CATEGORY_FILTER,
  SET_DISPLAYED_DISHES,
  //carrito
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_MANY_PRODUCTS,
  SET_ORDERINGS,
  GET_ALL_USERS,
  GET_ALL_ORDERS,
  SET_STORAGED_USER,
  ADD_FIRST_PRODUCT,
  GET_USER_ADDRESSES,
} from "../actions/actions";

const initialState = {
  allDishes: [],
  displayedDishes: [],
  loadingDishes: true,
  categories: [],
  actualCategories: [],
  user: {},
  cart: [],
  orders: [],
  addresses: [],
  adminData: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //login
    case LOGIN_USER:
      localStorage.setItem("user", JSON.stringify(payload.user));
      return {
        ...state,
        user: payload.user,
        cart: payload.cart,
      };
    case REMOVE_SESSION:
      return { ...state, user: {}, cart: [] };
    case SET_STORAGED_USER:
      return {
        ...state,
        user: payload.user,
        cart: payload.cart,
      };
    //fetch
    case GET_ALL_DISHES:
      return {
        ...state,
        allDishes: payload,
        auxAllDishes: payload,
        loadingDishes: false,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case GET_USER_ORDERS:
      return { ...state, orders: payload.orders };
    case GET_USER_ADDRESSES:
      return { ...state, addresses: payload.addresses };
    //filtros
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
      const allDishes = state.allDishes;

      const categoryFilters = state.actualCategories;

      const displayedDishes = allDishes.filter((dish) =>
        categoryFilters.includes(dish.category)
      );

      console.log({ displayedDishes });
      return { ...state, displayedDishes: displayedDishes };
    //carrito
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

    case REMOVE_MANY_PRODUCTS:
      const newCart = state.cart.filter((item) => item._id !== payload._id);
      return { ...state, cart: newCart };

    case GET_ALL_USERS:
      return { ...state, adminData: { ...state.adminData, users: payload } };

    default:
      return { ...state };
  }
};

export default reducer;
