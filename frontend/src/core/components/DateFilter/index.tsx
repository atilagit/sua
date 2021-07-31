import React from "react";

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';

const DateFilter = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="">
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
  )
}

export default DateFilter