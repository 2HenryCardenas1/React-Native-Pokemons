import {useContext} from "react"
import {AuthContext} from '../context/AuthContext'


// Este hooks lo que nos hace es extraer el value de nuestro AuthContext.Provider y devolverlo
export default () => useContext(AuthContext);
