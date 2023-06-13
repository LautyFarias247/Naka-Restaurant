import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./layout/Navbar/Navbar";
import Home from "./views/Home/Home";
import Detail from "./components/Detail/Detail";
import CreateDishesForm from "./components/CreateDishesForm/CreateDishesForm";
import Menu from "./views/Menu/Menu";
import Profile from "./views/Profile/Profile";
import { ShoppingCart } from "./views/ShoppingCart/ShoppingCart";
import LoginPage from "./views/LoginPage/LoginPage";
import { useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import UserTable from "./components/Dashboard/UserTable/UserTable";
import FoodTable from "./components/Dashboard/FoodTable/FoodTable";
import FoodUpdate from "./components/Dashboard/FoodUpdate/FoodUpdate";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDishes,
	setStoragedUser,
	saveCart,
	getCategories,
} from "./redux/actions/actions";
import VentasTable from "./components/Dashboard/VentasTotales/VentasTable/VentasTable";
import Footer from "./layout/Footer/Footer";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Swal from "sweetalert2";

function App() {

  const cart = useSelector((state) => state.cart);
	const user = useSelector((state)=> state.user)
	const dispatch = useDispatch();
	const navigate = useNavigate()
	useEffect(() => {
		dispatch(getAllDishes());
		dispatch(getCategories());

		const localStorageUser = localStorage.getItem("user");
		const parsedUser = JSON.parse(localStorageUser);
		if (localStorageUser) {
			dispatch(setStoragedUser(parsedUser))
		}
		
		const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('collection_status');
    
		switch (queryParam) {
			case "approved":
				 	Swal.fire({
					title: 'Pago exitoso',
					text: 'Puedes seguir los detalles del pedido desde tu cuenta',
					icon: 'success',
					confirmButtonText: 'Ver pedidos',
					iconColor: "#BF8D39",
				}).then((result) => {
					if (result.isConfirmed) {
						navigate('/cart');
					}
				})
		}
	}, []);

	useEffect(()=>{
		dispatch(saveCart({cart, userId: user._id}))
	},[cart])


	
  const location = useLocation();
  return (
    <div className="App">
			
      {!location.pathname.includes("dashboard") && <Nav/>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="account/login" element={<LoginPage />}/>
        <Route path="account/register" element={<RegisterPage />}/>
        <Route path="myaccount" element={<Profile />} />
        <Route path="/cart" element={<ShoppingCart />} />
  
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
