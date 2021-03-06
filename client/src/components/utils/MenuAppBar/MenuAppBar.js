import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle'


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    }

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar color="aaa">
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            Let Me Check
                        </Typography>
                        {auth ? (
                            <div>
                                <IconButton component={Link} to='/profile'
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            </div>
                        ) : (
                            <div>
                                <Button component={Link} color='inherit' to='/login'>Войти</Button>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);