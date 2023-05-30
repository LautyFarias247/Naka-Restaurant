import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getAuth0Users } from "../../../redux/actions/actions";
import UserList from "../UserList/UserList";
import Sidebar from "../Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import style from '../Table.module.css'

const UserTable = () => {
  const users = useSelector(state => state.adminData.users)
  const auth0Users = useSelector(state => state.adminData.auth0Users)
  const [allUsers, setAllUsers] = useState([])
  const dispatch = useDispatch()
  
  useEffect(()=>{
      let auxAllUsers = []
      auxAllUsers = [...auth0Users]
      auxAllUsers = [...auxAllUsers, ...users]
      setAllUsers(auxAllUsers)
  },[])

  return (
    <Container fluid>
    <Row>
      <Col sm={2}>
        <Sidebar/>
      </Col>
      <Col sm={10} >
      <table className={style.table} >
       <thead>
         <tr>
           {/* <th>#</th> */}
           <th>Nombre</th>
           <th>Email</th>
          <th>Pedidos</th>
         <th>Estado</th>
         </tr>
       </thead>
       <UserList users={allUsers}/>
     </table>
      </Col>
    </Row>
    </Container>

  );
};

export default UserTable;
