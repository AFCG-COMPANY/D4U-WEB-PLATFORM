import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import getAuth from '../getAuth/getAuth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    false ? (<Route component={Component}/>) : (<Redirect to={{pathname: "/login"}}/>)
)

export default PrivateRoute


