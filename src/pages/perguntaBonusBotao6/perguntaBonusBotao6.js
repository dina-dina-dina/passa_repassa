// Importar Estilo
import "./perguntaBonusBotao6.css"

// Importar Imagens
import Logo from "../../images/logo.png"
import Organizacao from "../../images/organizacao.png"
import Apoio from "../../images/apoio.png"
import Patrocinio from "../../images/patrocinio.png"
import Time1q from "../../images/time1q.png"
import Time2q from "../../images/time2q.png"
import Participante1 from "../../images/participante1.png"


// Em arquivo novo, lembra de importar no routes e no index
function PerguntaBonusBotao6(){
    
    document.addEventListener('keyup', function(event) {
        if(event.key === "0"){
            window.location.href = "/pergunta/bonus"
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
            <p>Pergunta Bônus 1</p>
            <div class="fim">
                <img src={Participante1} alt="" height="150px" width="131px"></img>
                <p>Participante XX</p>
            </div>
        </div>
    </div>
    )
}

export default PerguntaBonusBotao6