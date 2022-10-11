import React, { useState} from "react";
import { useLocation } from 'wouter';
import ListOfGifs from "component/ListOfGifs"
import { useGifs } from "Hooks/useGifs";
import TrendingSearches from "component/TrendingSearches/index";

export default function Home() {
    //eslint-disable-next-line
    const [ path, pushLocation] = useLocation()
    const [keyword, setKeyword] = useState('')
    //eslint-disable-next-line
    const { loading, gifs } = useGifs()

    const handleSubmit = evt =>{
        evt.preventDefault();
        //Navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input placeholder="Search a gif here..."
                    onChange={handleChange} type='text' 
                    value={keyword}
                />
            </form>
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Ultima Búsqueda</h3>
                        <ListOfGifs gifs={gifs}/>
                    </div>
                    <div className="App-category">
                       <TrendingSearches />
                    </div>
                </div>
            </div>
        </>
    )
}