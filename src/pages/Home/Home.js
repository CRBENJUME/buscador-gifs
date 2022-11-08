import React, { useCallback } from "react";
import ListOfGifs from "components/ListOfGifs"
import { useGifs } from "Hooks/useGifs";
import TrendingSearches from "components/TrendingSearches/index";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
    //eslint-disable-next-line
    const { loading, gifs } = useGifs()

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <header>
                <SearchForm/>
            </header>
            
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