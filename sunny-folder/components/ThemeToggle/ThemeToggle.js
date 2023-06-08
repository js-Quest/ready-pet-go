import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectTheme() {
  const [theme, setTheme] = useState(1);

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Theme</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={theme}
          onChange={handleChange}
          label="Theme"
        >
          <MenuItem value={1}>Light Mode</MenuItem>
          <MenuItem value={2}>Dark Mode</MenuItem>
          <MenuItem value={3} disabled={true}>Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}