import React, { createContext, useState } from 'react';
import Switch from '@mui/material/Switch';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colors, setColors] = useState({
    primary: "#138086",
    secondary: "#CD7672",
    tertiary: "#EEB462",
    quaternary: '#534666',
    mainText: "#282828",
    secondaryText: "#686B73"
});

  const toggleMode = (event) => {
    const isChecked = event.target.checked;
    if (isChecked){
      setColors({
        primary: "#138086",
        secondary: "#CD7672",
        tertiary: "#EEB462",
        quaternary: '#534666',
        mainText: "#282828",
        secondaryText: "#686B73"
      })
    } else {
      setColors({
        primary: "#000000",
        secondary: "#000000",
        tertiary: "#000000",
        mainText: "#FFFFFF",
        secondaryText: "#FFFFFF"
      })
    } 
  }

  return (
    <ThemeContext.Provider value={{ colors, toggleMode }}>
      {children}
      <Switch checked={colors.primary === "#000000"} onChange={toggleMode} />
    </ThemeContext.Provider>
  );
};