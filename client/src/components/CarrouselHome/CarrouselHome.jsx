import React from 'react'
import { useState, useEffect } from 'react'
import { FaArrowCircleLeft } from "react-icons/fa"
import {FaArrowAltCircleLeft} from "react-icons"
import style from "./CarrouselHome.module.css"

export const CarrouselHome = ({ images }) => {
  const [img, setImg] = useState(0)

  let myInterval;

  const next = () => {
    clearInterval(myInterval)
    if (img < images.length - 1) {
      setImg(img + 1)
    } else {
      setImg(0)
    }
  }

  const back = () => {
    clearInterval(myInterval)
    if (img > 0) {
      setImg(img - 1)
    } else {
      setImg(images.length - 1)
    }
  }

  const autoNext = () => {
    if (img < images.length - 1) {
      setImg(img + 1)
    } else {
      setImg(0)
    }
  }

  useEffect(() => {
    myInterval = setTimeout(autoNext, 2000)
  }, [img]);
  return (
    <div className={style.CarrouselHome}>
      {/* <FaArrowCircleLeft className={style.iconLeft} onClick={back} /> */}
      <div>
        <img src={images[img].image} alt="imagen" className={style.Carrousel_IMG} />
      </div>
      {/* <FaArrowCircleLeft className={style.iconRight} onClick={next} /> */}
      {/* {images.map((image)=>(
            <img src={image.image} alt="Image" />
        ))} */}

    </div>
  )
}

export default CarrouselHome