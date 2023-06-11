import style from "./LoginPage.module.css";
import LoginButton from "../../components/LoginComponents/LoginButton/LoginButton";
import { Link, useNavigate, } from "react-router-dom";


// import facebook from "../../images/facebook.png";
// import google from "../../images/google.png";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";
import Slider from "../../components/Slider/Slider";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {

  return (
		<main className={style.main}>
			<Slider/>
			<LoginForm/>
		</main>
  );
};

export default LoginPage;
