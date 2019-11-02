import 'date-fns';
import React from 'react';
import TwoTabs from '../../../components/TwoTabs';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const buildCode = () => {
  return (
    `import TextField from '@material-ui/core/TextField'

  <form noValidate>
    <TextField
      id="date"
      label="Birthday"
      type="date"
      defaultValue="2017-05-24"
      InputLabelProps={{
        shrink: true,
      }}
    />
  </form>`
  )
}

const buildDemo = ({selectedDate, handleDateChange}) => {
  return (
    <div className="button-section">
<MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around" flex="column">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>

    </div>
  )
}

class MyDateSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Date',
      demo: buildDemo(props),
      code: buildCode()
    }
  }

  render() {
    return (
      <TwoTabs {...this.state} />
    )
  }
}

export default MyDateSection;