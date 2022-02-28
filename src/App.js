import React from "react";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./components/pages/Home";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
