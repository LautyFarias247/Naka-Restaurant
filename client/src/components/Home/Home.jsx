import style from "./Home.module.css";

import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import El_Bodegon_de_Tony from "../images/El_Bodegon_de_Tony.png"
import facebook from "../images/facebook.png";
import google from "../images/google.png";
import Git from "../images/Git.png"
import Instagram from "../images/Instagram.png"
import Footer from "../Footer/Footer";
import Carrousel_Bootstrap from "../Carrousel_Bootstrap/Carrousel_Bootstrap";



const Home = () => {
  const images = [
    {
      id: "1",
      title: "CocaCola",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/maxresdefault_osxdpw.jpg",
    },
    {
      id: "2",
      title: "Fanta",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/depositphotos_35961537-stock-photo-afternoon-tea_jwyt62.jpg",
    },
    {
      id: "3",
      title: "Tarta Pavlova",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/comida-rapida-fastfood-saludable_xuznic.jpg",
    },
    {
      id: "4",
      title: "Bife de chorizo",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/comida-rapida-casera_xpbm55.jpg",
    },
    {
      id: "5",
      title: "Chinchulines",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Comida-francesa_q2m7gt.jpg",
    },
    {
      id: "6",
      title: "Matambre",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/ratatouille-1_b2pns3.jpg",
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
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776907/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Comida-espa%C3%B1ola_rlscmm.jpg",
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
  const { user } = useAuth0()
  
  const dispatch = useDispatch()
  
  return (
    <div className={style.home1}>
      
      <div className={style.main}>
        <h1>
          Tu restaurante favorito ahora esta en linea
        </h1>

        <p className={style.descripcion}>
          ¿Buscas la comodidad de disfrutar de la mejor comida sin salir de
          casa? ¡No busques más! Nuestro servicio de restaurante online ofrece
          una amplia variedad de opciones deliciosas, desde platos principales
          hasta postres tentadores, todo preparado con los ingredientes más
          frescos y de alta calidad.
        </p>
        </div>
        <div className={style.mainDos}>
        {/* Además, puedes ordenar en línea fácilmente y programar la entrega a la hora que más te convenga. ¡Permítenos llevar la experiencia gastronómica a tu puerta y haz que cada comida sea una deliciosa experiencia en tu hogar!" */}
        <img className={style.logo}
          src={El_Bodegon_de_Tony}
          alt="logo"
        />
        </div>
        <div className={style.mainTres}>
        <Link to={"/menu"}>
          <button className={style.categorias}>Ir a Categorias</button>
        </Link>
      </div>
        <div className={style.reseña1}>
          <h4>Gran catalogo</h4>
          <p >
            Encuentra gran variedades con mas de 12 categorias de comidas
            , postres y mas que tenemos para ti
          </p>
        </div>
        <div className={style.reseña2}>
          <h4>Gran calidad</h4>
          <p>
            Para nosotros, la calidad es primordial. Por ello, utilizamos
            únicamente ingredientes cuidadosamente seleccionados para ofrecerte
            la mejor experiencia culinaria
          </p>
        </div>
        <div className={style.reseña3}>
          <h4>Los platos mas deliciosos</h4>
          <p>
            Si eres un amante de la buena comida, no puedes perderte la
            oportunidad de probar nuestros increíbles sabores, que te
            sorprenderán desde el primer bocado
          </p>
        </div>
        <div className={style.reseña4}>
          <h4>
            Disfruta de nuestra deliciosa comida en casa con nuestro servicio de
            entrega a domicilio
          </h4>
          <p>
            Sabemos que a veces es difícil encontrar tiempo para salir a comer,
            por eso ofrecemos entrega a domicilio para que puedas disfrutar de
            nuestra comida desde la comodidad de tu hogar
          </p>
        </div>

        <div className={style.carrousel}>
          <div class="col-sm-6 mx-auto text-center ">
          <Carrousel_Bootstrap/>
          </div> 
        </div>

      <div className={style.section}>
        <p className={style.platos}>
          ¿Quieres Conocer Nuestros Menú? Haz click aquí
        </p>

        <Link to={'/menu'}>
        <button className={style.categorias}>Ir a Categorias</button>
        </Link>

        <img src="https://parrilladasargentinas.com/wp-content/uploads/2018/05/Rezept-Tipp-vom-GRILLER-T-Bone-Steak-1024x576-ec63ff241cb89cff.jpg" className={style.carne} alt="Carne" />
      </div>
      <div className={style.footer}>
      <Footer/>
      </div>
    </div>
  );

}

export default Home;
