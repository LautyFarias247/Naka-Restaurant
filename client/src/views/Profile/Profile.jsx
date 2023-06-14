import { Link } from "react-router-dom";
import style from "./Profile.module.css";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import AddressCard from "../../components/AddressCard/AddressCard";
import { useState } from "react";
import { Card, Pagination } from "react-bootstrap";
import AddressForm from "../../components/AddressForm/AddressForm";
import AddressContainer from "../../components/AddressContainer/AddressContainer";
const Profile = () => {
	
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <main className={style.container}>
      <div className={style.headline}>
        <h2 className={style.title}>Panel de usuario</h2>
      </div>
      <div className={style.DataContainer}>
        <div className={style.sidebar}>
          <ul className={style.list}>
            <Link>
              <li className={style.listItem}>Mi perfil</li>
            </Link>
            <Link>
              <li className={style.listItem}>Pedidos</li>
            </Link>
            <Link>
              <li className={style.listItem}>Actualizar información</li>
            </Link>
            <Link>
              <li className={style.listItem}>Actualizar contraseña</li>
            </Link>
            <Link>
              <li className={style.listItem}>Cerrar sesión</li>
            </Link>
          </ul>
        </div>

        {!displayForm ? (
          <AddressContainer
            displayForm={displayForm}
            setDisplayForm={setDisplayForm}
          />
        ) : (
          <AddressForm
            displayForm={displayForm}
            setDisplayForm={setDisplayForm}
          />
        )}
      </div>
    </main>
  );
};

export default Profile;
