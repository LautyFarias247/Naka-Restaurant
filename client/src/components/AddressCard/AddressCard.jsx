import React from 'react'
import style from './AddressCard.module.css'
import { FaMapMarkerAlt } from 'react-icons/fa';

const AddressCard = ({street, number, apartment, zipCode, neighborhood, locality, state}) => {
	return (
		<div className={style.container}>
			<FaMapMarkerAlt className={style.icon}/>
			<div className={style.addressInfo}>
				<span>{street} {number} {apartment || null}</span>
				<span>{neighborhood}, {locality}, {state}</span>
				<span>Código postal: {zipCode}</span>
			</div>
		</div>
	)
}

export default AddressCard