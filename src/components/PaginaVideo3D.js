import React, { useRef, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Video360 from './Video360';


import './styles/PaginaInicio.css'
import Switch from './switch'
import logo from '../images/logoSS.png'
 import riobamba from '../videos/Riobamba.mp4'
 import quito from '../videos/Quito.mp4'
import cuenca from '../videos/Cuenca.mp4'
import guayaquil from '../videos/Guayaquil.mp4'
    

function PaginaVideo3D() {
    const { id } = useParams();

    var videoSource = riobamba;
    switch (id) {
        case '1':
            videoSource = riobamba;
            break;
        case '2':
            videoSource = cuenca;
            break;
        case '3':
            videoSource = quito;
            break;
        case '4':
            videoSource = guayaquil;
            break;
        default:
            videoSource = riobamba;
            break;
    }
    console.log(videoSource);
    return (
        <Video360 video={videoSource} />
    );
}

export default PaginaVideo3D;
