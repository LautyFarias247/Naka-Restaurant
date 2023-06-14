import { Link } from "react-router-dom";
import style from "./Profile.module.css";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import AddressCard from "../../components/AddressCard/AddressCard";
import { useState } from "react";
import { Card, Pagination } from "react-bootstrap";
import AddressForm from "../../components/AddressForm/AddressForm";
import AddressContainer from "../../components/AddressContainer/AddressContainer";
import UserSidebar from "../../layout/UserSidebar/UserSidebar";
const Profile = () => {
	
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <main className={style.container}>
      <div className={style.headline}>
        <h2 className={style.title}>Panel de usuario - Mi perfil</h2>
      </div>
      <div className={style.DataContainer}>
        <UserSidebar/>
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
