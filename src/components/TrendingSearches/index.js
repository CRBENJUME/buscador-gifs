import Spinner from 'components/Spinner'
import useNearScreen from 'hooks/useNearScreen'
import React, { Suspense } from 'react'

//Para importar solamemte cuando se necesite
const TrendingSarches = React.lazy(() => 
    import('./TrendingSearches')
)

export default function LazyTrending(){
    const {isNearScreen, fromRef} = useNearScreen({distance: '0px'})
    
    return <div ref={fromRef}>
        <Suspense fallback={<Spinner/>}>
        {
            isNearScreen ? <TrendingSarches/> : <Spinner/>
        }
        </Suspense>
    </div>
}