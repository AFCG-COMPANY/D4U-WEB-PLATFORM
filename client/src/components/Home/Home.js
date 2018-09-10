import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        alert(this.state.email + ' ' + this.state.password);
        window['user_info'] = this.state.email + ' ' + this.state.password;
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={this.state.value} onChange={this.handleEmail} />
                </label>
                <label>
                    Password:
                    <input type="password" value={this.state.value} onChange={this.handlePassword} />
                </label>
                <input type="submit" value="Submit" />
            </form>

                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}