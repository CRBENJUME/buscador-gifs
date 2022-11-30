import {useContext} from 'react'
import GifsContext from 'Context/gifsContext'

export default function useGlobalGifs () {
    return useContext(GifsContext).gifs
}