import * as React from 'react';
import TextField from '@mui/material/TextField';

import { TimePicker } from '@mui/x-date-pickers';

export default function BasicTimePicker() {
  const [value, setValue] = React.useState(null);

  return (
 
      <TimePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
  
  );
}
