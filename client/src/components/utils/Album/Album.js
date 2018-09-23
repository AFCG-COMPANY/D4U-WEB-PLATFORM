import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Downshift from 'downshift';

import { renderInput, getSuggestions, renderSuggestion } from '../Downshift/Downshift'
import DateFormatInput from "material-ui-next-pickers/dist/datepicker"
import Paper from "@material-ui/core/Paper/Paper";

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});


function Album(props) {
    const { classes } = props
    var state = {resultRec: ''}

    function onFirstDateChange (date) {
        //state['firstDate'] = date
    }

    function onSecondDateChange (date) {
        //state['secondDate'] = date
    }

    function onFirstCityChange (selectedItem, stateAndHelpers) {
        console.log(selectedItem, stateAndHelpers)
    }

    function onSecondCityChange(selectedItem) {
        console.log(selectedItem)
    }
    
    function onSearchRec() {
        console.log(props)
        props.history.push('/note')
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                            Let Me Check
                        </Typography>
                        <Typography variant="title" align="center" color="textSecondary" paragraph>
                            Контроль над проверками.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={16} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={onSearchRec}>
                                        Для бизнеса
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Для инспектра
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </main>
            {/* End footer */}
        </React.Fragment>
    );
}

Album.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);