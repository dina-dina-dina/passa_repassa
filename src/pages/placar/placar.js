// Importar Estilo
import "./placar.css"

// Importar Imagens
import Logo from "../../images/logo.png"
import Organizacao from "../../images/organizacao.png"
import Apoio from "../../images/apoio.png"
import Patrocinio from "../../images/patrocinio.png"
import Time1 from "../../images/time1.png"
import Time2 from "../../images/time2.png"


// Em arquivo novo, lembra de importar no routes e no index
function Tela1(){
    return(
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
            <h1>Jogo XX</h1>
        </div>
        <div id="mid">
            <div class="time">
                <img class="time" src={Time1} alt="" height="250px"></img>
                <p>Time 1</p>
                <p>Universidade A</p>
            </div>
            <div id="X">
                <p>X</p>
            </div>
            <div class="time">
                <img class= "time" src={Time2} alt="" height="250px"></img>
                <p>Time 2</p>
                <p>Universidade B</p>
            </div>
        </div>
    </div>
    )
}

export default Tela1