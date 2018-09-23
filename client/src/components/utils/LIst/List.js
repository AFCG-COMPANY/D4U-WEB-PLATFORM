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
import { renderInput as renderInput1, getSuggestions as getSuggestions1, renderSuggestion as renderSuggestion1 } from '../Downshift/DownshiftCheckTypes'
import { renderInput as renderInput2, getSuggestions as getSuggestions2, renderSuggestion as renderSuggestion2 } from '../Downshift/DownshiftChecks'
import TodoList from '../CheckList/CheckList'
import Paper from "@material-ui/core/Paper/Paper";

const checkStyles = {
    margin: '35px'
}

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


function List(props) {
    const { classes } = props
    var state = {resultRec: '', items: [0, 1]}

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

    function addCheck() {
        console.log(state.items)
        state.items.push(1)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {/* End hero unit */}
                        <Typography variant="display2" align="center" color="textPrimary" gutterBottom style={checkStyles}>
                            Проверочный лист
                        </Typography>
                        <Grid container spacing={40}>
                            <Grid item key={1} sm={10} md={8} lg={10}>
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
                                                {renderInput1({
                                                    fullWidth: true,
                                                    classes,
                                                    InputProps: getInputProps({
                                                        placeholder: 'выберете тип проверки',
                                                    }),
                                                })}
                                                <div {...getMenuProps()}>
                                                    {isOpen ? (
                                                        <Paper className={classes.paper} square>
                                                            {getSuggestions1(inputValue).map((suggestion, index) =>
                                                                renderSuggestion1({
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
                            </Grid>
                        </Grid>
                        <Grid container spacing={40}>
                            <Grid item key={1} sm={10} md={8} lg={10}>
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
                                                    placeholder: 'выберете компанию для проверки',
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
                            </Grid>
                        </Grid>
                        <Typography variant="display2" align="center" color="textPrimary" gutterBottom style={checkStyles}>
                            Собрать чек-лист
                        </Typography>
                        <Grid container spacing={40}>
                            <Grid item key={1} sm={10} md={8} lg={8}>
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
                                            {renderInput2({
                                                fullWidth: true,
                                                classes,
                                                InputProps: getInputProps({
                                                    placeholder: 'выберете элемент проверки',
                                                }),
                                            })}
                                            <div {...getMenuProps()}>
                                                {isOpen ? (
                                                    <Paper className={classes.paper} square>
                                                        {getSuggestions2(inputValue).map((suggestion, index) =>
                                                            renderSuggestion2({
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
                            </Grid>
                            <Grid item key={2} lg={2}>
                                <Button onClick={addCheck}>Добавить</Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="title" align="center" gutterBottom>
                    Let me check
                </Typography>
                <Typography variant="subheading" align="center" color="textSecondary" component="p">
                    Система для создания чек-листов
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

List.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);