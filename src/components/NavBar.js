import React from 'react';
import { NavLink } from 'react-router-dom';
import './/styles/NavBar.css';
import NavFijo from './FijoNav'
import PaginaInicio from './PaginaInicio'


const NavBar = () => {
    return (
        <>
            <nav className="nav" id="navbar">
                <div className="container">
                    <div className="logo">
                        <a href="#">Purina</a>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <li><NavLink to ="/">Inicio</NavLink></li>
                            <li><NavLink to ='/login'>Login</NavLink></li>
                            <li><NavLink to ='/video-3d'>Video 3D</NavLink></li>
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