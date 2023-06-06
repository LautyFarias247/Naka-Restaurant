import React from "react";
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
			<p className={style.p}>Horario de servicio: lunes a sábado 12:30 a 02:00</p>
			<p className={style.p}>Domingo cerrado</p>
			<p className={style.p}>Ambiente libre de humo</p>
			<p className={style.p}>No recomendado para niños menores de 12 años</p>
			<hr className={style.hr}/>
		</footer>
  );
};

export default Footer;
