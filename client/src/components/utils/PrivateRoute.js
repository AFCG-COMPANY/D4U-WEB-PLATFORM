import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import getAuth from './getAuth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            {
                getAuth()
                true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        }
    />
);

export default PrivateRoute