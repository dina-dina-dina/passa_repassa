import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/home.js";
import Tela1 from "./pages/tela1/tela1.js";
import Tela2 from "./pages/tela2/tela2.js";
import Tela2i from "./pages/tela2i/tela2i.js";
import Tela3 from "./pages/tela3/tela3.js";
import Tela3i from "./pages/tela3i/tela3i.js";
import Tela4 from "./pages/tela4/tela4.js";
import MqttTeste from "./pages/testemqtt/teste.js";

function Rotas(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/1" element={<Tela1/>} />
            <Route path="/2" element={<Tela2/>} />
            <Route path="/2i" element={<Tela2i/>} />
            <Route path="/3" element={<Tela3/>} />
            <Route path="/3i" element={<Tela3i/>} />
            <Route path="/4" element={<Tela4/>} />
            <Route path="/5" element={<MqttTeste/>} />
          </Routes>
        </Router>
      );
}
export default Rotas;
