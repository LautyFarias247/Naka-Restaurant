import axios from "axios";
// Login / logout / register .30
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const REMOVE_SESSION = "REMOVE_SESSION";
export const SET_GOOGLE_USER = "SET_GOOGLE_USER";
export const SET_STORAGED_USER = "SET_STORAGED_USER";
//Fetch data  .89
export const GET_ALL_DISHES = "GET_ALLDISHES";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_USER_ORDERS = "GET_USER_ORDERS";
//Filtros 130
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
export const REMOVE_CATEGORY_FILTER = "REMOVE_CATEGORY_FILTER";
export const SET_DISPLAYED_DISHES = "SET_DISPLAYED_DISHES";
// Carrito .157
export const ADD_FIRST_PRODUCT = "ADD_FIRST_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const REMOVE_MANY_PRODUCTS = "REMOVE_MANY_PRODUCTS";

export const SET_ORDERINGS = "SET_ORDERINGS";
export const CREATE_DISH = "CREATE_DISH";
export const CREATE_PAYMENT = "CREATE_PAYMENT";
//DASHBOARD
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ALL_USERS = "GET_ALL_USERS";

// Login / logout / register
export const loginUser = (credentials) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/users/login`,
        credentials
      );
      dispatch({
        type: LOGIN_USER,
        payload: { user: response.data, cart: response.data.cart },
      });
    } catch (error) {
      throw new Error(error.response.data);
    }
  };
};
export const registerUser = (userData) => {
  return async function (dispatch) {
    try {
      const res = await axios.post(
        "http://localhost:3001/users/register",
        userData
      );
      return res;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };
};
export const removeSession = () => {
  return async function (dispatch) {
    dispatch({
      type: REMOVE_SESSION,
      payload: null,
    });
  };
};
// export const setGoogleUser = async () => {
// 	const res = await axios.get("http://localhost:3001/users")
// }
export const setStoragedUser = (user) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/users/${user._id}`
      );

      dispatch({
        type: SET_STORAGED_USER,
        payload: { user: response.data, cart: response.data.cart },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//Fetch data
export const getAllDishes = () => {
  return async (dispatch) => {
    try {
      const response = await axios(`http://localhost:3001/foods`);
      return dispatch({
        type: GET_ALL_DISHES,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error);
    }
  };
};
export const getCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/categories`);
      const categories = response.data.map((category) => category);
      return dispatch({ type: GET_CATEGORIES, payload: categories });
    } catch (error) {
      throw Error(error);
    }
  };
};
export const getUserOrders = (userId) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/orders/${userId}`
      );
      return dispatch({
        type: GET_USER_ORDERS,
        payload: { orders: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//filtros
export const setCategoryFilter = (name) => {
  return async (dispatch) => {
    dispatch({
      type: SET_CATEGORY_FILTER,
      payload: { name },
    });
  };
};
export const removeCategoryFilter = (name) => {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_CATEGORY_FILTER,
      payload: { name },
    });
  };
};
export const setDisplayedDishes = () => {
  return async (dispatch) => {
    dispatch({
      type: SET_DISPLAYED_DISHES,
      payload: null,
    });
  };
};
//carrito
export const addFirstProduct = ({ product }) => {
  return async function (dispatch) {
    dispatch({
      type: ADD_FIRST_PRODUCT,
      payload: { product },
    });
  };
};
export const addProduct = (product) => {
  return async function (dispatch) {
    dispatch({
      type: ADD_PRODUCT,
      payload: { product },
    });
  };
};
export const removeProduct = (product) => {
  return async function (dispatch) {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: { product },
    });
  };
};
export function removeManyProducts(product) {
  return async (dispatch) => {
    return dispatch({ type: REMOVE_MANY_PRODUCTS, payload: { product } });
  };
}
export const saveCart = ({ userId, cart }) => {
  return async function () {
    await axios.put(`http://localhost:3001/users/cart/${userId}`, { cart });
  };
};
export const createPayment = ({ cart, userId }) => {
  return async () => {
    const response = await axios.post("http://localhost:3001/payment/create", {
      cart,
      userId,
    });
    window.location.href = response.data.body.init_point;
  };
};

export const updateDish = ({ id, price, stock }) => {
  return async function (dispatch) {
    // await axios.put(`http://localhost:3001/foods/${id}`, {price, stock})
    await axios.put(`http://localhost:3001/foods/${id}`, { price, stock });
  };
};

export const createDish = (payload) => {
  try {
    return async function () {
      await axios.post("http://localhost:3001/foods", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    };
  } catch (error) {}
};

export function setOrderings(order) {
  return async (dispatch) => {
    return dispatch({ type: SET_ORDERINGS, payload: order });
  };
}

export function getAllUsers() {
  return async (dispatch) => {
    try {
      const users = await axios.get(`http://localhost:3001/users`);
      return dispatch({ type: GET_ALL_USERS, payload: users.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllOrders() {
  return async (dispatch) => {
    try {
      const allOrders = await axios.get(`http://localhost:3001/order`);
      return dispatch({ type: GET_ALL_ORDERS, payload: allOrders.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export const orderDelivered = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:3001/order/${id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
};
