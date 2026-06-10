// import { useState } from 'react'

import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Gato from "./Pages/Gato"
// import GatoCard from './Components/GatoCard/GatoCard'

// import gatos from './Data/gatos.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/gatos-react" element={<Home />} />
          <Route
            path="/gatos-react/:gatoId"
            element={<Gato/>}
          />  

      </Routes>

    </BrowserRouter>
  )
  
}

export default App
