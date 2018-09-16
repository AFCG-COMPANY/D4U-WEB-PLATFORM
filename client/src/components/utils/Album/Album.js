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
        console.log('Date: ', date)
        //state['firstDate'] = date
    }

    function onSecondDateChange (date) {
        console.log('Date: ', date)
        //state['secondDate'] = date
    }

    function onFirstCityChange (selectedItem, stateAndHelpers) {
        console.log(1)
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
                            Delivery 4 you
                        </Typography>
                        <Typography variant="title" align="center" color="textSecondary" paragraph>
                            Сервис подбирает под загрузки ближайшего подходящего перевозчика, что позволяет снизить стоимость перевозок до 20% и найти тс по любому маршруту за 15 минут.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={16} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={onSearchRec}>
                                        Найти перевозчика
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Сложные настройки
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {/* End hero unit */}
                        <Grid container spacing={40}>
                            <Grid item key={1} sm={6} md={4} lg={3}>
                                <div className={classes.root}>
                                    <Downshift id="downshift-simple" onSelect={onFirstCityChange}>
                                        {({
                                              getInputProps,
                                              getItemProps,
                                              getMenuProps,
                                              highlightedIndex,
                                              inputValue,
                                              isOpen,
                                              selectedItem,
                                          }) => (
                                            <div className={classes.container}>
                                                {renderInput({
                                                    fullWidth: true,
                                                    classes,
                                                    InputProps: getInputProps({
                                                        placeholder: 'Search a country (start with a)',
                                                    }),
                                                })}
                                                <div {...getMenuProps()}>
                                                    {isOpen ? (
                                                        <Paper className={classes.paper} square>
                                                            {getSuggestions(inputValue).map((suggestion, index) =>
                                                                renderSuggestion({
                                                                    suggestion,
                                                                    index,
                                                                    itemProps: getItemProps({ item: suggestion.label }),
                                                                    highlightedIndex,
                                                                    selectedItem,
                                                                }),
                                                            )}
                                                        </Paper>
                                                    ) : null}
                                                </div>
                                            </div>
                                        )}
                                    </Downshift>
                                </div>
                            </Grid>
                            <Grid item key={2} sm={6} md={4} lg={3}>
                                <div className={classes.root}>
                                    <Downshift id="downshift-simple" onSelect={onSecondCityChange}>
                                        {({
                                              getInputProps,
                                              getItemProps,
                                              getMenuProps,
                                              highlightedIndex,
                                              inputValue,
                                              isOpen,
                                              selectedItem,
                                          }) => (
                                            <div className={classes.container}>
                                                {renderInput({
                                                    fullWidth: true,
                                                    classes,
                                                    InputProps: getInputProps({
                                                        placeholder: 'Search a country (start with a)',
                                                    }),
                                                })}
                                                <div {...getMenuProps()}>
                                                    {isOpen ? (
                                                        <Paper className={classes.paper} square>
                                                            {getSuggestions(inputValue).map((suggestion, index) =>
                                                                renderSuggestion({
                                                                    suggestion,
                                                                    index,
                                                                    itemProps: getItemProps({ item: suggestion.label }),
                                                                    highlightedIndex,
                                                                    selectedItem,
                                                                }),
                                                            )}
                                                        </Paper>
                                                    ) : null}
                                                </div>
                                            </div>
                                        )}
                                    </Downshift>
                                </div>
                            </Grid>
                            <Grid item key={3} sm={6} md={4} lg={3}>
                                <DateFormatInput name='date-input' onChange={onFirstDateChange}/>
                            </Grid>
                            <Grid item key={4} sm={6} md={4} lg={3}>
                                <DateFormatInput name='date-input' onChange={onSecondDateChange}/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="title" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subheading" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

Album.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);