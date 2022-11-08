import React, { useEffect, useState } from 'react'
import getTrendingTerms from 'services/getTrendingTerms'
import Category from 'components/Category'

export default function TrendingSarches(){
    const [ trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category name='Tendencias' options={trends} />
}