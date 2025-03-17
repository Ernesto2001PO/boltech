import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) =>{

    const [logged, setLogged] = useState(false);

    const login = ()=> {setLogged(true)}
    const logout= ()=> {setLogged(false)}

    return(
        <AuthContext.Provider value={{ login, logout, logged}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);