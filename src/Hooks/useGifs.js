import { useEffect, useState, useContext } from "react";
import getGifs from "../services/getGifs"
import GifsContext from '../Context/gifContext'

const INITIAL_PAGE = 0

export function useGifs( { keyword, rating } = { keyword: null }){
    const [ loading, setLoading ] = useState(false);
    const [ loadingNextPage, setLoadingNextPage] = useState(false)

    const { gifs, setGifs } = useState(GifsContext)
    const [ page, setPage ] = useState(INITIAL_PAGE)

    //Recuperamos la keyword del LocalStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)
                
        getGifs({ keyword: keywordToUse, rating })
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

        getGifs({ keyword: keywordToUse, page, rating })
        .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
        })
    }, [keywordToUse, page, setGifs])

    return { loading, loadingNextPage, gifs, setPage }
}