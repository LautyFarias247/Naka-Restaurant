import style from "./User.module.css";
import { Carrousel } from "../Carrousel/Carrousel";
import LoginButton from "../LoginComponents/LoginButton/LoginButton";
// import google from "../images/google.png";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { validate } from "./validate";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
//import { Link } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";

const User = () => {
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

  const navigate = useNavigate();

  const [datosUsuario, setDatosUsuario] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [formularioCompleto, setFormularioCompleto] = useState(false);

  const [errors, setErrors] = useState({
    /*name: "",
    phone: "",
    email: "",
    password: "", */
  })

  const handleChange = (event) => {
    setDatosUsuario({
      ...datosUsuario,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...datosUsuario,
        [event.target.name]: event.target.value,
      })
    )
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (Object.keys(errors).length === 0) {
        await axios.post("https://el-bodegon-api-wine.vercel.app/users/create", datosUsuario)
        // await axios.post("http://localhost:3001/users/create", datosUsuario)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario creado correctamente, se ha enviado un correo de verificación ',
          confirmButtonText: 'Aceptar',
          // showConfirmButton: true,
          timer: 5000
        })
        navigate("/account/login")
        // alert("Usuario creado correctamente");
      } else {
        //alert("Falta Información o falta completar campos");
        Swal.fire({
          title: 'Error',
          text: 'No fue posible crear el usuario verifica bien los campos',
          icon: 'error',
          confirmButtonText: 'Cerrar'
        });
      }
    } catch (error) {
      console.error(error);
    }

    setDatosUsuario({
      name: '',
      phone: '',
      email: '',
      password: '',
    });

    // Deshabilitar el botón de enviar después de enviar la solicitud POST
    setFormularioCompleto(false);

    // axios
    //   .post("http://localhost:3001/users/create", datosUsuario)
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));
  };

  const handleClear = () => {
    setDatosUsuario({
      name: "",
      phone: "",
      email: "",
      password: "",
    });
    setFormularioCompleto(false);
  };

  // Verificar si todos los campos están llenos antes de habilitar el botón de enviar
  const camposLlenos = Object.values(datosUsuario).every(val => val !== '');

  return (
    <div className={style.body}>
      <div class="conteiner w-5 p-5 rounded shadow" className={style.container}>
        <div class="row align-items-stretch">
          <div class="col food  d-none d-lg-block col-md-6 col-lg-6 col-xl-6 rounded">
            {/* <img src={food} width="600" alt=""></img> */}
            <Carrousel images={images} className={style.Carrousel} />
          </div>
          <div class="col  p-5 rounded-end">
            <div class="text-end">
              <img src="" width="48" alt=""></img>
            </div>
            <h2 class="fw-bold text-center py-5 ">Crear Cuenta</h2>
            <form onSubmit={handleSubmit} class="mb-25">

              <div class="mb-4">

                <label htmlFor="name" class="form-label">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control"
                  value={datosUsuario.name}
                  onChange={handleChange}
                />
                <p className={style.error}>{errors.name}</p>
              </div>


              <div class="mb-4">


                <label htmlFor="phone" class="form-label">Teléfono:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  class="form-control"
                  value={datosUsuario.phone}
                  onChange={handleChange}
                />
                <p className={style.error}>{errors.phone}</p>

              </div>

              <div class="mb-4">

                <label htmlFor="email" class="form-label">Correo electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  value={datosUsuario.email}
                  onChange={handleChange}
                />
                <p className={style.error}>{errors.email}</p>
                {/* email */}
              </div>

              <div class="mb-4">

                <label htmlFor="password" class="form-label">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  value={datosUsuario.password}
                  onChange={handleChange}
                />
                <p className={style.error}>{errors.password}</p>
                {/* password */}
              </div>

              <div class="mr-4" >

              <button type="submit" class="btn btn-primary" disabled={!camposLlenos || formularioCompleto} className={style.boton_Enviar}>Enviar</button>
              <button type="button" onClick={handleClear} class="btn btn-danger" className={style.boton_Borrar} >
                Borrar
              </button>
              </div>
            </form>
            <br />
            <div class="row text-center mt-10">
              <div class="col-12 mt-30" className={style.google}>
                <span>Iniciar Sesion Con:</span>
                <br />
                <br />
              </div>
              <Link to="/account/login">
                <button type="button" class="btn btn-link">Ir a login</button>
              </Link>
            </div>
            <div class="col-12 mt-10 ">
              <button class="btn btn-outline-danger w-100 my-1">
                <div class="row align-items-center">
                  <br />
                  <div class="col-1 d-none d-md-block">
                    {/* <img src={google} width="32" alt=""></img> */}
                  </div>
                  <div class="col-6 col-md-10 text-center">
                    <LoginButton />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default User;