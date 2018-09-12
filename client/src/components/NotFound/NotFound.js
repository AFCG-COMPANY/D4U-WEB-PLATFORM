import React from 'react';
import './NotFound.css'

import MenuAppBar from '../utils/MenuAppBar/MenuAppBar'

const NotFound = () =>
    <div>
        <MenuAppBar/>
        <div className="text-wrapper">
            <div className="title" data-content="404">
                404
            </div>

            <div className="subtitle">
                Ой, похоже что этой страницы не существует.
            </div>

            <div className="buttons">
                <a className="button" href="/">Вернуться на главную</a>
            </div>
        </div>
    </div>

export default NotFound;