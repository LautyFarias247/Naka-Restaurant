import React, { useEffect, useRef } from "react";
import slice1 from "./images/slice-1.jpg";
import slice2 from "./images/slice-2.jpg";
import slice3 from "./images/slice-3.jpg";
import slice4 from "./images/slice-4.jpg";
import style from "./Slider.module.css";
import { ReactComponent as FlechaIzquierda } from "./images/iconmonstr-angel-left-thin.svg";
import { ReactComponent as FlechaDerecha } from "./images/iconmonstr-angel-right-thin.svg";

const Slider = () => {
  const slider = useRef(null);
	
	
  const nextImage = () => {
		if (slider?.current?.children?.length > 0) {
			const firstElement = slider.current.children[0];
      slider.current.style.transition = `1500ms ease-out all`;
      const sliceSize = slider.current.children[0].offsetWidth;
      slider.current.style.transform = `translateX(-${sliceSize}px)`;
			
			const transicion = () => {
				slider.current.style.transition = "none";
				slider.current.style.transform = "translateX(0)";
		
				slider.current.appendChild(firstElement);
				slider.current.removeEventListener("transitionend", transicion)
			};
      
			
      slider.current.addEventListener("transitionend", transicion);
    }
  };
  const prevImage = () => {
    if (slider.current.children.length > 0) {
      const index = slider.current.children.length;
      const lastElement = slider.current.children[index - 1];
      slider.current.insertBefore(lastElement, slider.current.firstChild)

			slider.current.style.transition = "none"
			
			const sliceSize = slider.current.children[0].offsetWidth;
			slider.current.style.transform = `translateX(-${sliceSize}px)`

			setTimeout(()=>{
				slider.current.style.transition = "1500ms ease-out all"
				slider.current.style.transform = `translateX(0)`
			}, 30)
    }
  };
	// useEffect(()=>{
	// 	setInterval(()=>{
	// 		nextImage()
	// 	}, 9000)
	// },[])
	
  return (
    // contenedor main
    <section className={style.container}>
      {/* subcontenedor */}
      <div className={style.subcontainer}>
        {/* slider */}
        <div className={style.slider} ref={slider}>
          {/* slice 1 */}
          <div className={style.slice}>
            <img src={slice1} alt="" />
          </div>

          {/* slice 2 */}
          <div className={style.slice}>
            <img src={slice2} alt="" />
          </div>

          {/* slice 3 */}
          <div className={style.slice}>
            <img src={slice3} alt="" />
          </div>

          {/* slice 4 */}
          <div className={style.slice}>
            <img src={slice4} alt="" />
          </div>
        </div>

        {/* controles */}
        <div className={style.controles}>
          <button
            onClick={prevImage}
            className={style.botones}
            style={{ left: 0 }}
          >
            <FlechaIzquierda
              fill="grey"
              filter="drop-shadow(-1px 0px 0px #b38d6e)"
            />
          </button>
          <button
            onClick={nextImage}
            className={style.botones}
            style={{ right: 0 }}
          >
            <FlechaDerecha
              fill="grey"
              filter="drop-shadow(1px 0px 0px #b38d6e)"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
