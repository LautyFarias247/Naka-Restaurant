import axios from "axios";
//Platos
export const GET_ALLDISHES = "GET_ALLDISHES";
export const GET_DISH_BY_ID = "GET_DISH_BY_ID";
export const GET_DISHES_BY_NAME = "GET_DISHES_BY_NAME";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const SET_PAGINATION = "SET_PAGINATION";
export const SET_FLTEDDISHES = "SET_FLTEDDISHES";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_ORDERINGS = "SET_ORDERINGS";
export const CREATE_DISH = "CREATE_DISH";
export const CREATE_PAYMENT = "CREATE_PAYMENT";

// Login / logout / register .42
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const SET_GOOGLE_USER = "SET_GOOGLE_USER";
export const SET_STORAGED_USER = "SET_STORAGED_USER";
export const REMOVE_SESSION = "REMOVE_SESSION";
// cart .
export const ADD_FIRST_PRODUCT = "ADD_FIRST_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const REMOVE_ALL_PRODUCTS = "REMOVE_ALL_PRODUCTS";
export const UPLOAD_PRODUCTS = "UPLOAD_PRODUCTS";

export const ADD_TOTAL_PRICE = "ADD_TOTAL_PRICE";
export const REDUCE_TOTAL_PRICE = "REDUCE_TOTAL_PRICE";
export const REMOVE_MANY_PRODUCTS = "REMOVE_MANY_PRODUCTS";
//DASHBOARD
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ALL_USERS = "GET_ALL_USERS";

//login
export const USER_LOGIN_DATA = "USER_LOGIN_DATA";
export const COMPRA_EXITOSA = "COMPRA_EXITOSA";
export const GET_MY_ORDERS = "GET_MY_ORDERS";

// export const setGoogleUser = async () => {
// 	const res = await axios.get("http://localhost:3001/users")
// }

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
      payload: { user: {}, cart: [] },
    });
  };
};

export const compraExitosa = (data) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("http://localhost:3001/notificar", data);
    } catch (error) {}
  };
};

export const setStoragedUser = (user) => {
  return async function (dispatch) {
		try {
			const response = await axios.get(`http://localhost:3001/users/${user._id}`)
			console.log(response);

			dispatch({
				type: SET_STORAGED_USER,
				payload: { user: response.data, cart: response.data.cart },
			});

		} catch (error) {
			console.log(error);	
		}
  };
};

export const saveCart = ({userId, cart}) => {
	return async function () {
		const response = await axios.put(`http://localhost:3001/users/cart/${userId}`, {cart})
		console.log(response);
	}
}

export const addFirstProduct = ({product}) => {
	return async function (dispatch) {
			dispatch({
				type: ADD_FIRST_PRODUCT,
				payload: {product}
			})
		} 	
}

export const addProduct = (item) => {
	return async function (dispatch) {
		dispatch({
			type: ADD_PRODUCT,
			payload: {product: item}
		})
	}
}

export function getAllDishes() {
  return async (dispatch) => {
    try {
      const response = await axios(`http://localhost:3001/foods`);
      return dispatch({
        type: GET_ALLDISHES,
        payload: response.data,
      });
    } catch (error) {
      throw Error(error);
    }
  };
}

export const getDishesById = (id) => {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/foods/${id}`);
    return dispatch({ type: GET_DISH_BY_ID, payload: response.data });
  };
};

export const getDishesByName = (payload) => {
  return async function (dispatch) {
    const foodsByName = await axios.get(
      `http://localhost:3001/foods?name=${payload}`
    );
    return dispatch({ type: GET_DISHES_BY_NAME, payload: foodsByName.data });
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

export const createPayment = (payload) => {
  try {
    return async function () {
      await axios
        .post("http://localhost:3001/payment", payload)
        // await axios.post('http://localhost:3001/payment', payload)
        .then(
          (res) => (window.location.href = res.data.response.body.init_point)
        );
    };
  } catch (error) {
    console.log(error.message);
  }
};

export function getCategories() {
  return async (dispatch) => {
    try {
      const categories = await axios.get(`http://localhost:3001/categories`);
      const parsedCategories = categories.data.map((category) => category.name);
      return dispatch({ type: GET_CATEGORIES, payload: parsedCategories });
    } catch (error) {
      throw Error(error);
    }
  };
}

export function setCategory(category) {
  return async (dispatch) => {
    return dispatch({ type: SET_CATEGORY, payload: category });
  };
}

export function setFltedDishes(category) {
  return async (dispatch) => {
    try {
      return dispatch({
        type: SET_FLTEDDISHES,
        payload: category,
      });
    } catch (error) {
      throw Error(error);
    }
  };
}

export function setOrderings(order) {
  return async (dispatch) => {
    return dispatch({ type: SET_ORDERINGS, payload: order });
  };
}


export function removeProduct(product) {
  return async (dispatch) => {
    return dispatch({ type: REMOVE_PRODUCT, payload: product });
  };
}

export function removeManyProducts(product) {
  return async (dispatch) => {
    return dispatch({ type: REMOVE_MANY_PRODUCTS, payload: product });
  };
}

export function removeAllProducts(product) {
  return async (dispatch) => {
    return dispatch({ type: REMOVE_ALL_PRODUCTS, payload: product });
  };
}

export function addTotalPrice(product) {
  return async (dispatch) => {
    return dispatch({ type: ADD_TOTAL_PRICE, payload: product });
  };
}

export function reduceTotalPrice(product) {
  return async (dispatch) => {
    return dispatch({ type: REDUCE_TOTAL_PRICE, payload: product });
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

export function getMyOrders(id) {
  return async (dispatch) => {
    try {
      const myOrders = await axios.get(`http://localhost:3001/order/${id}`);
      return dispatch({ type: GET_MY_ORDERS, payload: myOrders.data });
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
