import React from "react";
import "./App.css";
import Navigation from './components/Navbar/Navigation';
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { ThemeProvider } from "./providers/ThemeProvider";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";


function App() {
  return (
    <ThemeProvider>
      <Navigation />
        <ThemeToggle />
        <Hero />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
