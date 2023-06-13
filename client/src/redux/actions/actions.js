import axios from "axios";
//Platos
export const GET_ALLDISHES = "GET_ALLDISHES";
export const GET_DISH_BY_ID = "GET_DISH_BY_ID";
export const GET_DISHES_BY_NAME = "GET_DISHES_BY_NAME";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const SET_PAGINATION = "SET_PAGINATION";
//Filtros
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER"
export const REMOVE_CATEGORY_FILTER = "REMOVE_CATEGORY_FILTER"
export const SET_DISPLAYED_DISHES = "SET_DISPLAYED_DISHES"

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

export const addProduct = (product) => {
	return async function (dispatch) {
		dispatch({
			type: ADD_PRODUCT,
			payload: {product}
		})
	}
}

export const removeProduct = (product) => {
	return async function (dispatch) {
		dispatch({
			type: REMOVE_PRODUCT,
			payload: {product}
		})
	}
}

export function removeManyProducts(product) {
	return async (dispatch) => {
		return dispatch({ type: REMOVE_MANY_PRODUCTS, payload: {product} });
	};
}

export function removeAllProducts(product) {
	return async (dispatch) => {
		return dispatch({ type: REMOVE_ALL_PRODUCTS, payload: product });
	};
}

export const createPayment = ({cart, userId}) => {
	return async ()=>{
		const response = await axios.post("http://localhost:3001/payment/create", {cart, userId})
		window.location.href = response.data.body.init_point;
	}
	
};

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


export function getCategories() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/categories`);
      const categories = response.data.map((category) => category);
      return dispatch({ type: GET_CATEGORIES, payload: categories });
    } catch (error) {
      throw Error(error);
    }
  };
}

export const setCategoryFilter = (name) => {
	return async (dispatch) => {
		dispatch({
			type: SET_CATEGORY_FILTER,
			payload: {name}
		})
	}
}
export const removeCategoryFilter = (name) => {
	return async (dispatch) => {
		dispatch({
			type: REMOVE_CATEGORY_FILTER,
			payload: {name}
		})
	}
}

export const setDisplayedDishes = () => {
	return async(dispatch) => {
		dispatch({
			type: SET_DISPLAYED_DISHES,
			payload: null
		})
	}
}

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
