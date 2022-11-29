import React from "react";
import { Link } from "wouter";

import useUser from "Hooks/useUser";
import "./index.css"

export default function Header() {
    //const isLogged = false;
    const { isLogged, logout } = useUser();

    const handleClick = (event) => {
        event.preventDefault();
        logout();
    }

    return (
        <header className="gf-header">
            {
                isLogged ? 
                <Link to='/' onClick={handleClick}>
                    Cerrar Sesión
                </Link>
                :
                <Link to="/login">
                    Iniciar Sesión
                </Link>
            }
        </header>
    )
}