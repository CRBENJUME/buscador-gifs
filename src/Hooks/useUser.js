import { useCallback, useContext, useState } from "react";
import Context from "Context/UserContext";
import loginService from "services/login";
import addFavService from "services/addFav";

export default function useUser() {
    const { favs, setFavs, jwt, setJwt } = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false})
    
    const login = useCallback(({username, password}) => {
        setState({ loading: true, error: false})
        loginService({username, password})
            .then(jwt => {
                window.sessionStorage.setItem('jwt')
                setState({ loading: false, error: false})
                setJwt(jwt)
            })
            .catch(err => {
                console.log(err)
                window.sessionStorage.removeItem('jwt')
                setState({ loading: false, error: true })
            })
    }, [setJwt])

    const addFav = useCallback(({ fav }) => {
        addFavService({ fav, jwt })
            .then(setFavs)
            .catch(err => console.log(err))
    }, [ jwt, setFavs])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt')
        setJwt(null);
    }, [setJwt])

    return {
        addFav,
        favs,
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
    }
}