//COMPONENTE DE EJEMPLO

//IMPORTA LAS DEPENDENCIAS Y LIBRERIAS NECESARIAS Y ESTILOS
import React from 'react';
import { useState } from 'react';
import './styles/BotonEjemplo.css'

function BotonEjemplo() {
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador(prevContador => prevContador + 1);
    }
    //AQUI DEVUELVES EL HTML QUE SE RENDERIZARA
    return (
        <div className='boton'>
            <button onClick={aumentarContador}>Haz clic</button>
            <p>Contador: {contador}</p>
        </div>
    );
}

//AQUI EXPORTAS EL COMPONENTE
export default BotonEjemplo;