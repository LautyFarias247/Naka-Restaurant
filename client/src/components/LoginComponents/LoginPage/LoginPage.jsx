import style from "./LoginPage.module.css";
import LoginButton from "../LoginButton/LoginButton";
import { Carrousel } from "../../Carrousel/Carrousel";
import { Link, useNavigate, } from "react-router-dom";


// import facebook from "../../images/facebook.png";
// import google from "../../images/google.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postLogin } from "../../../redux/actions/actions";
import Swal from "sweetalert2";
import Footer from "../../../layout/Footer/Footer";

const LoginPage = () => {
  const images = [
    {
      id: "1",
      title: "CocaCola",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543975/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/pngegg_lznvj9.png",
    },
    {
      id: "2",
      title: "Fanta",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543975/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Fanta-Orange-Soda-Pack-PNG_ovx2et.png",
    },
    {
      id: "3",
      title: "Tarta Pavlova",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583726/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/entre-postres-mas-famosos-del-mundo-esta-la-tarta-pavlova_jmmdy4.jpg",
    },
    {
      id: "4",
      title: "Bife de chorizo",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543974/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/BIFE-CHORIZO_lborzg.png",
    },
    {
      id: "5",
      title: "Chinchulines",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543975/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Chinchulines_ksgcl0.png",
    },
    {
      id: "6",
      title: "Matambre",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543975/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Matambre_o8iuys.png",
    },
    {
      id: "7",
      title: "Hot Dog con aderezo",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679544650/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Hot_Dogs_igzyjk.png",
    },
    {
      id: "8",
      title: "MatHot Dog con lluvia de papasambre",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583198/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Hot_Dogs_Pasambre_rpqjpu.png",
    },
    {
      id: "9",
      title: "Croquetas de Espinaca",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583508/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Croquetas-espinaca_ii9ksa.jpg",
    },
    {
      id: "10",
      title: "Matambre",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583630/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Tiramisu_qljmnm.jpg",
    },
  ];

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
		<main>
			hola
		</main>
  );
};

export default LoginPage;
