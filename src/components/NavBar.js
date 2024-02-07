import React from 'react';
import { NavLink } from 'react-router-dom';
import './/styles/NavBar.css';
import NavFijo from './FijoNav'
import PaginaInicio from './PaginaInicio'


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
                            <li><NavLink to ="/">Inicio</NavLink></li>
                            <li><NavLink to ='/login'>Login</NavLink></li>
                            <li><NavLink to ="#">Contactos</NavLink></li>
                        
                        </ul>
                    </div>
                </div>
            </nav>
            <NavFijo/>
        
        </>
    );
};

export default NavBar;