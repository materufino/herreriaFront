import jwtDecode from 'jwt-decode';
import { useLocalStorage } from '../components/providers/localStorage.jsx';

const RoleGuard = ({ children, roles }) => {

    const [token] = useLocalStorage('token');
    const { user_rango } = jwtDecode(token);

    if (!roles.includes(user_rango)) {
        return <h1>PRIVADO: Espacio solo para administradores</h1>;
    }

    return children;

}

export default RoleGuard;