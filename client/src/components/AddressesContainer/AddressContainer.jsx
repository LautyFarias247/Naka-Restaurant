import { useState } from "react";
import style from "./AddressContainer.module.css";
import { useSelector } from "react-redux";
import AddressCard from "../AddressCard/AddressCard";
import { FaUser } from "react-icons/fa";

const AddressContainer = ({ displayForm, setDisplayForm }) => {
  const addresses = useSelector((state) => state.addresses);
  const user = useSelector((state) => state.user);

  const handleDisplayForm = () => {
    setDisplayForm(!displayForm);
  };
  return (
    <div className={style.userContainer}>
      <div className={style.userInfo}>
        {user.picture ? (
          <img src={user.picture} alt="" className={style.userPicture}/>
        ) : (
          <FaUser className={style.userIcon} />
        )}
        <div className={style.nameContainer}>
          <span>{user.username}</span>
          <span>
            {" "}
            email: {user.email} | miembro desde: {user?.createdAt?.slice(0, 10)}
          </span>
        </div>
      </div>
      <div className={style.addressContainer}>
        {addresses?.map((a) => {
          return (
            <AddressCard
              key={a._id}
							_id={a._id}
              street={a.street}
              number={a.number}
              apartment={a.apartment}
              zipCode={a.zipCode}
              neighborhood={a.neighborhood}
              locality={a.locality}
              state={a.state}
            />
          );
        })}
        <button className={style.newAddressButton} onClick={handleDisplayForm}>
          + Agregar dirección
        </button>
      </div>
    </div>
  );
};

export default AddressContainer;
