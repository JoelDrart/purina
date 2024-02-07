// Aqui debes trabajar para exportar toda la página
// Aqui puedes importar otros componentes que hagas
import "./App.css";
// import BotonEjemplo from "./components/BotonEjemplo";
import PaginaInicio from "./components/PaginaInicio";
import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Esta navbar se mantiene en todas las páginas */}
      <NavBar />
      <Routes>
        {/* dentro del 'element' pones el componente para que se renderice, talcual como está abajo en el login */}
        <Route path="/" element={<h1>RATAAA INICIO</h1>} /> 

        <Route path="/login" element={<PaginaInicio />} />
      </Routes>
    </div>
  );
}

export default App;
