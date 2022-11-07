import React, { useState } from "react";

export default function SearchForm ({ onSubmit }){
    const [keyword, setKeyword] = useState('')
    //eslint-disable-next-line
    const [, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault();
        //Navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>Buscar</button>
            <input placeholder="Search a gif here..."
                onChange={handleChange} type='text' 
                value={keyword}
            />
        </form>
    )
}
//Pasamos un compenente envuelto en memorizar
//export default React.memo(SearchForm)