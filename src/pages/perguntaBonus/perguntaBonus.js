// Importar Estilo
import "./perguntaBonus.css";

import { useEffect, useState } from "react";
import mqtt from "mqtt";

// Importar Imagens
import Logo from "../../images/logo.png";
import Organizacao from "../../images/organizacao.png";
import Apoio from "../../images/apoio.png";
import Patrocinio from "../../images/patrocinio.png";
import soundAlert from "../../sounds/alerta_botao.mp3"

// Em arquivo novo, lembra de importar no routes e no index
function PerguntaBonus() {
  const [message, setMessage] = useState(false);
  const brokerUrl = "mqtt://127.0.0.1:8080";
  const [botaoRecebido, setBotaoRecebido] = useState("0");
  const [imagemTime1, setImagemTime1] = useState("");
  const [imagemTime2, setImagemTime2] = useState("");
  const [imagemParticipante1, setImagemParticipante1] = useState("");
  const [imagemParticipante2, setImagemParticipante2] = useState("");
  const [imagemParticipante3, setImagemParticipante3] = useState("");
  const [imagemParticipante4, setImagemParticipante4] = useState("");
  const [imagemParticipante5, setImagemParticipante5] = useState("");
  const [imagemParticipante6, setImagemParticipante6] = useState("");
  const [nomeParticipante1, setNomeParticipante1] = useState("");
  const [nomeParticipante2, setNomeParticipante2] = useState("");
  const [nomeParticipante3, setNomeParticipante3] = useState("");
  const [nomeParticipante4, setNomeParticipante4] = useState("");
  const [nomeParticipante5, setNomeParticipante5] = useState("");
  const [nomeParticipante6, setNomeParticipante6] = useState("");
  let [imagemApertou, setImagemApertou] = useState("");
  let [nomeApertou, setNomeApertou] = useState("");
  let [time, setTime] = useState("");
  const [universidadeA, setUniversidadeA] = useState("");
  const [universidadeB, setUniversidadeB] = useState("");
  const [universidadeBotao, setUniversidadeBotao] = useState("");
  const [pontosTimeUm, setPontosTimeUm] = useState(0);
  const [pontosTimeDois, setPontosTimeDois] = useState(0);
  const [pergunta, setPergunta] = useState(1);
  const [esperandoResposta, setEsperandoResposta] = useState(false);
  const [jogo, setJogo] = useState('');

  const playAlertSound = () => {
    const audio = new Audio(soundAlert);  // Cria um novo objeto de áudio com o som importado
    audio.play().catch((error) => console.log("Erro ao tocar o alerta:", error));  // Toca o som
  };


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

  // useEffect para conectar ao broker e receber as mensagens
  useEffect(() => {
    const client = mqtt.connect(brokerUrl);

    client.on("connect", () => {
      client.subscribe("esp32/button", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Cliente conectado!");
        }
      });
    });

    client.on("message", (topic, payload) => {
      if (esperandoResposta) {
        console.log("Esperando input");
        return;
      }
      console.log(
        `Mensagem recebida no tópico ${topic}: ${payload.toString()}`
      );
      let team = "";
      let university = "";

      const botaoValor = payload.toString();

      if (["1", "2", "3"].includes(botaoValor)) {
        team = "1";
        university = universidadeA; // Pega diretamente o valor da universidade A
      } else if (["4", "5", "6"].includes(botaoValor)) {
        team = "2";
        university = universidadeB; // Pega diretamente o valor da universidade B
      }

      setTime(team);
      setUniversidadeBotao(university);

      //playAlertSound();

      setMessage(false); // Reseta `message` para forçar a re-renderização
      setTimeout(() => setMessage(true), 10); // Define `message` como true após um breve intervalo

      setBotaoRecebido(payload.toString()); // Corrigido para toString()
      setEsperandoResposta(true); // Agora o sistema espera uma resposta

      console.log(`Time que apertou: ${time}`);
      console.log("Universidade que apertou o botao: ", universidadeBotao);
    });

    return () => {
      client.end(); // Fecha a conexão ao desmontar o componente
    };
  }, [esperandoResposta, universidadeA, universidadeB]); // Rodando apenas uma vez ao montar o componente

  // useEffect para redirecionar a tela
  useEffect(() => {
    switch (botaoRecebido) {
      case "1":
        setImagemApertou(imagemParticipante1);
        setNomeApertou(nomeParticipante1);
        break;
      case "2":
        setImagemApertou(imagemParticipante2);
        setNomeApertou(nomeParticipante2);
        break;
      case "3":
        setImagemApertou(imagemParticipante3);
        setNomeApertou(nomeParticipante3);
        break;
      case "4":
        setImagemApertou(imagemParticipante4);
        setNomeApertou(nomeParticipante4);
        break;
      case "5":
        setImagemApertou(imagemParticipante5);
        setNomeApertou(nomeParticipante5);
        break;
      case "6":
        setImagemApertou(imagemParticipante6);
        setNomeApertou(nomeParticipante6);
        break;
      default:
        return;
    }
    const secaoFinal = document.getElementById("fim");
    if (secaoFinal) {
      secaoFinal.style.display = "flex";
    }
  }, [
    botaoRecebido,
    time,
    universidadeBotao,
    nomeParticipante1,
    nomeParticipante2,
    nomeParticipante3,
    nomeParticipante4,
    nomeParticipante5,
    nomeParticipante6,
  ]); // Monitorando botaoRecebido

  useEffect(() => {
    const imagemBase64Time1 = localStorage.getItem("imagemSalvaTime1");
    if (imagemBase64Time1) {
      setImagemTime1(imagemBase64Time1);
    }

    const imagemBase64Time2 = localStorage.getItem("imagemSalvaTime2");
    if (imagemBase64Time2) {
      setImagemTime2(imagemBase64Time2);
    }

    // Pegando as imagens dos participantes no localStorage
    const imagemBase64Participante1 = localStorage.getItem(
      "imagemSalvaParticipante1"
    );
    if (imagemBase64Participante1) {
      setImagemParticipante1(imagemBase64Participante1);
    }

    const imagemBase64Participante2 = localStorage.getItem(
      "imagemSalvaParticipante2"
    );
    if (imagemBase64Participante2) {
      setImagemParticipante2(imagemBase64Participante2);
    }

    const imagemBase64Participante3 = localStorage.getItem(
      "imagemSalvaParticipante3"
    );
    if (imagemBase64Participante3) {
      setImagemParticipante3(imagemBase64Participante3);
    }

    const imagemBase64Participante4 = localStorage.getItem(
      "imagemSalvaParticipante4"
    );
    if (imagemBase64Participante4) {
      setImagemParticipante4(imagemBase64Participante4);
    }

    const imagemBase64Participante5 = localStorage.getItem(
      "imagemSalvaParticipante5"
    );
    if (imagemBase64Participante5) {
      setImagemParticipante5(imagemBase64Participante5);
    }

    const imagemBase64Participante6 = localStorage.getItem(
      "imagemSalvaParticipante6"
    );
    if (imagemBase64Participante6) {
      setImagemParticipante6(imagemBase64Participante6);
    }

    setUniversidadeA(localStorage.getItem("nomeUniversidadeA"));
    setUniversidadeB(localStorage.getItem("nomeUniversidadeB"));
    setNomeParticipante1(localStorage.getItem("nomeParticipante1"));
    setNomeParticipante2(localStorage.getItem("nomeParticipante2"));
    setNomeParticipante3(localStorage.getItem("nomeParticipante3"));
    setNomeParticipante4(localStorage.getItem("nomeParticipante4"));
    setNomeParticipante5(localStorage.getItem("nomeParticipante5"));
    setNomeParticipante6(localStorage.getItem("nomeParticipante6"));
  }, []); // Este efeito roda apenas uma vez ao montar o componente

  useEffect(() => {
    // Função para lidar com os eventos de teclado
    const handleKeyUp = (event) => {
      if (event.key === "s") {
        if (time === "1") {
          setPontosTimeUm((prev) => prev + 1);
        } else if (time === "2") {
          setPontosTimeDois((prev) => prev + 1);
        }
        setEsperandoResposta(false);
        const secaoFinal = document.getElementById("fim");
        if (secaoFinal) {
          secaoFinal.style.display = "none";
        }
      }
      if (event.key === "n") {
        setEsperandoResposta(false);
        const secaoFinal = document.getElementById("fim");
        if (secaoFinal) {
          secaoFinal.style.display = "none";
        }
      }

      setPergunta((prevPergunta) => prevPergunta + 1);
    };

    // Adiciona o listener ao montar o componente
    window.addEventListener("keyup", handleKeyUp);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [time]); // Adicione 'time' como dependência para garantir que ele esteja atualizado

  useEffect(() => {
    localStorage.setItem("pontosTimeUm", pontosTimeUm);
  }, [pontosTimeUm]);

  useEffect(() => {
    localStorage.setItem("pontosTimeDois", pontosTimeDois);
  }, [pontosTimeDois]);

  useState(() => {
    return setPontosTimeUm(parseInt(localStorage.getItem("pontosTimeUm"))) || 0;
  }, []);

  useState(() => {
    return setJogo(parseInt(localStorage.getItem("jogo"))) || 0;
  }, []);

  useState(() => {
    return (
      setPontosTimeDois(parseInt(localStorage.getItem("pontosTimeDois"))) || 0
    );
  }, []);

  return (
    <div class="bloco">
      <div id="topo">
        <div id="esquerda">
          <img src={Logo} alt="" height="100px"></img>
          <img src={Organizacao} alt="" height="80px"></img>
        </div>
        <div id="direita">
          <img src={Apoio} alt="" height="80px"></img>
          <img src={Patrocinio} alt="" height="80px"></img>
        </div>
      </div>
      <div id="tit">
        <h1>Jogo {jogo}</h1>
      </div>
      <div id="mid">
        <div class="time">
          <img
            class="time"
            src={imagemTime1}
            alt=""
            height="175px"
            width="175px"
          ></img>
          <p>Time 1</p>
          <p style={{ fontFamily: " Georgia" }}>{universidadeA}</p>
        </div>
        <div class="pontos">
          <p style={{ fontSize: "1.5em" }}>Pontos {pontosTimeUm}</p>
        </div>
        <div id="X">
          <p>X</p>
        </div>
        <div class="pontos">
          <p style={{ fontSize: "1.5em" }}>Pontos {pontosTimeDois}</p>
        </div>
        <div class="time">
          <img
            class="time"
            src={imagemTime2}
            alt=""
            height="175px"
            width="175px"
          ></img>
          <p>Time 2</p>
          <p style={{ fontFamily: " Georgia" }}>{universidadeB}</p>
        </div>
      </div>
      <div class="perg">
        <p className="textoPergunta">
          Pergunta Bônus {pergunta}
        </p>
      </div>
      {message === true ? (
        <div class="fim" id="fim">
          <img src={imagemApertou} alt="" height="150px" width="131px"></img>
          <div className="resultadoBotao">
            <p className="nomeBotao">{nomeApertou}</p>
            <p className="universidadeBotao">{universidadeBotao}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PerguntaBonus;
