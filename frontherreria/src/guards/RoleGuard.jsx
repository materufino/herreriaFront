import jwtDecode from 'jwt-decode';
import { useLocalStorage } from 'react-use';
import { Navigate } from "react-router-dom";

const RoleGuard = ({ children, roles }) => {

    const [token] = useLocalStorage('token');
    const { user_rango } = jwtDecode(token);
    if (!roles.includes(user_rango)) {
        alert("PRIVADO: Espacio solo para administradores");
        return <Navigate to={'/home'} replace />
    }

    return children;

}

export default RoleGuard;