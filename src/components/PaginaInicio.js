import React from 'react';
import './styles/PaginaInicio.css';
import BotonEjemplo from './BotonEjemplo';

function PaginaInicio () {
    return (
        <div>
            <h1>¡Hola, mundo!</h1>
            <p>¡Bienvenido a tu primera aplicación de React!</p>
            <BotonEjemplo />
            
        </div>
    );
}

export default PaginaInicio;