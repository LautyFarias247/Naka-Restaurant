import React, { useState } from 'react'
import style from './RegisterForm.module.css'

import { useDispatch } from 'react-redux'
import { registerUser, setGoogleUser } from '../../redux/actions/actions'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';



const RegisterForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("")
	const [errors, setErrors] = useState(null)

	
	const handleSubmit = async (e) => {
		e.preventDefault();
		if(password !== repeatPassword) {
			return setErrors("Las contraseñas no coinciden")
		}
		try {
			await dispatch(registerUser({username, email, password, repeatPassword}))
			Swal.fire({
				title: "Cuenta creada exitosamente",
				icon: 'success',
				showCancelButton: false,
				confirmButtonText: 'Iniciar sesión',
				iconColor: "#BF8D39"
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/account/login")
				}
			});
		} catch (error) {
			return setErrors(error.message)
		}
		
	}
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
      <h2 className={style.titulo}>Registrarse</h2>
      <form className={style.form}  onSubmit={handleSubmit}>
			<input
          type="text"
          className={style.input}
          value={username}
          placeholder="nombre de usuario"
          onChange={(e) => setUsername(e.target.value)}
					minlength="4"
					required={true}
        />
        <input
          type="email"
          className={style.input}
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
					required={true}
        />
        <input
          type="password"
          className={style.input}
          value={password}
          placeholder="contraseña"
          onChange={(e) => setPassword(e.target.value)}
					minlength="8"
					required={true}
				/>
				<input
          type="password"
          className={style.input}
          value={repeatPassword}
          placeholder="repite la contraseña"
          onChange={(e) => setRepeatPassword(e.target.value)}
					minlength="8"
					required={true}
        />
				{errors && <p className={style.error}>{errors}</p>}
				<button type="submit" className={style.boton}>Crear cuenta</button>
      </form>
        <h3 className={style.h3}>O</h3>
				<GoogleLogin
        onSuccess={onSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </section>
	)
}

export default RegisterForm