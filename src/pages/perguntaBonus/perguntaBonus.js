// Importar Estilo
import "./perguntaBonus.css"

import { useEffect, useState } from 'react';

// Importar Imagens
import Logo from "../../images/logo.png"
import Organizacao from "../../images/organizacao.png"
import Apoio from "../../images/apoio.png"
import Patrocinio from "../../images/patrocinio.png"
import Time1q from "../../images/time1q.png"
import Time2q from "../../images/time2q.png"


// Em arquivo novo, lembra de importar no routes e no index
function PerguntaBonus(){

    let [nperguntabonus, setNperguntabonus] = useState();

    nperguntabonus = 1;

    useEffect(() => { 
        
    });

    document.addEventListener('keyup', function(event) {
        if(event.key === "ArrowRight"){
            nperguntabonus++;
            console.log(nperguntabonus)
        }
        if(event.key === "ArrowLeft"){
            nperguntabonus--;
            console.log(nperguntabonus)
        }
        if(event.key === "1"){
            window.location.href = "/pergunta/bonus/1"
        }
        if(event.key === "2"){
            window.location.href = "/pergunta/bonus/2"
        }
        if(event.key === "3"){
            window.location.href = "/pergunta/bonus/3"
        }
        if(event.key === "4"){
            window.location.href = "/pergunta/bonus/4"
        }
        if(event.key === "5"){
            window.location.href = "/pergunta/bonus/5"
        }
        if(event.key === "6"){
            window.location.href = "/pergunta/bonus/6"
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
        const contadorElemento = document.getElementById('nperguntabonus');
        contadorElemento.textContent = nperguntabonus;
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
                <img class="time" src={Time1q} alt="" height="175px" width="175px"></img>
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
                <img class= "time" src={Time2q} alt="" height="175px" width="175px"></img>
                <p>Time 2</p>
                <p>Universidade B</p>
            </div>
        </div>
        <div class="perg">
            <p>Pergunta Bônus <span id="nperguntabonus">1</span></p>
        </div>
    </div>
    )
}

export default PerguntaBonus