import React from "react";

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import './styles.scss'

const DateFilter = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="date-filter input-filter">
      <div className="from">
        <span>De:</span>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>
            <KeyboardDateTimePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label=''
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
      </div>
      <div className='to'>
        <span>Até:</span>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>
            <KeyboardDateTimePicker
              className='date-filter'
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label=''
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
      </div>
    </div>
  )
}

export default DateFilter