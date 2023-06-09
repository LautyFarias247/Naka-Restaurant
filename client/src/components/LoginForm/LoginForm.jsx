import React, { useState } from "react";
import style from "./LoginForm.module.css";
import LoginButton from "../LoginComponents/LoginButton/LoginButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className={style.container}>
      <h2 className={style.titulo}>Iniciar sesión</h2>
      <form className={style.form} action="">
        <input
          type="text"
          className={style.input}
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className={style.input}
          value={password}
          placeholder="contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
				<button className={style.boton}>Ingresar</button>
      </form>
        <h3 className={style.h3}>O</h3>
        <LoginButton />
    </section>
  );
};

export default LoginForm;
