import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/home.js";
import Tela1 from "./pages/tela1/tela1.js";
import Tela2 from "./pages/tela2/tela2.js";
import Tela2i1 from "./pages/tela2i1/tela2i1.js";
import Tela2i2 from "./pages/tela2i2/tela2i2.js";
import Tela2i3 from "./pages/tela2i3/tela2i3.js";
import Tela2i4 from "./pages/tela2i4/tela2i4.js";
import Tela2i5 from "./pages/tela2i5/tela2i5.js";
import Tela2i6 from "./pages/tela2i6/tela2i6.js";
import Tela3 from "./pages/tela3/tela3.js";
import Tela3i from "./pages/tela3i/tela3i.js";
import Tela4 from "./pages/tela4/tela4.js";
import MqttTeste from "./pages/testemqtt/teste.js";
import Testeredirect1 from "./pages/testeredirect1/testeredirect1.js" ;
import Testeredirect2 from "./pages/testeredirect2/testeredirect2.js";

function Rotas(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/1" element={<Tela1/>} />
            <Route path="/2" element={<Tela2/>} />
            <Route path="/2i1" element={<Tela2i1/>} />
            <Route path="/2i2" element={<Tela2i2/>} />
            <Route path="/2i3" element={<Tela2i3/>} />
            <Route path="/2i4" element={<Tela2i4/>} />
            <Route path="/2i5" element={<Tela2i5/>} />
            <Route path="/2i6" element={<Tela2i6/>} />
            <Route path="/3" element={<Tela3/>} />
            <Route path="/3i" element={<Tela3i/>} />
            <Route path="/4" element={<Tela4/>} />
            <Route path="/5" element={<MqttTeste/>} />
            <Route path="/6/1" element={<Testeredirect1/>} />
            <Route path="/6/2" element={<Testeredirect2/>} />
          </Routes>
        </Router>
      );
}
export default Rotas;