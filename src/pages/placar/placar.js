// Importar Estilo
import "./placar.css";

// Importar Imagens
import Logo from "../../images/logo.png";
import Organizacao from "../../images/organizacao.png";
import Apoio from "../../images/apoio.png";
import Patrocinio from "../../images/patrocinio.png";
import { useEffect, useState } from "react";

// Em arquivo novo, lembra de importar no routes e no index
function Tela1() {
  const [imagemTime1, setImagemTime1] = useState("");
  const [imagemTime2, setImagemTime2] = useState("");
  const [universidadeA, setUniversidadeA] = useState("");
  const [universidadeB, setUniversidadeB] = useState("");
  const [pontosTimeUm, setPontosTimeUm] = useState(0);
  const [pontosTimeDois, setPontosTimeDois] = useState(0);

  useEffect(() => {
    const imagemBase64Time1 = localStorage.getItem("imagemSalvaTime1");
    if (imagemBase64Time1) {
      setImagemTime1(imagemBase64Time1);
    }

    const imagemBase64Time2 = localStorage.getItem("imagemSalvaTime2");
    if (imagemBase64Time2) {
      setImagemTime2(imagemBase64Time2);
    }

    setUniversidadeA(localStorage.getItem("nomeUniversidadeA"));
    setUniversidadeB(localStorage.getItem("nomeUniversidadeB"));
    console.log(`Pontos time 1 ${pontosTimeUm}`);
  }, []);

  useState(() => {
    return setPontosTimeUm(parseInt(localStorage.getItem("pontosTimeUm"))) || 0;
  }, []);

  useState(() => {
    return setPontosTimeDois(parseInt(localStorage.getItem("pontosTimeDois"))) || 0;
  },[]);

  document.addEventListener("keyup", function (event) {
    if (event.key === "l") {
      window.location.href = "/";
    }
    if (event.key === "h") {
      window.location.href = "/home";
    }
    if (event.key === "g") {
      window.location.href = "/pergunta/geral";
    }
    if (event.key === "b") {
      window.location.href = "/pergunta/bonus";
    }
    if (event.key === "f") {
      window.location.href = "/pergunta/figura";
    }
    if (event.key === "p") {
      window.location.href = "/placar";
    }
  });

  return (
    <div class="bloco">
      <div id="topo">
        <div id="esquerda">
          <img id="logo" src={Logo} alt="" height="100px"></img>
          <img src={Organizacao} alt="" height="80px"></img>
        </div>
        <div id="direita">
          <img src={Apoio} alt="" height="80px"></img>
          <img src={Patrocinio} alt="" height="80px"></img>
        </div>
      </div>
      <div id="tit">
        <h1>Jogo 1</h1>
      </div>
      <div id="mid">
        <div class="time">
          <img
            class="time"
            src={imagemTime1}
            alt=""
            width="290px"
            height="250px"
          ></img>
          <p>Time 1</p>
          <p>{universidadeA}</p>
          <p>Pontos {pontosTimeUm}</p>
        </div>
        <div id="X">
          <p>X</p>
        </div>
        <div class="time">
          <img class="time" src={imagemTime2} alt="" height="250px"></img>
          <p>Time 2</p>
          <p>{universidadeB}</p>
          <p>Pontos {pontosTimeDois}</p>
        </div>
      </div>
    </div>
  );
}

export default Tela1;
