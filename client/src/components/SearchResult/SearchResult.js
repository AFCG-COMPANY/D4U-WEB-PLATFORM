import React, { Component } from 'react'

import MenuAppBar from '../utils/MenuAppBar/MenuAppBar'

const SearchResult = ({ match }) => (
    <div>
        <MenuAppBar/>
        <h3>ID: {match.params.id}</h3>
    </div>
)

export default SearchResult