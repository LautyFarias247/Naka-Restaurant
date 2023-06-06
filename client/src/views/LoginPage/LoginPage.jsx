import style from "./LoginPage.module.css";
import LoginButton from "../../components/LoginComponents/LoginButton/LoginButton";
import { Link, useNavigate, } from "react-router-dom";


// import facebook from "../../images/facebook.png";
// import google from "../../images/google.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postLogin } from "../../redux/actions/actions";
import Swal from "sweetalert2";
import Slider from "../../components/Slider/Slider";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [input, setinput] = useState({
    email: "",
    password: "",
    connected: false
  })
  const handleChange = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value
    })

  }
  const handleCheck = (e) => {
    if (e.target.checked) {
      setinput({
        ...input,
        connected: !input.connected
      })
    }
    console.log(input)
  }
  const handlSubmit = async (e) => {
    e.preventDefault();
    let resultado = await dispatch(postLogin(input));
    console.log(resultado);
    if (resultado.message === "valid email correct password") navigate("/menu")
    if (resultado === "Invalid email") Swal.fire({
      icon: 'error',
      title: 'El bodegon de Tony',
      text: resultado + ':🚨  try again 🤙🏻',
      footer: '<a href="">Forgot my email??</a>'
    })
    if (resultado === "Invalid password") Swal.fire({
      icon: 'error',
      title: 'El bodegon de Tony',
      text: resultado + ':🚨  try again 🤙🏻',
      footer: '<a href="">Forgot my password??</a>'
    })
    setinput({
      email: "",
      password: "",
    })
  }


  return (
		<main className={style.main}>
			<Slider/>
			<LoginForm/>
		</main>
  );
};

export default LoginPage;
