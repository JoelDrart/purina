import React, { useRef, useEffect, useState } from 'react'
import Video360 from './Video360';


import './styles/PaginaInicio.css'
import Switch from './switch'
import logo from '../images/logoSS.png'
import videoCastillo from '../videos/castillo-360.mov'

function PaginaVideo3D() {
    
    return (
        <Video360 video={videoCastillo} />
    );
}

export default PaginaVideo3D;
