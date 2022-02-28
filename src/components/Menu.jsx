import React, {useState} from 'react';
import {Link} from "react-router-dom";


const Menu = () => {

    const [openLinks, setOpenLinks] = useState(false);

    const btnClick = () => {
        setOpenLinks(!openLinks);
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
            <Link className="navbar-brand text-uppercase fw-bold d-lg-none" to='/'>Start Bootstrap</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation" onClick={btnClick}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id={openLinks ? "open" : "close"}>
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item px-lg-4">
                        <Link className="nav-link text-uppercase" to='/'>Home</Link>
                    </li>
                    <li className="nav-item px-lg-4">
                        <Link className="nav-link text-uppercase" to='/about'>About</Link>
                    </li>
                    <li className="nav-item px-lg-4">
                        <Link className="nav-link text-uppercase" to='/products'>Products</Link></li>
                    <li className="nav-item px-lg-4">
                        <Link className="nav-link text-uppercase" to='/store'>Store</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Menu;