import React from "react";
import { useLocation } from "wouter";
import css from './SearchForm.module.css'
import useForm from "./hook";

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchForm ({ initialKeyword = '', initialRating = 'g' }) {
    const { keyword, rating, times, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })
    //const [rating, setRating] = useState(initialRating)

    const [_, pushLocation] = useLocation()

    const handleChange = evt => {
        updateKeyword(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        //Navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = evt => {
        updateRating(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={css["c-search"]}>
            <button className={css["c-search-btn"]}>Buscar</button>
            <input className={css["c-search-input"]} placeholder="Search a gif here..."
                onChange={handleChange} type='text' 
                value={keyword}
            />
            <select onSubmit={handleChangeRating} value={rating}>
                <option disabled>Rating Type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
            <small>{times}</small>
        </form>
    )
}
//Pasamos un compenente envuelto en memorizar
//export default React.memo(SearchForm)