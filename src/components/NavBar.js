import React from 'react';
import { NavLink } from 'react-router-dom';
import './/styles/NavBar.css';
import NavFijo from './FijoNav'

const NavBar = () => {
    return (
        <>
            <nav class="nav" id="navbar">
                <div class="container">
                    <div class="logo">
                        <a href="#">Purina</a>
                    </div>
                    <div id="mainListDiv" class="main_list">
                        <ul class="navlinks">
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Contactos</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <NavFijo/>
        
        </>
    );
};

export default NavBar;