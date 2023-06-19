import React, { useEffect } from "react";
import style from "./UsersTable.module.css";
import DashboardSidebar from "../../dashboardComponents/DashboardSidebar/DashboardSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/actions";
import UserItemTable from "../../dashboardComponents/TableItems/UserItemTable/UserItemTable";


const UsersTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.adminData.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <>
      <main className={style.background}>
        <div className={style.container}>
          <DashboardSidebar />
          <section className={style.mainSection}>
            <table className={style.allUsers}>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Email</th>
                  <th>Pedidos</th>
                  <th style={{ textAlign: "center" }}>Miembro desde:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => {
                  return <UserItemTable key={user._id} user={user} />;
                })}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </>
  );
};

export default UsersTable;
