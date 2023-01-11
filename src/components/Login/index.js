import useUser from "hooks/useUser";
import React, { useEffect } from "react";
import { useLocation } from "wouter";
import './login.css'

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
        {
            isLoginLoading && <strong>Checking Credencials ...</strong>
        }
        {
            !isLoginLoading &&
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    username
                    <input
                        placeholder="username" 
                        onChange={(e) => setUsername(e.target.value)} 
                        value={username} 
                    />
                </label>
                <label>
                    password
                    <input 
                        type="password" 
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <button className="btn">Login</button>
            </form>
        }
        {
            hasLoginError && <strong>Usuario o contraseña incorrectos</strong>
        }      
        </>
    )
}