import Carousel from 'react-bootstrap/Carousel';
import style from "./Carrousel_Bootstrap.module.css"

function Carrousel_Bootstrap() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/maxresdefault_osxdpw.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={style.plato_description}>Estofado</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/depositphotos_35961537-stock-photo-afternoon-tea_jwyt62.jpg"

          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className={style.plato_description}>Galletas de requesón</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/comida-rapida-fastfood-saludable_xuznic.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className={style.plato_description}>Pizza de Brocoli</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/comida-rapida-casera_xpbm55.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={style.plato_description}>Hamburguesa de Carne con Queso</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583630/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Tiramisu_qljmnm.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={style.plato_description}>Pastel de galleta y chocolate</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543974/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/BIFE-CHORIZO_lborzg.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={style.plato_description}>Bife de chorizo</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dpbrs6n4j/image/upload/v1680626850/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Comida_ccdt4z.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={style.plato_description}>Sushi</h3>
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776906/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/ratatouille-1_b2pns3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={style.plato_description}>Ratatouille o Confit Byaldi</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583508/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Croquetas-espinaca_ii9ksa.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={style.plato_description}>Croquetas de espinaca</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679776907/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Comida-espa%C3%B1ola_rlscmm.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={style.plato_description}>Tortilla de Patatas</h3>
         
        </Carousel.Caption>
      </Carousel.Item>

      

      
    </Carousel>
  );
}

export default Carrousel_Bootstrap;
