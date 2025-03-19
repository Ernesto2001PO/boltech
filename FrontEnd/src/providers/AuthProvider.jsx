import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) =>{

    const [isUserLoggedIn, setLogged] = useState(false);

    const login = ()=> {setLogged(true)}
    const logout= ()=> {setLogged(false)}

    return(
        <AuthContext.Provider value={{ login, logout, isUserLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);