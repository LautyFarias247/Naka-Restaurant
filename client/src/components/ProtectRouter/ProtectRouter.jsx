import { Navigate } from "react-router-dom";

const ProtectRouter = ({ user, children }) => {
    console.log(user.role)
    if (!user) return <Navigate to="/menu" />
    if (user.role === false) {
        return <Navigate to="/menu" />
    } else {
        return children
    }
}
export default ProtectRouter;