import React from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Downshift from "downshift";
import {
    getSuggestions as getSuggestions2,
    renderInput as renderInput2,
    renderSuggestion as renderSuggestion2
} from "../Downshift/DownshiftChecks";
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";

const checkStyles = {
    margin: '35px'
}

export default class CheckList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedItem: '',
            items: []
        }
    }

    onChange = (selectedItem) => {
        console.log(selectedItem)
        this.setState({selectedItem: selectedItem})
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            selectedItem: '',
            items: [...this.state.items, this.state.selectedItem]
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="display2" align="center" color="textPrimary" gutterBottom style={checkStyles}>
                    Собрать чек-лист
                </Typography>
                <Grid container spacing={40}>
                    <Grid item key={1} sm={10} md={8} lg={8}>
                        <Downshift id="downshift-simple" onSelect={this.onChange}>
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
                        <Button onClick={this.onSubmit}>Добавить</Button>
                    </Grid>
                </Grid>
                {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
            </div>
        );
    }
}
