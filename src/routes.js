import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home.js";
import Placar from "./pages/placar/placar.js";
import PerguntaGeral from "./pages/perguntaGeral/perguntaGeral.js";
import PerguntaBonus from "./pages/perguntaBonus/perguntaBonus.js";
import PerguntaFigura from "./pages/perguntaFigura/perguntaFigura.js";
import Lobby from "./pages/lobby/lobby.js";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/home" element={<Home />} />
        <Route path="/placar" element={<Placar />} />
        <Route path="/pergunta/geral" element={<PerguntaGeral />} />
        <Route path="/pergunta/bonus" element={<PerguntaBonus />} />
        <Route path="/pergunta/figura" element={<PerguntaFigura />} />
      </Routes>
    </Router>
  );
}
export default Rotas;
