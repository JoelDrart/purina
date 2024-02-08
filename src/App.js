// Aqui debes trabajar para exportar toda la página
// Aqui puedes importar otros componentes que hagas
import "./App.css";
// import BotonEjemplo from "./components/BotonEjemplo";
import PaginaInicio from "./components/PaginaInicio";
import NavBar from "./components/NavBar";


import { Route, Routes } from "react-router-dom";
import PaginaVideo3D from "./components/PaginaVideo3D";
import Sitios from "./components/Sitios";


function App() {
  return (
    <div>
      <NavBar />
      <div id="contenedor">
      <Routes>
      <Route path="/login" element={<PaginaInicio />} />
      <Route path="/video-3d/:id" element={<PaginaVideo3D />} />
      <Route path="/sitios" element={<Sitios />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
