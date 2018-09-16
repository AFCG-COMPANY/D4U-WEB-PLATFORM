import React from 'react'
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers'

export default class Datetimepicker extends React.Component {
    onChangeDate = (date) => {
        console.log('Date: ', date)
        this.setState({date})
    }
    render() {
        return (
            <div>
                <DateFormatInput name='date-input' onChange={this.onChangeDate}/>
            </div>
        )
    }
}
