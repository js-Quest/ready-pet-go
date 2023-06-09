import React from 'react';
import './App.css';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
// import Projects from './components/Projects/Projects';
// import Resume from './components/Resume/Resume';
import { PageProvider } from './PageProvider';
import { ThemeProvider } from './ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <PageProvider>
      <Navbar />
      <Hero />
      <Footer />
      </PageProvider>
    </ThemeProvider>
  )
};

export default App;
