import React from "react";
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
			<p className={style.texto}>Horario de servicio: lunes a sábado 12:30 a 02:00</p>
			<p className={style.texto}>Domingo cerrado</p>
			<p className={style.texto}>Ambiente libre de humo</p>
			<p className={style.texto}>No recomendado para niños menores de 12 años</p>
		</footer>
  );
};

export default Footer;
