import React, { useState } from "react";
import style from "./ProductsTable.module.css";
import ProductItemTable from "../../dashboardComponents/TableItems/ProductItemTable/ProductItemTable";
import DashboardSidebar from "../../dashboardComponents/DashboardSidebar/DashboardSidebar";
import { useSelector } from "react-redux";
import NewProductModal from "../../dashboardComponents/NewProductModal/NewProductModal";
import { useNavigate } from "react-router-dom";
import { protectRoute } from "../../helpers/protectRoute";
import { useEffect } from "react";

const ProductsTable = () => {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.user);
  const products = useSelector((state) => state.allDishes);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    const isAdmin = protectRoute(admin.admin);
    if (!isAdmin) {
      navigate("/");
      return;
    }
  }, []);
  return (
    <>
      <main className={style.background}>
        <div className={style.container}>
          <DashboardSidebar />
          <section className={style.mainSection}>
            <div className={style.headline}>
              <h3>Todos los platos:</h3>
              <button onClick={() => setShow(true)}>Agregar plato</button>
            </div>
            <table className={style.allDishes}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Stock</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product) => {
                  return (
                    <ProductItemTable key={product._id} product={product} />
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>
      </main>
      <NewProductModal show={show} handleClose={handleClose} />
    </>
  );
};

export default ProductsTable;
