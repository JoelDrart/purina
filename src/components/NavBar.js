import React from 'react';
import { NavLink } from 'react-router-dom';
import './/styles/NavBar.css';
import NavFijo from './FijoNav'
import logo from '../images/logoSS.png'
// import PaginaInicio from './PaginaInicio'


const NavBar = () => {
    return (
        <>
            <nav className="nav" id="navbar">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="Logo de Purina" className="logo-img" />
                        <a href="#">Purina</a>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <li><NavLink to ="/">Inicio</NavLink></li>
                            <li><NavLink to ="/sitios">Sitios</NavLink></li>
                            <li><NavLink to ='/login'>Ingresar</NavLink></li>
                        
                        </ul>
                    </div>
                </div>
            </nav>
            <NavFijo/>
        
        </>
    );
};

export default NavBar;