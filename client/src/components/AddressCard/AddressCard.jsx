import React from 'react'
import style from './AddressCard.module.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../../redux/actions/actions';

const AddressCard = ({_id, street, number, apartment, zipCode, neighborhood, locality, state}) => {

	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)
	const handleDelete = () => {
		Swal.fire({
			title: `Seguro que deseas eliminar la dirección "${street} ${number}" ?`,
			icon: 'info',
			confirmButtonText: 'Eliminar',
			showCancelButton: true,
			cancelButtonText: "Cancelar",
			iconColor: "#BF8D39"
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: `La dirección se borró correctamente`,
					icon: 'success',
					confirmButtonText: 'Ok',
					showCancelButton: false,
					iconColor: "#BF8D39"
				}).then((result) => {
					if(!result.isDenied) {
						dispatch(deleteAddress(_id, user._id))
						window.location.reload()
					}
				})
			}
		})
	}
	return (
		<div className={style.container}>
			<FaMapMarkerAlt className={style.icon}/>
			<div className={style.addressInfo}>
				<span>{street} {number} {apartment || null}</span>
				<span>{neighborhood}, {locality}, {state}</span>
				<span>Código postal: {zipCode}</span>
			</div>
			<button className={style.boton} onClick={handleDelete}>Eliminar</button>
		</div>
	)
}

export default AddressCard