import React, { useState } from "react";
import { useLocation } from "wouter";
import css from './SearchForm.module.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchForm (){
    const [keyword, setKeyword] = useState('')
    const [rating, setRating] = useState(RATINGS[0])
    //eslint-disable-next-line
    const [_, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault();
        //Navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    const handleChangeRating = evt => {
        setRating(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={css["c-search"]}>
            <button className={css["c-search-btn"]}>Buscar</button>
            <input className={css["c-search-input"]} placeholder="Search a gif here..."
                onChange={handleChange} type='text' 
                value={keyword}
            />
            <select onSubmit={handleChange} value={rating}>
                <option disabled>Rating Type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
        </form>
    )
}
//Pasamos un compenente envuelto en memorizar
//export default React.memo(SearchForm)