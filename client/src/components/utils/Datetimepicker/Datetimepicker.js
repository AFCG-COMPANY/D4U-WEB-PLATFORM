import React from 'react'
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers'

export default class Datetimepicker extends React.Component {
    onChangeDate = (date) => {
        console.log('Date: ', date)
        this.setState({date})
    }
    onChangeTime = (time) => {
        console.log('Time: ', time)
        this.setState({time})
    }
    render() {
        return (
            <div>
                <DateFormatInput name='date-input' onChange={this.onChangeDate}/>
            </div>
        )
    }
}
