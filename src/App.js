import React, { Suspense }  from 'react'
import 'App.css'
import SearchResults from 'pages/SearchResults'
import { Link, Route } from 'wouter'
import { GifsContextProvider } from 'Context/gifContext'
import Home from 'pages/Home/Home'
import Detail from 'pages/Detail/Detail'

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <section className="App-content">
          <Link to="/">
            <img className='App-logo' alt='Giffy Logo' src='/logo.png'/>
          </Link>
          <GifsContextProvider>
            <Route component={Home}  path="/" />
            <Route component={SearchResults} path="/search/:keyword/:rating?" />
            
            <Route component={Detail} path="/gif/:id" />
            <Route component={() => <h1>404 Error</h1>} path="/404" />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}
