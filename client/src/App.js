import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import CreateDishesForm from "./components/CreateDishesForm/CreateDishesForm";
import Menu from "./components/Menu/Menu";
// /* Importación del componente LoginPage desde el archivo LoginPage.js. */
import User from "./components/User/User";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/LoginComponents/Profile/Profile";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import LoginPage from "./components/LoginComponents/LoginPage/LoginPage";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import Dashboard from "./components/Dashboard/Dashboard";
import UserTable from "./components/Dashboard/UserTable/UserTable";
import FoodTable from "./components/Dashboard/FoodTable/FoodTable";
import FoodUpdate from "./components/Dashboard/FoodUpdate/FoodUpdate";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import {
  createAuth0User,
  getAllDishes,
  getAuth0User,
  setStoragedUser,
  removeAllProducts,
  saveCarrito,
  compraExitosa,
  getMyOrders,
} from "./redux/actions/actions";
import Nosotros from "./components/Nosotros/Nosotros";
import queryString from "query-string";
import ProtectRouter from "./components/ProtectRouter/ProtectRouter";
import VentasTable from "./components/Dashboard/VentasTotales/VentasTable/VentasTable";

function App() {
  const { user, isAuthenticated } = useAuth0();
  const userLogged = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const queries = queryString.parse(location.search);
    const status = queries.status;
    const { _id, email, sub, name } = userLogged;
    dispatch(getMyOrders(_id));
    if (userLogged.email && status === "approved") {
      const vacio = [];
      dispatch(compraExitosa({ id: _id, sub, email, cart, name }));
      dispatch(removeAllProducts());
      dispatch(saveCarrito({ vacio, id: sub || _id }));
    }
  }, [userLogged]);

  useEffect(() => {
    dispatch(getAllDishes());
    const localUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(localUser);
    if (localUser) {
      console.log(parsedUser);
      dispatch(setStoragedUser(parsedUser));
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && user) {
      dispatch(createAuth0User(user));
      setTimeout(() => {
        dispatch(getAuth0User(user));
      }, 1000);
    }
  }, [isAuthenticated, user, dispatch]);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSwitchChange = (checked) => {
    setIsDarkMode(checked);
  };

  const location = useLocation();
  return (
    <div
      className="App"
      style={{
        backgroundColor: isDarkMode ? "#000001" : "#f9f6f4",
        color: isDarkMode ? "#fffbf4" : "#000001",
        
      }}
    >
      {location.pathname !== "/dashboard" &&
        location.pathname !== "/dashboard/users" &&
        location.pathname !== "/dashboard/foods" &&
        location.pathname !== "/dashboard/sales" &&
        location.pathname !== "/dashboard/foods/edit/:id"  &&
        (
          <Switch
            onChange={handleSwitchChange}
            checked={isDarkMode}
            onColor="#007bff"
            offColor="#bbb"
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            onHandleColor="#fff"
            offHandleColor="#fff"
            onHandleStyle={{ boxShadow: "none" }}
            offHandleStyle={{ boxShadow: "none" }}
            activeBoxShadow="0px 0px 1px 2px rgba(0, 0, 0, 0.2)"
            aria-label="Switch to toggle between light and dark mode"
            onLabel="Dark"
            offLabel="Light"
          />
        )}

      {/* <button onClick={handleModeChange}>
        {isDarkMode ? 'Desactivar modo oscuro' : 'Activar modo oscuro'}
      </button> */}
      {!location.pathname.includes("dashboard") && <Nav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="account/login" element={<LoginPage />} />
        <Route path="account" element={<Profile />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/user" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/users" element={<UserTable />} />
        <Route path="/dashboard/foods" element={<FoodTable />} />
        <Route path="/dashboard/sales" element={<VentasTable />} />
        <Route path="/dashboard/foods/edit/:id" element={<FoodUpdate />} />
        <Route path="/dashboard/foods/create" element={<CreateDishesForm />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      
    </div>
  );
}

export default App;
