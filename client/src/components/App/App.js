import React, { Component } from 'react'
import logo from '../../logo.svg'
import './App.css'

import { Route, Link, Switch, BrowserRouter } from 'react-router-dom'

import Home from '../Home/Home'
import Notes from '../Notes/Notes'


import Search from '../Search/Search'
import SearchResult from '../SearchResult/SearchResult'
import Login from '../Login/Login'
import Profile from'../Profile/Profile'
import NotFound from '../NotFound/NotFound'
import PrivateRoute from '../utils/PrivateRoute/PrivateRoute'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={Search}
                    />

                    <Route
                        path="/search/:id"
                        component={SearchResult}
                    />

                    <Route
                        path="/note"
                        exact
                        component={Notes}
                    />

                    <Route
                        path="/login"
                        exact
                        component={Login}
                    />

                    <PrivateRoute
                        path="/profile"
                        exact
                        component={Profile}
                    />

                    <Route
                        component={NotFound}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    )
  }
}

export default App
