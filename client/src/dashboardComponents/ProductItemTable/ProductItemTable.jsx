import React, { useState } from 'react'
import style from './ProductItemTable.module.css'
const ProductItemTable = ({product}) => {
	const [showDetail, setShowDetail] = useState(false)
	
	const handleShowDetail = () => {
		setShowDetail(true)
	}


	const handleCloseDetail = () => {
		setShowDetail(false)
	}
	

  return (
    <>
      <tr>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.stock}</td>
        <td>
          <button className={style.detailButton} onClick={handleShowDetail}>
            Detalle
          </button>
        </td>
      </tr>
			{/* <ProductModal show={showOrders} handleCloseOrders={handleCloseOrders} user={user}/> */}
    </>
  );
}

export default ProductItemTable