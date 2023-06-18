import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./layout/Navbar/Navbar";
import Home from "./views/Home/Home";
import CreateDishesForm from "./components/CreateDishesForm/CreateDishesForm";
import Menu from "./views/Menu/Menu";
import Profile from "./views/Profile/Profile";
import { ShoppingCart } from "./views/ShoppingCart/ShoppingCart";
import LoginPage from "./views/LoginPage/LoginPage";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllDishes,
  getCategories,
  getUserOrders,
  setStoragedUser,
  saveCart,
  getUserAddresses,
} from "./redux/actions/actions";
import Footer from "./layout/Footer/Footer";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Swal from "sweetalert2";
import Checkout from "./views/Checkout/Checkout";
import OrdersPage from "./views/OrdersPage/OrdersPage";
import Dashboard from "./dashboardViews/Dashboard";
import OrdersTable from "./dashboardViews/OrdersTable/OrdersTable";
import UsersTable from "./dashboardViews/UsersTable/UsersTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ProductsTable from "./dashboardViews/ProductsTable/ProductsTable";
function App() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllDishes());
    dispatch(getCategories());
    const localStorageUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(localStorageUser);
    if (localStorageUser) {
      dispatch(setStoragedUser(parsedUser));
    }

    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get("collection_status");

    switch (queryParam) {
      case "approved":
        Swal.fire({
          title: "Pago exitoso",
          text: "Puedes seguir los detalles del pedido desde tu cuenta",
          icon: "success",
          confirmButtonText: "Ver pedidos",
          iconColor: "#BF8D39",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/myaccount/orders");
          }
        });
    }
  }, []);

  useEffect(() => {
    dispatch(getUserOrders(user._id));
    dispatch(getUserAddresses(user._id));
  }, [user]);

  useEffect(() => {
    dispatch(saveCart({ cart, userId: user._id }));
  }, [cart]);

  const location = useLocation();
  return (
    <div className="App">
      {!location.pathname.includes("dashboard") && <Nav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="account/login" element={<LoginPage />} />
        <Route path="account/register" element={<RegisterPage />} />
				{/* User dashboard */}
        <Route path="myaccount" element={<Profile />} />
				<Route path="myaccount/orders" element={<OrdersPage/>}/>

        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/orders" element={<OrdersTable />} />
        <Route path="/dashboard/users" element={<UsersTable />} />
        <Route path="/dashboard/products" element={<ProductsTable />} />
        {/* <Route path="/dashboard/foods" element={<FoodTable />} /> */}
        <Route path="/dashboard/foods/create" element={<CreateDishesForm />} />
      </Routes>
      {!location.pathname.includes("dashboard") && <Footer />}
    </div>
  );
}

export default App;
