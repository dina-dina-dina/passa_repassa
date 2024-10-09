// Importar Estilo
import "./home.css"

// Importar Imagens
import Logo from "../../images/logo.png"
import Organizacao from "../../images/organizacao.png"
import Apoio from "../../images/apoio.png"
import Patrocinio from "../../images/patrocinio.png"

// Em arquivo novo, lembra de importar no routes e no index
function Home(){
    document.addEventListener('keyup', function(event) {
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