import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/home.js";

import Placar from "./pages/placar/placar.js";

import PerguntaGeral from "./pages/perguntaGeral/perguntaGeral.js";
import PerguntaGeralBotao1 from "./pages/perguntaGeralBotao1/perguntaGeralBotao1.js";
import PerguntaGeralBotao2 from "./pages/perguntaGeralBotao2/perguntaGeralBotao2.js";
import PerguntaGeralBotao3 from "./pages/perguntaGeralBotao3/perguntaGeralBotao3.js";
import PerguntaGeralBotao4 from "./pages/perguntaGeralBotao4/perguntaGeralBotao4.js";
import PerguntaGeralBotao5 from "./pages/perguntaGeralBotao5/perguntaGeralBotao5.js";
import PerguntaGeralBotao6 from "./pages/perguntaGeralBotao6/perguntaGeralBotao6.js";

import PerguntaBonus from "./pages/perguntaBonus/perguntaBonus.js";
import PerguntaBonusBotao1 from "./pages/perguntaBonusBotao1/perguntaBonusBotao1.js";
import PerguntaBonusBotao2 from "./pages/perguntaBonusBotao2/perguntaBonusBotao2.js";
import PerguntaBonusBotao3 from "./pages/perguntaBonusBotao3/perguntaBonusBotao3.js";
import PerguntaBonusBotao4 from "./pages/perguntaBonusBotao4/perguntaBonusBotao4.js";
import PerguntaBonusBotao5 from "./pages/perguntaBonusBotao5/perguntaBonusBotao5.js";
import PerguntaBonusBotao6 from "./pages/perguntaBonusBotao6/perguntaBonusBotao6.js";

import PerguntaFigura from "./pages/perguntaFigura/perguntaFigura.js";

import MqttTeste from "./pages/testemqtt/teste.js";
import Testeredirect1 from "./pages/testeredirect1/testeredirect1.js" ;
import Testeredirect2 from "./pages/testeredirect2/testeredirect2.js";

import Lobby from "./pages/lobby/lobby.js"


function Rotas(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Lobby/>} />

            <Route path="/home" element={<Home/>} />

            <Route path="/placar" element={<Placar/>} />

            <Route path="/pergunta/geral" element={<PerguntaGeral/>} />
            <Route path="/pergunta/geral/1" element={<PerguntaGeralBotao1/>} />
            <Route path="/pergunta/geral/2" element={<PerguntaGeralBotao2/>} />
            <Route path="/pergunta/geral/3" element={<PerguntaGeralBotao3/>} />
            <Route path="/pergunta/geral/4" element={<PerguntaGeralBotao4/>} />
            <Route path="/pergunta/geral/5" element={<PerguntaGeralBotao5/>} />
            <Route path="/pergunta/geral/6" element={<PerguntaGeralBotao6/>} />

            <Route path="/pergunta/bonus" element={<PerguntaBonus/>} />
            <Route path="/pergunta/bonus/1" element={<PerguntaBonusBotao1/>} />
            <Route path="/pergunta/bonus/2" element={<PerguntaBonusBotao2/>} />
            <Route path="/pergunta/bonus/3" element={<PerguntaBonusBotao3/>} />
            <Route path="/pergunta/bonus/4" element={<PerguntaBonusBotao4/>} />
            <Route path="/pergunta/bonus/5" element={<PerguntaBonusBotao5/>} />
            <Route path="/pergunta/bonus/6" element={<PerguntaBonusBotao6/>} />

            <Route path="/pergunta/figura" element={<PerguntaFigura/>} />

            <Route path="/5" element={<MqttTeste/>} />
            <Route path="/6/1" element={<Testeredirect1/>} />
            <Route path="/6/2" element={<Testeredirect2/>} />
          </Routes>
        </Router>
      );
}
export default Rotas;