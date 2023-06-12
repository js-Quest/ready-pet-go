import React from "react";
import "./App.css";
import Navigation from './components/Navigation';
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { ThemeProvider } from "./providers/ThemeProvider";


function App() {
  return (
    <ThemeProvider>
      <Navigation />
        <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
