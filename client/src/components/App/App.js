import React, { Component } from 'react'
import logo from '../../logo.svg'
import './App.css'

import { Route, Link, Switch, BrowserRouter } from 'react-router-dom'
import asyncComponent from '../utils/AsyncComponent'

const AsyncHome = asyncComponent(() => import('../Home/Home'))
const AsyncNotes = asyncComponent(() => import("../Notes/Notes"))


const AsyncSearch = asyncComponent(() => import('../Search/Search'))
const AsyncSearchResult = asyncComponent(() => import('../SearchResult/SearchResult'))
const AsyncLogin = asyncComponent(() => import('../Login/Login'))
const AsyncProfile = asyncComponent(() => import('../Profile/Profile'))
const AsyncNotFound = asyncComponent(() => import('../NotFound/NotFound'))
const AsyncPrivateRoute = asyncComponent(() => import('../utils/PrivateRoute'))

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={AsyncHome}
                    />

                    <Route
                        path="/note"
                        exact
                        component={AsyncNotes}
                    />

                    <Route
                        path="/login"
                        exact
                        component={AsyncLogin}
                    />

                    <AsyncPrivateRoute
                        path="/profile"
                        exact
                        component={AsyncProfile}
                    />

                    <Route
                        component={AsyncNotFound}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    )
  }
}

export default App
