import { useContext } from "react";
import { GifsContextProvider } from "Context/gifContext";

export default function useGlobalGifs(){
    return useContext(GifsContextProvider).gifs;
}