import React, { Component } from 'react'
import logo from '../../logo.svg'
import './App.css'

import { Route, Link, Switch, BrowserRouter } from "react-router-dom"
import asyncComponent from "../utils/AsyncComponent"

const AsyncHome = asyncComponent(() => import('../Home/Home'))
const AsyncNotes = asyncComponent(() => import("../Notes/Notes"))

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/note'>Note</Link></li>
                        </ul>
                    </nav>
                </header>
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
                </Switch>
            </div>
        </BrowserRouter>
    )
  }
}

export default App
