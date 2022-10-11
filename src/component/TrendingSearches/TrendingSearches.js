import React, { useEffect, useState } from 'react'
import getTrendingTerms from 'services/getTrendingTerms'
import Category from 'component/Category'

export default function TrendingSarches(){
    const [ trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category name='Tendencias' options={trends} />
}