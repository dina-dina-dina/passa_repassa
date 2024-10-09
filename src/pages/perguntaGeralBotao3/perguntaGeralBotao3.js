// Importar Estilo
import "./perguntaGeralBotao3.css"

import { useEffect, useState } from 'react';

// Importar Imagens
import Logo from "../../images/logo.png"
import Organizacao from "../../images/organizacao.png"
import Apoio from "../../images/apoio.png"
import Patrocinio from "../../images/patrocinio.png"
import Time1q from "../../images/time1q.png"
import Time2q from "../../images/time2q.png"
import Participante3 from "../../images/participante3.png"


// Em arquivo novo, lembra de importar no routes e no index
function PerguntaGeralBotao3(){

    document.addEventListener('keyup', function(event) {
        if(event.key === "0"){
            window.location.href = "/pergunta/geral"
        }
        if(event.key === "l"){
            window.location.href = "/"
        }
        if(event.key === "h"){
            window.location.href = "/home"
        }
        if(event.key === "g"){
            window.location.href = "/pergunta/geral"
        }
        if(event.key === "b"){
            window.location.href = "/pergunta/bonus"
        }
        if(event.key === "f"){
            window.location.href = "/pergunta/figura"
        }
        if(event.key === "p"){
            window.location.href = "/placar"
        }
    });

    const [imagemParticipante3, setImagemParticipante3] = useState("");
    const [imagemTime1, setImagemTime1] = useState("");
    const [imagemTime2, setImagemTime2] = useState("");

    useEffect(() => {
        const imagemBase64Time1 = localStorage.getItem('imagemSalvaTime1');
        if (imagemBase64Time1) {
          setImagemTime1(imagemBase64Time1);
        }
      }, []); // Este efeito roda apenas uma vez ao montar o componente

    useEffect(() => {
        const imagemBase64Time2 = localStorage.getItem('imagemSalvaTime2');
        if (imagemBase64Time2) {
          setImagemTime2(imagemBase64Time2);
        }
      }, []); // Este efeito roda apenas uma vez ao montar o componente

    useEffect(() => {
        const imagemBase64Participante3 = localStorage.getItem('imagemSalvaParticipante3');
        if (imagemBase64Participante3) {
          setImagemParticipante3(imagemBase64Participante3);
        }
      }, []); // Este efeito roda apenas uma vez ao montar o componente

    return(
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
            <h1>Jogo XX</h1>
        </div>
        <div id="mid">
            <div class="time">
                <img class="time" src={imagemTime1} alt="" height="175px" width="175px"></img>
                <p>Time 1</p>
                <p>Universidade A</p>
            </div>
            <div class="pontos">
                <p>Pontos 1</p>
            </div>
            <div id="X">
                <p>X</p>
            </div>
            <div class="pontos">
                <p>Pontos 2</p>
            </div>
            <div class="time">
                <img class= "time" src={imagemTime2} alt="" height="175px" width="175px"></img>
                <p>Time 2</p>
                <p>Universidade B</p>
            </div>
        </div>
        <div class="perg">
            <p>Pergunta Geral 1</p>
            <div class="fim">
                <img src={imagemParticipante3} alt="" height="150px" width="131px"></img>
                <p>Participante 3</p>
            </div>
        </div>
    </div>
    )
}

export default PerguntaGeralBotao3