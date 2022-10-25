import React, { useCallback } from "react";
import { useLocation } from 'wouter';
import ListOfGifs from "component/ListOfGifs"
import { useGifs } from "Hooks/useGifs";
import TrendingSearches from "component/TrendingSearches/index";
import SearchForm from "component/SearchForm";

export default function Home() {
    //eslint-disable-next-line
    const [ path, pushLocation] = useLocation()
    //eslint-disable-next-line
    const { loading, gifs } = useGifs()

    //Nos ayuda para que no se nos vuelva a renderizar
    const handleSubmit = useCallback(({keyword}) => {
        //evt.preventDefault();
        //Navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }, [ pushLocation ])

    
    return (
        <>
            <SearchForm onSubmit={handleSubmit}/>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Ultima Búsqueda</h3>
                    <ListOfGifs gifs={gifs}/>
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}