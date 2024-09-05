// Importar Estilo
import "./home.css"

// Importar Imagens
import Logo from "../../images/logo.png"
import Organizacao from "../../images/organizacao.png"
import Apoio from "../../images/apoio.png"
import Patrocinio from "../../images/patrocinio.png"

// Em arquivo novo, lembra de importar no routes e no index
function Home(){
    return(
    <div class="bloco">
        <div class="logo">
            <img src={Logo} alt="" height="300px"></img>
        </div>
        <div class="sublogo">
            <img src={Apoio} alt="" height="85px"></img>
            <img src={Organizacao} alt="" height="85px"></img>
            <img src={Patrocinio} alt="" height="85px"></img>
        </div>
    </div>
    )
}

export default Home