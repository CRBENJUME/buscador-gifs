import React, {useCallback, useEffect, useRef} from "react";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs"
import { useGifs } from "Hooks/useGifs";
import useNearScreen from "Hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import SearchForm from "components/SearchForm";

export default function SearchResults ({ params }) {
    const { keyword, rating = 'g' } = params;
    const { loading, gifs, setPage } = useGifs({ keyword, rating })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ 
        externalRef: loading ? null : externalRef,
        once: false 
    })

    const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage]) //Esto quiere decir que se ejecuta cuando el componente se renderiza por primera vez

    useEffect(() => {
        if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage,isNearScreen]) //Hasta que esto no cambie, la funcion no se renderizara nuevamente

    return <>
    {
        loading
        ? <Spinner /> 
        : <>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
        </Helmet>
        <header>
            <SearchForm initialKeyword={keyword}/> 
        </header>
        <div className="App-wrapper">
            <h3 className="App-title">
                {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs} />
            <div data-testid="visor" ref={externalRef}/>
        </div>
        </>
    }
    </>
}