import { useEffect } from "react";
import UserItem from "../UserItem/UserItem";

const UserList = ({users}) => {

    return(
        <tbody>
            {users?.map(user =>{
                return <UserItem
                    id={user._id}
                    name={user.name}
                    email={user.email}
                    pedidos={user.orders}
                    isActive={user.is_active || user.isActive} 
                    sub = {user.sub}
                />
            })}
        </tbody>
    )
}
 
export default UserList;