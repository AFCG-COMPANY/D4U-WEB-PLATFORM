import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import MenuAppBar from '../utils/MenuAppBar/MenuAppBar'
import DownshiftCity from '../utils/Downshift/Downshift'
import Album from '../utils/Album/Album'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { resultSearch: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        return (
            <div>
                <MenuAppBar/>
                <h3>Search</h3>
                <input
                    id="new-todo"
                    onChange={this.handleChange}

                />
                <Button component={Link} color='inherit' to={'/search/' + this.state.resultSearch}>
                    Search {this.state.resultSearch}
                </Button>
                <Album/>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ resultSearch: e.target.value });
    }
}



export default Search