import React from 'react';
import {Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Store from "./pages/Store";


const Menu = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
            <Link className="navbar-brand text-uppercase fw-bold d-lg-none" to='/'>Start Bootstrap</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item px-lg-4">
                        <Link className="nav-link text-uppercase" to='/' component={Home}>Home</Link>
                    </li>
                    <li className="nav-item px-lg-4">
                        <Link className="nav-link text-uppercase" to='/about' component={About}>About</Link>
                    </li>
                    <li className="nav-item px-lg-4">
                        <Link className="nav-link text-uppercase" to='/products' component={Products}>Products</Link></li>
                    <li className="nav-item px-lg-4">
                        <Link className="nav-link text-uppercase" to='/store' component={Store}>Store</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Menu;