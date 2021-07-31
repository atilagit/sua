import { FormGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';

type PropsCheckbox = {
    nameFilter: string
}

export default function CheckboxFilter( { nameFilter }: PropsCheckbox) {

    const [state, setState] = React.useState({
        checkedA: true,
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox 
              className="checkbox-filter"
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              color='default'
            />
          }
          label={nameFilter}
          labelPlacement="start"
        />
      </FormGroup>
    );
  }
