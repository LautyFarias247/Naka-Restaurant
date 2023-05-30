import Luis from "../images/Luis.jpg";
import Feli from "../images/Feli.jpg";
import lauty from "../images/lauty.jpg";
import Nico from "../images/Nico.jpg";
import juli from "../images/juli.jpg"
import Login from "../images/Login.png";
import style from "./Nosotros.module.css";
import React from "react";
import Footer from "../Footer/Footer";
import { SignalWifiStatusbarConnectedNoInternet4Sharp } from "@mui/icons-material";

const Nosotros = () => {
  return (
    <div class="container col-12">
      <div class="row justify-content-start ">
        <div class="col-5">
          <h1 class="text-center">Sobre Nosotros</h1>
          <p class="text-start" className={style.nosotros}>
            {/* El equipo de trabajo de un restaurante en línea también es
            fundamental para el éxito del negocio. Este equipo se enfoca en
            brindar una experiencia de comida en línea excepcional para los
            clientes. Suele estar compuesto por diferentes roles, como el
            desarrollador web, el equipo de diseño, los redactores de contenido,
            el personal de atención al cliente y el equipo de marketing. El
            desarrollador web es responsable de crear y mantener el sitio web
            del restaurante, asegurándose de que sea fácil de usar y de que
            funcione correctamente. El equipo de diseño trabaja en el aspecto
            visual del sitio web y se asegura de que sea atractivo y fácil de
            navegar. Los redactores de contenido crean descripciones de los
            platos, blogs y artículos informativos para el sitio web. El
            personal de atención al cliente responde a las preguntas y
            preocupaciones de los clientes a través de los medios de
            comunicación en línea, como el chat en vivo o el correo electrónico.
            Finalmente, el equipo de marketing se encarga de promocionar el
            restaurante en línea y aumentar su alcance. En conjunto, el equipo
            de trabajo de un restaurante en línea debe trabajar de manera
            coordinada para garantizar que los clientes tengan una experiencia
            gastronómica en línea excepcional. */}
            Somos estudiantes de Henry donde nos enfocamos en brindar una
            experiencia de comida en línea excepcional para los clientes, nos
            encargamos de mantener el sitio web, asegurandonos de que funcione
            correctamente y que el cliente tenga la mejor experiencia de
            usuario, ademas hacemos lo posible para que el usuario tenga mucha
            mas comodidad de poder elegir y pagar su comida favorita
          </p>
        </div>
        <div class="col-7 ">
          <h2 className={style.equipo}>Equipo</h2>
          <div class="row justify-content-start">
            <div class="col-6">
              <img src={Luis} alt="" style={{width : "10rem", height:"10rem"}} class="rounded-circle" />
              <p>
                LUIS <br />
                <a
                  class="text-decoration-none text-reset"
                  href="https://www.linkedin.com/in/luis-valcke-906316259/"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            <div class="col-6">
              <img src={Feli} style={{width : "10rem", height:"10rem"}} alt="" class="rounded-circle" />
              <p>
                FELIPE <br />
                <a
                  class="text-decoration-none text-reset"
                  href="https://www.linkedin.com/in/felipe-gerardo-bermudez-saldivar-008a6b226/"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            <div class="col-6">
              <img src={juli} style={{width : "10rem", height:"10rem"}} alt=""  class="rounded-circle" />
              <p>
                JULIAN
                <br />
                <a
                  class="text-decoration-none text-reset"
                  href="https://www.linkedin.com/in/juli%C3%A1n-kisner-706b55173"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            <div class="col-6">
              <img src={lauty} alt="" width="150px" class="rounded-circle" style={{width:"11rem", height:"11rem"}} />
              <p>
                LAUTARO <br />
                <a class="text-decoration-none text-reset" href="https://www.linkedin.com/in/lautaro-far%C3%ADas-5b3314262/">
                  LinkedIn
                </a>
              </p>
            </div>

            <div class="col-12">
              <img src={Nico} style={{width : "10rem", height:"10rem"}} alt=""  class="rounded-circle" />
              <p>
                NICOLAS <br />
                <a
                  class="text-decoration-none text-reset"
                  href="https://www.linkedin.com/in/nicolas-gonz%C3%A1lez-rodr%C3%ADguez-318880253/"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nosotros;
