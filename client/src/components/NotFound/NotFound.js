import React from 'react';
import './NotFound.css'

const NotFound = () =>
    <div className="text-wrapper">
        <div className="title" data-content="404">
            404
        </div>

        <div className="subtitle">
            Oops, the page you're looking for doesn't exist.
        </div>

        <div className="buttons">
            <a className="button" href="http://www.ajerez.es">Go to homepage</a>
        </div>
    </div>

export default NotFound;