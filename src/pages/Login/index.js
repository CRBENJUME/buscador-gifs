import useUser from "Hooks/useUser";
import React, { useEffect } from "react";
import { useLocation } from "wouter";

export default function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [, navigate] = useLocation();
    const {isLoginLoading, hasLoginError,login, isLogged} = useUser();

    useEffect(() => {
        if (isLogged) navigate("/");
    }, [isLogged, navigate])

    const handleSubmit = (event) => {
        event.preventDefault();
        login({username, password});
    }

    if(isLoginLoading) return <p>Cargando...</p>
    if(hasLoginError) return <p>Usuario o contraseña incorrectos</p>
    
    return (
        <>
        <h2>Login </h2>
        {
            isLoginLoading && <strong>Checking Credencials ...</strong>
        }
        {
            !isLoginLoading &&
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder="Usuario" 
                    onChange={e => setUsername(e.target.value)} 
                    value={username} />
                <input type="password" 
                    placeholder="Contraseña" 
                    onChance={e => setPassword(e.target.value)}                         value={password}/>
                    <button>Login</button>
            </form>
        }
        {
            hasLoginError && <strong>Usuario o contraseña incorrectos</strong>
        }      
        </>
    )
}