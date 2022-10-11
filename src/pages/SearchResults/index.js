import React, {useCallback, useEffect, useRef} from "react";
import Spinner from "component/Spinner";
import ListOfGifs from "component/ListOfGifs"
import { useGifs } from "Hooks/useGifs";
import useNearScreen from "Hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearchResults ({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ 
        externalRef: loading ? null : externalRef,
        once: false 
    })

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), []) //Esto quiere decir que se ejecuta cuando el componente se renderiza por primera vez

    useEffect(() => {
        if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage,isNearScreen]) //Hasta que esto no cambie, la funcion no se renderizara nuevamente

    return <>
    {
        loading
        ? <Spinner /> 
        : <>
        <h3 className="App-title">
            {decodeURI(keyword)}
        </h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor">

        </div>
        </>
    }
    </>
}