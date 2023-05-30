import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()
    const orders = useSelector(state => state.orders)
    const userLogged = useSelector(state => state.user)
    if(isLoading) return <h1>cargandoo</h1>

    return (
        userLogged.email ?
        <div>
            {console.log(user)}
            <h2>{user.name}</h2>
            <img src={user.picture} alt="" />
            <p>{user.email}</p>
            {console.log(user)}
            {/* <p>Mis direcciones:</p> */}
            {/* <p>Mis pedidos: {JSON.stringify(orders)}</p> */}
        </div>
        : <div> debes estar logeado</div>
    )
}
 
export default Profile;