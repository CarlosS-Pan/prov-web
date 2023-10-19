// Importing modules
// import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Header,
  Home,
  Products,
  Services,
  AboutUs,
  ContactUs,
  Footer,
} from "./containers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
