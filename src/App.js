import React, { Suspense }  from 'react'
import { Link, Route, Switch } from 'wouter'

import Header from 'components/Header'

import login from 'pages/Login'
import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail'

import { GifsContextProvider } from 'Context/gifContext'
import { UserContextProvider } from 'Context/UserContext'

import 'App.css'

const HomePage = React.lazy(() => import("pages/Home"))


export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Header />
            <Link to="/">
              <figure className='App-logo'>
                <img alt='Giffy Logo' src='/logo.png'/>
              </figure>
            </Link>
            <GifsContextProvider>
              <Switch>
                <Route component={HomePage} path="/" />
                <Route 
                  component={SearchResults} 
                  path="/search/:keyword/:rating?" 
                  />
                <Route component={Detail} path="/gif/:id" />
                <Route component = {login} path = "/login" />
                <Route component={() => <h1>404 Error</h1>} path="/404" />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}
