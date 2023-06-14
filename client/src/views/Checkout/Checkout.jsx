import React from "react";
import style from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import AddressCard from "../../components/AddressCard/AddressCard";
import { useState } from "react";
import { createPayment } from "../../redux/actions/actions";
import Swal from "sweetalert2";
const Checkout = () => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses);
	const [blockScreen, setBlockScreen] = useState(false)

  return (
    <main className={style.container}>
			{blockScreen && <div className={style.screenBlocker}></div>}
      {addresses.length ? (
        <>
          <h3 className={style.title}>¿A dónde llevamos tu pedido?</h3>
          <div className={style.addressContainer}>
            {addresses.map((a) => {
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
                  checkout={true}
									setBlockScreen = {setBlockScreen}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>no hay direcc</>
      )}
    </main>
  );
};

export default Checkout;
