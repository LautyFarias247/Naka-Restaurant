import React from 'react'
import style from './LoginForm.module.css'
import LoginButton from '../LoginComponents/LoginButton/LoginButton'

const LoginForm = () => {
	return (
		<section className={style.container}>
			<h2 className={style.titulo}>Iniciar sesión</h2>
			<form className={style.form} action="">

			
				<input type="text" className={style.input} placeholder='email'/>
				<input type="text" className={style.input} placeholder='contraseña'/>

				<h3 className={style.h3}>O</h3>
				<LoginButton/>
			</form>
		</section>
	)
}

export default LoginForm