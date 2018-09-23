import React from 'react'

import MenuAppBar from '../utils/MenuAppBar/MenuAppBar'
import List from '../utils/LIst/List'

class CreateList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { resultSearch: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        return (
            <div>
                <MenuAppBar/>
                <List history={this.props.history}/>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ resultSearch: e.target.value });
    }
}



export default CreateList