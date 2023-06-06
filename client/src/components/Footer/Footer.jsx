// import facebook from "../../images/facebook.png";
// import google from "../../images/google.png";
// //import Git from "../images/Git.png";
// import Twitter from "../../images/Twitter.png"
// import Instagram from "../../images/Instagram.png";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div class="container col-12 text-reset">
      <div class="col-12">
        {/* Footer */}
        <footer class="text-center text-lg-start text-muted">
          {/* Section: Social media */}
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div class="me-5 text-reset d-none d-lg-block">
              <span className={style.titulos}>VISITA NUESTRAS REDES SOCIALES:</span>
            </div>
            {/* Left */}

            {/* Right */}
            <div className={style.socialmedia}>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-facebook-f">
                  {/* <img src={facebook} alt="facebook" width="30px" /> */}
                </i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-google">
                  {/* <img src={google} alt="" width="25px" /> */}
                </i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-instagram">
                  {/* <img src={Instagram} alt="facebook" width="27px" /> */}
                </i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="me-4 link-secondary">
                <i class="fab fa-github">
                  {/* <img src={Twitter} alt="facebook" width="27px" />} */}
                </i>
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}

          {/* Section: Links  */}
          <section class="">
            <div class="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div class="row mt-3">
                {/* Grid column */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className={style.titulos}>
                    <i class="fas fa-gem me-3 text-reset"></i>El Bodegón de
                    Tony
                  </h6>
                  <p className={style.descrip_footer} >
                    Nuestro restaurante ofrece una experiencia culinaria única y
                    memorable, disfrute de nuestra amplia selección de platos
                    exquisitos para todos los gustos.
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className={style.titulos}>Categorias</h6>
                  <p className={style.reseñas_foot}>Asados</p>
                  <p className={style.reseñas_foot}>Pizzas</p>
                  <p className={style.reseñas_foot}>Postres</p>
                  <p className={style.reseñas_foot}>Pizzas</p>
                  <p className={style.reseñas_foot}>¡Y MUCHO MAS!</p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
                  {/* Links */}
                  <h6 className={style.titulos} >
                    Enlaces Frecuentes
                  </h6>
                  <p className={style.reseñas_foot}>
                    {/* <a href="#!" class="text-reset"> */}
                    <Link to={"/"} class="text-reset text-decoration-none pt-4 mt-4">
                      Inicio
                    </Link>
                  </p>
                  <p className={style.reseñas_foot}>
                    <Link to={"/nosotros"} class="text-reset text-decoration-none">
                      Sobre Nosotros
                    </Link>
                  </p>
                  <p className={style.reseñas_foot}>
                    <Link to={"/menu"} class="text-reset text-decoration-none">
                      Menú
                    </Link>
                  </p>
                  <p className={style.reseñas_foot}>
                    <Link to={"/account/login"} class="text-reset text-decoration-none">
                      Login
                    </Link>
                  </p>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className={style.titulos}>Contactanos</h6>
                  <p  className={style.reseñas_foot_City}>
                    <i class="fas fa-home me-3 text-secondary"></i> Buenos Aires
                  </p>
                  <p className={style.reseñas_foot}>
                    <i class="fas fa-envelope me-3 text-secondary"></i>
                    elbodegon@gmail.com
                  </p>
                  <p className={style.reseñas_foot}>
                    <i class="fas fa-phone me-3 text-secondary"></i> + 54 914
                    567 88
                  </p>
                  <p className={style.reseñas_foot}>
                    <i class="fas fa-print me-3 text-secondary"></i> + 57 310
                    567 89
                  </p>
                  <p className={style.reseñas_foot}>
                    <i class="fas fa-print me-3 text-secondary"></i> + 51 927
                    567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}

          {/* Copyright */}
          <div class="text-center p-4">
            © 2023 Copyright:
            <a class="text-reset fw-bold" href="#"></a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    </div>
  );
};

export default Footer;
