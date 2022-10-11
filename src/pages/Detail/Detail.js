import React, {useContext} from "react"
import Gif from "../../component/Gif"
import GifsContext from '../../Context/gifContext'

export default function Detail({ params }) {
    const {gifs} = useContext(GifsContext)

    const gif = gifs.find(singleGif => 
        singleGif.id === params.id
    )
    console.log(gif)

    return <Gif {...gif}/>
}