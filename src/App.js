import React from "react";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Store from "./components/pages/Store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/store" exact element={<Store />} />
          </Routes>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
