import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./pages/Dashboard";
import ProductSearchResults from './pages/ProductSearchResults';
import Header from "./components/Header"; 

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<ProductSearchResults />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
        {/* //need footer  */}
      </Router>
    </>
  );
}

export default App;
