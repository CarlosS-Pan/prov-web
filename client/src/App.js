// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

import { Navbar, Sidebar, Products, Services } from "./components";
import { Footer, Header } from "./containers";

function App() {
  return (
    <div className="App">
      <header className="gradient-bg">
        <Navbar />
        <Header />
        {/* <h1>React and flask</h1> */}
      </header>
    </div>
  );
}

export default App;
