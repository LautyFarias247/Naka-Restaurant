import React, { useState } from "react";
import style from "./AddressForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createAddress } from "../../redux/actions/actions";

const AddressForm = ({ displayForm, setDisplayForm }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [apartment, setApartment] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [locality, setLocality] = useState("");
  const [state, setState] = useState("");

  const handleDisplayForm = () => {
    setDisplayForm(!displayForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createAddress(user._id, {
        street,
        number,
        apartment,
        neighborhood,
        zipCode,
        locality,
        state,
      })
    );
  };

  return (
    <div className={style.mainContainer}>
      <h2 className="">Nueva dirección</h2>
      <form onSubmit={handleSubmit} className={style.container}>
        <div className={style.inputContainer}>
          <input
            value={street}
            placeholder="Calle *"
            onChange={(e) => setStreet(e.target.value)}
            type="text"
            className={style.inputForm}
          />
          <input
            value={number}
            placeholder="Número *"
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            className={style.inputForm}
          />
        </div>
        <div className={style.inputContainer}>
          <input
            value={apartment}
            placeholder="Departamento"
            onChange={(e) => setApartment(e.target.value)}
            type="text"
            className={style.inputForm}
          />
          <input
            value={neighborhood}
            placeholder="Barrio *"
            onChange={(e) => setNeighborhood(e.target.value)}
            type="text"
            className={style.inputForm}
          />
        </div>
        <div className={style.inputContainer}>
          <input
            value={zipCode}
            placeholder="Código postal *"
            onChange={(e) => setZipCode(e.target.value)}
            type="text"
            className={style.inputForm}
          />
          <input
            value={locality}
            placeholder="Localidad / ciudad *"
            onChange={(e) => setLocality(e.target.value)}
            type="text"
            className={style.inputForm}
          />
        </div>
        <div className={style.inputContainer2}>
          <input
            value={state}
            placeholder="Provincia *"
            onChange={(e) => setState(e.target.value)}
            type="text"
            className={style.inputForm}
          />
        </div>
        <div>
          <button
            className={style.newAddressButton}
            onClick={handleDisplayForm}
          >
            Atrás
          </button>
          <button className={style.newAddressButton} type="submit">
            Agregar dirección
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
