import React, {useState} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const DatePick = (props) =>{  
    return(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          margin="normal"
          id="date-picker-dialog"
          label={props.label}
          format="MM/yyyy"
          value={props.selectedDate}
          onChange={props.onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    )
  
  }

export default DatePick