import React, { useEffect, useState } from "react";
import getFavs from "services/getFavs";


const Context = React.createContext({})

export function UserContextProvider({children}){
    const [ favs, setFavs ] = useState([])
    const [ jwt, setJwt ] = useState(() => window
    .sessionStorage.getItem('jwt')
    //Puede usarse tambien localStorage
    )

    useEffect(() => {
        if (!jwt) return setFavs([])
        getFavs({ jwt }).then(setFavs)
    }, [jwt])
    
    return <Context.Provider value={{ favs, setFavs, jwt, setJwt }}>
        {children}
    </Context.Provider>
}
export default Context;