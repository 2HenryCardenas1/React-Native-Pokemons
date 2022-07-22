import React, { useState, createContext } from "react"

export const AuthContext = createContext({
    auth: undefined,
    login: () => { },
    logout: () => { }
})


//Opciones que tendra nuestro contexto 

export function AuthProvider(props) {

    //Children hace referencia al componente hijo de este 
    const { children } = props;

    const [auth, setAuth] = useState(undefined);

    const login = (userData) => {
        setAuth(userData);
    };

    const logout = () => {
        setAuth(undefined);
    };
    
    const valueContext = {
        auth,
        login,
        logout,
    }

    return (
        //https://es.reactjs.org/docs/context.html#contextprovider
        <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
    )

}