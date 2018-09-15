import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import getAuth from './getAuth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        component={Component}
    />
)

export default PrivateRoute