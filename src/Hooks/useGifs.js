import { useEffect, useState } from "react";
import getGifs from "../services/getGifs"
import GifsContext from '../Context/gifContext'
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const INITIAL_PAGE = 0

export function useGifs({ keyword } = {keyword: null}){
    const [ loading, setLoading ] = useState(false);
    const [ loadingNextPage, setLoadingNextPage] = useState(false)
    const [ gifs, setGifs ] = useState([GifsContext])
    const [ page, setPage ] = useState(INITIAL_PAGE)

    //Recuperamos la keyword del LocalStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)
                
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //Guardamos la keyword en localStorage
                localStorage.setItem('lastKeyword', keyword) //Asignamos a la variable el ultimo resultado ingresaado
            })
    }, [keyword, keywordToUse, setGifs])
//Paginacion
    useEffect(() => {
        if(page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        getGifs({keyword: keywordToUse, page})
        .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
        })
    }, [page])

    return { loading, loadingNextPage, gifs, setPage }
}