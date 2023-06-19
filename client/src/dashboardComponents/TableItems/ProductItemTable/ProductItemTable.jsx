import React, { useState } from 'react'
import style from './ProductItemTable.module.css'
import ProductModal from '../../Modals/ProductModal/ProductModal'
import UpdateProductModal from '../../Modals/UpdateProductModal/UpdateProductModal'
const ProductItemTable = ({product}) => {
	const [showDetail, setShowDetail] = useState(false)
	const [showUpdate, setShowUpdate] = useState(false)
	
	const handleShowDetail = () => {
		setShowDetail(true)
	}
	const handleCloseDetail = () => {
		setShowDetail(false)
	}
	

	const handleShowUpdate = () => {
		setShowUpdate(true)
	}
	const handleCloseUpdate = () => {
		setShowUpdate(false)
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
        <td>
          <button className={style.detailButton} onClick={handleShowUpdate}>
            Actualizar
          </button>
        </td>
      </tr>
			<ProductModal show={showDetail} handleClose={handleCloseDetail} product={product}/>
			<UpdateProductModal show={showUpdate} handleClose={handleCloseUpdate} product={product}/>
    </>
  );
}

export default ProductItemTable