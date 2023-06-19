import React, { useState } from "react";
import style from "./LoginForm.module.css";
import { GoogleLogin } from "@react-oauth/google";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser, setGoogleUser } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password }));
      navigate("/menu");
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const onSuccess = async (credentialResponse) => {
    const { name, given_name, email, sub, picture } = await jwtDecode(
      credentialResponse.credential
    );
		console.log(credentialResponse);
		console.log(sub);
    const user = {
			username: name,
      given_name,
      email,
      password: sub,
      picture,
    };
		console.log(user);
    const status = await dispatch(setGoogleUser(user));
		if(status === 200){
			navigate("/menu")
		}
	};

  return (
    <section className={style.container}>
      <h2 className={style.titulo}>Iniciar sesión</h2>
      <form className={style.form} onSubmit={handleLogin}>
        <input
          type="text"
          className={style.input}
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={style.input}
          value={password}
          placeholder="contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={style.boton}>
          Ingresar
        </button>
      </form>
      <span className={style.error}>{error}</span>
      <h3 className={style.h3}>O</h3>

      <GoogleLogin
        onSuccess={onSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </section>
  );
};

export default LoginForm;
