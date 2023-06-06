import React from 'react';
import style from './LoginButton.module.css'
import { useAuth0 } from '@auth0/auth0-react';
import {ReactComponent as Google} from '../../../images/7123025_logo_google_g_icon.svg'
import {ReactComponent as Facebook} from '../../../images/iconmonstr-facebook-6.svg'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
		<div className={style.container}>
			<button className={style.botonGoogle} onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}>
				Ingresar con Google
				<Google width={"48px"} height={"48px"}/>
			</button>
			{/* <button className={style.botonGoogle} onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}>
				Ingresar con facebook
				<Facebook width={"48px"} height={"48px"} color='blue'/>

			</button> */}
		</div>
  );
};

export default LoginButton;