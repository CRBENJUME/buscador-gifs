import React, { useEffect, useState } from 'react'
import getTrendingTerms from 'services/getTrendingTerms'
import Category from 'components/Category'

export default function TrendingSarches(){
    const [ trends, setTrends] = useState([])

    useEffect(() => {
        const controller = new AbortController()
        getTrendingTerms({ signal: controller.signal})
            .then(setTrends)
            .catch(err => {})
        return () => controller.abort()
    }, [])

    return <Category name='Tendencias' options={trends} />
}