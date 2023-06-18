import React from 'react'
import style from './ProductsTable.module.css'
import ProductItemTable from '../../dashboardComponents/ProductItemTable/ProductItemTable'
import DashboardSidebar from '../../dashboardComponents/DashboardSidebar/DashboardSidebar';
import { useSelector } from 'react-redux';
import NewProductModal from '../../dashboardComponents/NewProductModal/NewProductModal';

const ProductsTable = () => {
	const products = useSelector(state=>state.allDishes)
	return (<>
		<main className={style.background}>
		<div className={style.container}>
			<DashboardSidebar />
			<section className={style.mainSection}>
				<table className={style.allUsers}>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Categoría</th>
							<th>Stock</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{products?.map((product) => {
							return <ProductItemTable key={product._id} product={product}  />;
						})}
					</tbody>
				</table>
			</section>
		</div>
	</main>
	<NewProductModal show={true}/>
						</>
	)
}

export default ProductsTable