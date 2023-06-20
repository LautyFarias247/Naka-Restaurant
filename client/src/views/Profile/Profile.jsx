
import style from "./Profile.module.css";
import { useState } from "react";
import AddressForm from "../../components/AddressForm/AddressForm";
import AddressContainer from "../../components/AddressesContainer/AddressContainer";
import UserSidebar from "../../layout/UserSidebar/UserSidebar";

const Profile = () => {
	
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <main className={style.container}>
      <div className={style.headline}>
        <h2 className={style.title}>Panel de usuario - Mi perfil</h2>
      </div>
      <div className={style.dataContainer}>
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
