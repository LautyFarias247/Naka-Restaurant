import { Link } from "react-router-dom";
import style from "./Profile.module.css";
import { useSelector } from "react-redux";
import { FaUser } from 'react-icons/fa';
import AddressCard from "../../components/AddressCard/AddressCard";
const Profile = () => {
	const user = useSelector(state => state.user)

  return (
		<main className={style.container}>
			<div className={style.headline}>
				<h2 className={style.title}>Panel de usuario</h2>
			</div>
			<div className={style.DataContainer}>
				<div className={style.sidebar}>
					<ul className={style.list}>
						<Link><li className={style.listItem}>Mi perfil</li></Link>
						<Link><li className={style.listItem}>Pedidos</li></Link>
						<Link><li className={style.listItem}>Actualizar información</li></Link>
						<Link><li className={style.listItem}>Actualizar contraseña</li></Link>
						<Link><li className={style.listItem}>Cerrar sesión</li></Link>
					</ul>
				</div>
				<div className={style.userContainer}>
					<div className={style.userInfo}>
						{user.picture ? <img src={user.picture } alt="" /> : <FaUser className={style.userIcon}/>}
						<div className={style.nameContainer}>
							<span>{user.username}</span>
							<span>email: {user.email} | miembro desde: {user?.createdAt?.slice(0, 10)}</span>						
						</div>	
					</div>
					<div className={style.addressContainer}>
						{user?.addresses?.map((a) => {
							return <AddressCard/>
						})}
					</div>
				</div>
			</div>
		</main>
	)
};

export default Profile;
