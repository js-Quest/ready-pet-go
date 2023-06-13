import React from 'react';


function Theme() {
  return (
    <ThemeContext.Provider value={{ colors, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default Theme;