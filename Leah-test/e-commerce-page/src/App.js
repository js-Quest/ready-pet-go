import React from "react";
import './App.css';
import ProductSearch from './components/ProductSearchResults';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <ProductSearch />
    </div>
  );
}

export default App;
