import React, { useState } from "react";
import style from "./LoginForm.module.css";


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [error, setError] = useState(null)
	const clientID = "930486100118-lfea2s1su033rmu1bbn63k5kndthooot.apps.googleusercontent.com"
	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const handleLogin = async (e) => {
		e.preventDefault()
		try {
			await dispatch(loginUser({email, password}))
			navigate("/menu")
		} catch (error) {
			setError(error.message)
			setTimeout(()=>{
				setError(null)
			},3000)
		}
	}

  const onSuccess = (response) => {
		// dispatch(setGoogleUser())
	}
  const onFailure = (response) => {

	}


	return (
    <section className={style.container}>
      <h2 className={style.titulo}>Iniciar sesión</h2>
      <form className={style.form} onSubmit={handleLogin} >
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
				<button type="submit" className={style.boton}>Ingresar</button>
      </form>
			<span className={style.error}>{error}</span>
        <h3 className={style.h3}>O</h3>

    
    </section>
  );
};

export default LoginForm;
