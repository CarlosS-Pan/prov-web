// Importing modules
// import React, { useState, useEffect } from "react";
import "./App.css";
// import Products from "./components/products-content/Products-content";
import { Header, Home, Products, Footer } from "./containers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
