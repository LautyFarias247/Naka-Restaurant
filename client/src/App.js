import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./layout/Navbar/Navbar";
import Home from "./views/Home/Home";
import Detail from "./components/Detail/Detail";
import CreateDishesForm from "./components/CreateDishesForm/CreateDishesForm";
import Menu from "./views/Menu/Menu";
import User from "./components/User/User";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/LoginComponents/Profile/Profile";
import { ShoppingCart } from "./views/ShoppingCart/ShoppingCart";
import LoginPage from "./views/LoginPage/LoginPage";
import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import UserTable from "./components/Dashboard/UserTable/UserTable";
import FoodTable from "./components/Dashboard/FoodTable/FoodTable";
import FoodUpdate from "./components/Dashboard/FoodUpdate/FoodUpdate";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDishes,
  removeAllProducts,
  compraExitosa,
  getMyOrders,
	setStoragedUser,
	saveCart,
} from "./redux/actions/actions";
import queryString from "query-string";
import VentasTable from "./components/Dashboard/VentasTotales/VentasTable/VentasTable";
import Footer from "./layout/Footer/Footer";
import RegisterPage from "./views/RegisterPage/RegisterPage";

function App() {

  const cart = useSelector((state) => state.cart);
	const user = useSelector((state)=> state.user)
  const [modalCarrito, setModalCarrito] = useState(false)
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(getAllDishes());
		const localStorageUser = localStorage.getItem("user");
		const parsedUser = JSON.parse(localStorageUser);
		if (localStorageUser) {
			dispatch(setStoragedUser(parsedUser))
		}
	}, []);

	useEffect(()=>{
		console.log(cart);
		dispatch(saveCart({cart, userId: user._id}))
	},[cart])

  // useEffect(() => {
  //   const queries = queryString.parse(location.search);
  //   const status = queries.status;
  //   const { _id, email, sub, name } = userLogged;
  //   dispatch(getMyOrders(_id));
  //   if (userLogged.email && status === "approved") {
  //     const vacio = [];
  //     dispatch(compraExitosa({ id: _id, sub, email, cart, name }));
  //     dispatch(removeAllProducts());
  //   }
  // }, [user]);

	
  const location = useLocation();
  return (
    <div className="App">
			
      {location.pathname !== "/dashboard" &&
        location.pathname !== "/dashboard/users" &&
        location.pathname !== "/dashboard/foods" &&
        location.pathname !== "/dashboard/sales" &&
        location.pathname !== "/dashboard/foods/edit/:id"}

      {!location.pathname.includes("dashboard") && <Nav/>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="account/login" element={<LoginPage />}/>
        <Route path="account/register" element={<RegisterPage />}/>
        <Route path="account" element={<Profile />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/user" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/users" element={<UserTable />} />
        <Route path="/dashboard/foods" element={<FoodTable />} />
        <Route path="/dashboard/sales" element={<VentasTable />} />
        <Route path="/dashboard/foods/edit/:id" element={<FoodUpdate />} />
        <Route path="/dashboard/foods/create" element={<CreateDishesForm />} />
      </Routes>
      {!location.pathname.includes("dashboard") && <Footer />}
    </div>
  );
}

export default App;
