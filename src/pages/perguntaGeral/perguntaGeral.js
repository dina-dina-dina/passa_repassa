// Importar Estilo
import "./perguntaGeral.css"

import { useEffect, useState } from 'react';

// Importar Imagens
import Logo from "../../images/logo.png"
import Organizacao from "../../images/organizacao.png"
import Apoio from "../../images/apoio.png"
import Patrocinio from "../../images/patrocinio.png"
import Time1q from "../../images/time1q.png"
import Time2q from "../../images/time2q.png"

// Em arquivo novo, lembra de importar no routes e no index
function PerguntaGeral(){

    let [nperguntageral, setNperguntageral] = useState();

    nperguntageral = 1;

    let [botao1, setBotao1] = useState();
    let [botao2, setBotao2] = useState();
    let [botao3, setBotao3] = useState();
    let [botao4, setBotao4] = useState();
    let [botao5, setBotao5] = useState();
    let [botao6, setBotao6] = useState();
    let [botaoRecebido, setBotaoRecebido] = useState();

    useEffect(() => {
        if(botaoRecebido === "1"){
            setBotao1(true)
        }
        if(botaoRecebido === "2"){
            setBotao2(true)
        }
        if(botaoRecebido === "3"){
            setBotao3(true)
        }
        if(botaoRecebido === "4"){
            setBotao4(true)
        }
        if(botaoRecebido === "5"){
            setBotao5(true)
        }
        if(botaoRecebido === "6"){
            setBotao6(true)
        }
    })

    useEffect(() => { 
        if(botao1 === true){
            window.location.href = "/pergunta/geral/1"
        }
        if(botao2 === true){
            window.location.href = "/pergunta/geral/2"
        }
        if(botao3 === true){
            window.location.href = "/pergunta/geral/3"
        }
        if(botao4 === true){
            window.location.href = "/pergunta/geral/4"   
        }
        if(botao5 === true){
            window.location.href = "/pergunta/geral/5"
        }
        if(botao6 === true){
            window.location.href = "/pergunta/geral/6"
        }
    })  
    
    function funcaoBotao(){
        console.log("funcionando", botaoRecebido, botao2)
        setBotaoRecebido("2")
    }

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

    document.addEventListener('keyup', function(event) {
        if(event.key === "ArrowRight"){
            nperguntageral++;
            console.log(nperguntageral)
        }
        if(event.key === "ArrowLeft"){
            nperguntageral--;
            console.log(nperguntageral)
        }
        if(event.key === "1"){
            window.location.href = "/pergunta/geral/1"
        }
        if(event.key === "2"){
            window.location.href = "/pergunta/geral/2"
        }
        if(event.key === "3"){
            window.location.href = "/pergunta/geral/3"
        }
        if(event.key === "4"){
            window.location.href = "/pergunta/geral/4"
        }
        if(event.key === "5"){
            window.location.href = "/pergunta/geral/5"
        }
        if(event.key === "6"){
            window.location.href = "/pergunta/geral/6"
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
            window.location.href = "/pergunta/placar"
        }
        const contadorElemento = document.getElementById('nperguntageral');
        contadorElemento.textContent = nperguntageral;
    });

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
                <button onClick = {funcaoBotao} className="botao-lp" id="botao3">"botao"</button>
                <img class= "time" src={imagemTime2} alt="" height="175px" width="175px"></img>
                <p>Time 2</p>
                <p>Universidade B</p>
            </div>
        </div>
        <div class="perg">
            <p>Pergunta Geral <span id="nperguntageral">1</span></p>
        </div>
    </div>
    )
}

export default PerguntaGeral