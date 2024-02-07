//COMPONENTE DE EJEMPLO

import React from 'react';
import { useState } from 'react';

function BotonEjemplo() {
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador(prevContador => prevContador + 1);
    }

    return (
        <div>
            <button onClick={aumentarContador}>Haz clic</button>
            <p>Contador: {contador}</p>
        </div>
    );
}


export default BotonEjemplo;