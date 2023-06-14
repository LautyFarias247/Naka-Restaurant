import React from 'react'
import style from './AddressCard.module.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AddressCard = ({street, number, apartment, zipCode, neighborhood, locality, state}) => {
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