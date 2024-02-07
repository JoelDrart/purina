import React from 'react';
import { NavLink } from 'react-router-dom';
import './/styles/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;