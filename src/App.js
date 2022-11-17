import React, { Suspense }  from 'react'
import 'App.css'
import SearchResults from 'pages/SearchResults'
import { Link, Route } from 'wouter'
import { GifsContextProvider } from 'Context/gifContext'
import Detail from 'pages/Detail/Detail'

const HomePage = React.lazy(() => import('pages/Home/Home'))

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <section className="App-content">
          <Link to="/">
            <figure className='App-logo'>
              <img alt='Giffy Logo' src='/logo.png'/>
            </figure>
          </Link>
          <GifsContextProvider>
            <Route component={HomePage}  path="/" />
            <Route component={SearchResults} path="/search/:keyword/:rating?" />
            
            <Route component={Detail} path="/gif/:id" />
            <Route component={() => <h1>404 Error</h1>} path="/404" />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}
