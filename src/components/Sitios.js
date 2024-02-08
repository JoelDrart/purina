// Sitios.js

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Sitios.css'; // Archivo de estilos

const Sitios = () => {
  const sitiosData = [
    {
      id: 1,
      imagen: 'https://cdn.pixabay.com/photo/2021/08/22/02/44/chimborazo-6563992_640.jpg',
      nombre: 'Riobamba',
      descripcion: 'Riobamba se encuentra en un valle rodeado por majestuosas montañas de la cordillera andina, incluyendo el volcán Chimborazo, el punto más alto de Ecuador',
    },
    {
      id: 2,
      imagen: 'https://cdn.pixabay.com/photo/2017/01/14/07/45/ecuador-1978922_640.jpg',
      nombre: 'Cuenca',
      descripcion: 'Cuenca es una ciudad situada en el sur de Ecuador, conocida por su rica historia, su arquitectura colonial bien conservada y su hermoso entorno natural',
    },
    {
      id: 3,
      imagen: 'https://cdn.pixabay.com/photo/2014/09/28/23/50/quito-465489_640.jpg',
      nombre: 'Quito',
      descripcion: 'Quito es una ciudad con una rica historia colonial y precolombina. Su centro histórico, conocido como el "Centro Histórico de Quito", ha sido declarado Patrimonio de la Humanidad por la UNESCO',
    },
    {
      id: 4,
      imagen: 'https://cdn.pixabay.com/photo/2022/10/31/21/22/pearl-7560760_640.jpg',
      nombre: 'Guayaquil',
      descripcion: 'Guayaquil es la ciudad más grande y poblada de Ecuador, ubicada en la costa del país, a orillas del río Guayas y junto al Golfo de Guayaquil en el Océano Pacífico.',
    }
    // Agrega más datos según sea necesario
  ];


  return (
    <div className="sitios-container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ul className="sitios-list">
        {sitiosData.map((sitio) => (
            <>
            <br></br>
            <li key={sitio.id} className="sitio-item">
            <img src={sitio.imagen} alt={sitio.nombre} className="sitio-imagen" />
            <div className="sitio-info">
              <h3>{sitio.nombre}</h3>
              <p>{sitio.descripcion}</p>
              <button className='boton' ><Link to={`/video-3d/${sitio.id}`}>Ver Video</Link> </button>
            </div>
          </li>
            </>
          
        ))}
      </ul>
    </div>
  );
};

export default Sitios;
