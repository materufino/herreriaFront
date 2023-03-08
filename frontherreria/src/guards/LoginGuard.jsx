import { Navigate } from "react-router-dom";
import { useLoggedContext } from "../components/providers/LoggedProvider.jsx";

const LoginGuard = ({ children }) => {

    const isLogged = useLoggedContext();

    if (!isLogged) {
        return <Navigate to={'/home'} replace />
    }

    return children;
}

export default LoginGuard;