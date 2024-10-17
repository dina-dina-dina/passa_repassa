// Importar Estilo
import "./perguntaGeral.css";

import { useEffect, useState } from "react";
import mqtt from "mqtt";

// Importar Imagens
import Logo from "../../images/logo.png";
import Organizacao from "../../images/organizacao.png";
import Apoio from "../../images/apoio.png";
import Patrocinio from "../../images/patrocinio.png";
import Time1q from "../../images/time1q.png";
import Time2q from "../../images/time2q.png";

function PerguntaGeral() {
  const [message, setMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const brokerUrl = "mqtt://127.0.0.1:8080";
  const [nperguntageral, setNperguntageral] = useState(1);

  const [botaoRecebido, setBotaoRecebido] = useState("");
  const [imagemTime1, setImagemTime1] = useState("");
  const [imagemTime2, setImagemTime2] = useState("");

  useEffect(() => {
    const client = mqtt.connect(brokerUrl);

    client.on("connect", () => {
      setIsConnected(true);
      client.subscribe("esp32/button", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Cliente conectado!");
        }
      });
    });

    client.on("message", (topic, payload) => {
      console.log(
        `Mensagem recebida no tópico ${topic}: ${payload.toString()}`
      );
      setMessage(payload.toString());
      setBotaoRecebido(payload.toString()); // Corrigido para toString()
    });

    return () => {
      client.end(); // Fecha a conexão ao desmontar o componente
    };
  }, []); // Rodando apenas uma vez ao montar o componente

  useEffect(() => {
    if (botaoRecebido === "1") {
      window.location.href = "/pergunta/geral/1";
    } else if (botaoRecebido === "2") {
      window.location.href = "/pergunta/geral/2";
    } else if (botaoRecebido === "3") {
      window.location.href = "/pergunta/geral/3";
    } else if (botaoRecebido === "4") {
      window.location.href = "/pergunta/geral/4";
    } else if (botaoRecebido === "5") {
      window.location.href = "/pergunta/geral/5";
    } else if (botaoRecebido === "6") {
      window.location.href = "/pergunta/geral/6";
    }
  }, [botaoRecebido]); // Monitorando botaoRecebido

  function funcaoBotao() {
    console.log("funcionando", botaoRecebido);
    setBotaoRecebido("2");
  }

  useEffect(() => {
    const imagemBase64Time2 = localStorage.getItem("imagemSalvaTime2");
    if (imagemBase64Time2) {
      setImagemTime2(imagemBase64Time2);
    }

    const imagemBase64Time1 = localStorage.getItem("imagemSalvaTime1");
    if (imagemBase64Time1) {
      setImagemTime1(imagemBase64Time1);
    }
  }, []); // Este efeito roda apenas uma vez ao montar o componente

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "ArrowRight") {
        setNperguntageral((prev) => prev + 1);
        console.log(nperguntageral);
      } else if (event.key === "ArrowLeft") {
        setNperguntageral((prev) => prev - 1);
        console.log(nperguntageral);
      } else if (event.key === "1") {
        window.location.href = "/pergunta/geral/1";
      } else if (event.key === "2") {
        window.location.href = "/pergunta/geral/2";
      } else if (event.key === "3") {
        window.location.href = "/pergunta/geral/3";
      } else if (event.key === "4") {
        window.location.href = "/pergunta/geral/4";
      } else if (event.key === "5") {
        window.location.href = "/pergunta/geral/5";
      } else if (event.key === "6") {
        window.location.href = "/pergunta/geral/6";
      } else if (event.key === "l") {
        window.location.href = "/";
      } else if (event.key === "h") {
        window.location.href = "/home";
      } else if (event.key === "g") {
        window.location.href = "/pergunta/geral";
      } else if (event.key === "b") {
        window.location.href = "/pergunta/bonus";
      } else if (event.key === "f") {
        window.location.href = "/pergunta/figura";
      } else if (event.key === "p") {
        window.location.href = "/placar";
      }

      const contadorElemento = document.getElementById("nperguntageral");
      if (contadorElemento) {
        contadorElemento.textContent = nperguntageral;
      }
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [nperguntageral]); // Rodando sempre que nperguntageral mudar

  return (
    <div className="bloco">
      <div id="topo">
        <div id="esquerda">
          <img src={Logo} alt="" height="100px" />
          <img src={Organizacao} alt="" height="80px" />
        </div>
        <div id="direita">
          <img src={Apoio} alt="" height="80px" />
          <img src={Patrocinio} alt="" height="80px" />
        </div>
      </div>
      <div id="tit">
        <h1>Jogo XX</h1>
      </div>
      <div id="mid">
        <div className="time">
          <img
            className="time"
            src={imagemTime1}
            alt=""
            height="175px"
            width="175px"
          />
          <p>Time 1</p>
          <p>Universidade A</p>
        </div>
        <div className="pontos">
          <p>Pontos 1</p>
        </div>
        <div id="X">
          <p>X</p>
        </div>
        <div className="pontos">
          <p>Pontos 2</p>
        </div>
        <div className="time">
          <button onClick={funcaoBotao} className="botao-lp" id="botao3">
            "botao"
          </button>
          <img
            className="time"
            src={imagemTime2}
            alt=""
            height="175px"
            width="175px"
          />
          <p>Time 2</p>
          <p>Universidade B</p>
        </div>
      </div>
      <div className="perg">
        <p>
          Pergunta Geral <span id="nperguntageral">{nperguntageral}</span>
        </p>
      </div>
    </div>
  );
}

export default PerguntaGeral;
