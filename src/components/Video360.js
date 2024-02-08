// Archivo Video360.js
import React, { useEffect } from "react";
import './styles/Video360.css'


const Video360 = ({ video }) => {
    if(!video) return <h1>No hay video 3D</h1>
  return (
    <div>
      <a-scene>
        <a-assets>
          <video
            id="video"
            loop
            crossOrigin="anonymous"
            width="50px"
            height="50px"
            playsInline
            webkit-playsinline="true"
            src={video}
          ></video>
        </a-assets>
        <a-videosphere
          rotation="0 -90 0"
          src="#video"
          play-on-click
        ></a-videosphere>
        <a-camera>
          <a-entity
            position="0 0 -1.5"
            text="align:center; width:6; wrapCount:100; color: white; value:"
            hide-on-play="#video"
          ></a-entity>
        </a-camera>
      </a-scene>
    </div>
  );
};

export default Video360;
