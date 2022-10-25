import React  from 'react'
import './App.css'
import Home from './pages/Home/Home'
import SearchResults from './pages/SearchResults/index'
import Detail from './pages/Detail/Detail'
import statiContext  from './Context/statiContext'
import { Link, Route } from 'wouter'
import { GifsContextProvider } from './Context/gifContext'

export default function App() {
  return (
    <statiContext.Provider value={{
      name: 'Carlos',
      suscribete: true
    }}>
    <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className='App-logo' alt='Giffy Logo' src='/logo.png'/>
          </Link>
          <GifsContextProvider>
          <Route
            component={Home} 
            path="/"
          />
          <Route
            component={SearchResults}
            path="/search/:keyword"
          />
          <Route 
            component={Detail}
            path="/gif/:id"
          />
          </GifsContextProvider>
        </section>
    </div>
    </statiContext.Provider>
  );
}
