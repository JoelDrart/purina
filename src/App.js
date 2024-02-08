// Aqui debes trabajar para exportar toda la página
// Aqui puedes importar otros componentes que hagas
import "./App.css";
// import BotonEjemplo from "./components/BotonEjemplo";
import PaginaInicio from "./components/PaginaInicio";
import NavBar from "./components/NavBar";


import { Route, Routes } from "react-router-dom";
import BotonInicioo from "./components/BotonInicio";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<PaginaInicio />} />
        
      </Routes>
    </div>
  );
}

export default App;
