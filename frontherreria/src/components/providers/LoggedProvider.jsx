import { createContext, useContext, useState } from "react";
import jwtDecode from "jwt-decode";
import { useLocalStorage } from 'react-use';

const LoggedContext = createContext(null);
const SetLoggedContext = createContext(null);
const RoleContext = createContext(null);
const SetRoleContext = createContext(null);

export const useLoggedContext = () => {
    return useContext(LoggedContext);
}
export const useSetLoggedContext = () => {
    return useContext(SetLoggedContext);
}
export const useRoleContext = () => {
    return useContext(RoleContext);
}
export const useSetRoleContext = () => {
    return useContext(SetRoleContext);
}

const LoggedProvider = ({ children }) => {

    const [token] = useLocalStorage('token');
    const [isLogged, setIsLogged] = useState(token ? true : false);
    const [role, setRole] = useState(() => {
        if (!token) {
            return null;
        }

        return jwtDecode(token)['user_role'];
    });

    return (
        <LoggedContext.Provider value={isLogged}>
            <SetLoggedContext.Provider value={setIsLogged}>
                <RoleContext.Provider value={role}>
                    <SetRoleContext.Provider value={setRole}>
                        {children}
                    </SetRoleContext.Provider>
                </RoleContext.Provider>
            </SetLoggedContext.Provider>
        </LoggedContext.Provider>
    );

}

export default LoggedProvider;