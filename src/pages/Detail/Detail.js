import React from "react"
import { Redirect } from "wouter"
import Gif from "components/Gif"
import useSingleGif from "Hooks/useSingleGif"
import Spinner from "components/Spinner"
import { Helmet } from "react-helmet"

export default function Detail({ params }) {
    const {gif, isLoading, isErrored } = useSingleGif({ id: params.id })

    //if a gif exist then change the title  
    const title = gif ? gif.title : ''
    if(isLoading) {
        return (
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <Spinner/>
            </>
        )
    }
    if(isErrored) return <Redirect to='404' />
    if(!gif) return null

    return <>
        <Helmet>
            <title>{title} || Giffy</title>
        </Helmet>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif}/>
    </>
}