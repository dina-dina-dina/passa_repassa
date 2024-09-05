// Importar Estilo
import "./tela4.css"

// Importar Imagens
import Logo from "../../images/logo.png"
import Organizacao from "../../images/organizacao.png"
import Apoio from "../../images/apoio.png"
import Patrocinio from "../../images/patrocinio.png"
import Time1q from "../../images/time1q.png"
import Time2q from "../../images/time2q.png"
import figperg from "../../images/figperg.png"


// Em arquivo novo, lembra de importar no routes e no index
function Tela4(){
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
        <div id="esquerda">
            <div class="t1">
                <img src={Time1q} alt="" height="100px"></img>
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
            <div class="t2">
                <img src={Time2q} alt="" height="100px"></img>
                <p>Time 1</p>
                <p>Universidade A</p>
            </div>
        </div>
        <div id="perg">
            <p>Pergunta Bonus Y</p>
        </div>
        <div id="dir">
            <img src={figperg} alt="" width="400px"></img>
            <p>Figura da Pergunta XPTO</p>
        </div>
    </div>
    )
}

export default Tela4