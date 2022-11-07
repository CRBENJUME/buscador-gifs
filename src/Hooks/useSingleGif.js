import { useGifs } from "./useGifs";
import { useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifF = gifs.find((singleGif) => singleGif.id === id);
  const [ gif, setGif ] = useState(gifF)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isErrored, setIsErrored ] = useState(false)

  useEffect(() => {
    if(!gif) {
        setIsLoading(true)
        //Llamar al servicio si no existe el gif
        getSingleGif({ id })
        .then(gif => {
            setGif(gif)
            setIsLoading(false)
            setIsErrored(false)
        }).catch(err => {
            setIsLoading(false)
            setIsErrored(true)
        })
    }
  }, [gif, id])

  return { gifF, isLoading, isErrored };
}