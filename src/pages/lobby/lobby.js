import "./lobby.css"

function Lobby(){

    function goHome(){
        window.location.href = "/home"
    }

    function goPerguntaGeral(){
        window.location.href = "/pergunta/geral"
    }

    function goPerguntaGeral1(){
        window.location.href = "/pergunta/geral/1"
    }

    function goPerguntaGeral2(){
        window.location.href = "/pergunta/geral/2"
    }

    function goPerguntaGeral3(){
        window.location.href = "/pergunta/geral/3"
    }

    function goPerguntaGeral4(){
        window.location.href = "/pergunta/geral/4"
    }

    function goPerguntaGeral5(){
        window.location.href = "/pergunta/geral/5"
    }

    function goPerguntaGeral6(){
        window.location.href = "/pergunta/geral/6"
    }

    function goPerguntaBonus(){
        window.location.href = "/pergunta/bonus"
    }

    function goPerguntaBonus1(){
        window.location.href = "/pergunta/bonus/1"
    }

    function goPerguntaBonus2(){
        window.location.href = "/pergunta/bonus/2"
    }

    function goPerguntaBonus3(){
        window.location.href = "/pergunta/bonus/3"
    }

    function goPerguntaBonus4(){
        window.location.href = "/pergunta/bonus/4"
    }

    function goPerguntaBonus5(){
        window.location.href = "/pergunta/bonus/5"
    }

    function goPerguntaBonus6(){
        window.location.href = "/pergunta/b onus/6"
    }

    function goPerguntaFigura(){
        window.location.href = "/pergunta/figura"
    }

    return(
        <div class="corpo">
            <header>
                    <h1>Lobby Principal</h1>    
                    <h2>Telas Disponiveis:</h2>
            </header>

            <div class="blocolobby">
                <div class="botoes">
                    <button onClick={goHome}>Home</button>
                    <br/>
                    <button onClick={goPerguntaGeral}>Pergunta Geral</button>
                    <br/>
                    <button onClick={goPerguntaBonus}>Pergunta Bonus</button>
                    <br/>
                    <button onClick={goPerguntaFigura}>Pergunta Figura</button>
                </div>
                <div class="botoes">
                    <button onClick={goPerguntaGeral1}>Geral (Participante 1)</button>
                    <br/>
                    <button onClick={goPerguntaGeral2}>Geral (Participante 2)</button>
                    <br/>
                    <button onClick={goPerguntaGeral3}>Geral (Participante 3)</button>
                    <br/>
                </div>
                <div class="botoes">
                    <button onClick={goPerguntaGeral4}>Geral (Participante 4)</button>
                    <br/>
                    <button onClick={goPerguntaGeral5}>Geral (Participante 5)</button>
                    <br/>
                    <button onClick={goPerguntaGeral6}>Geral (Participante 6)</button>
                    <br/>
                </div>
                <div class="botoes">
                    <button onClick={goPerguntaBonus1}>Bonus (Participante 1)</button>
                    <br/>
                    <button onClick={goPerguntaBonus2}>Bonus (Participante 2)</button>
                    <br/>
                    <button onClick={goPerguntaBonus3}>Bonus (Participante 3)</button>
                    <br/>
                </div>
                <div class="botoes">
                    <button onClick={goPerguntaBonus4}>Bonus (Participante 4)</button>
                    <br/>
                    <button onClick={goPerguntaBonus5}>Bonus (Participante 5)</button>
                    <br/>
                    <button onClick={goPerguntaBonus6}>Bonus (Participante 6)</button>
                    <br/>
                </div>
                <h3>Upload de Imagens</h3>
                <div class="imagens">
                    <input type="file" id="uploadInput1" class="file-input1" accept="image/*"/>
                    <input type="file" id="uploadInput2" accept="image/*"/>
                </div>
                <div class="imagens">
                    <input type="file" id="uploadInput3" accept="image/*"/>
                    <input type="file" id="uploadInput4" accept="image/*"/>
                </div>
                <div class="imagens">
                    <input type="file" id="uploadInput5" accept="image/*"/>
                    <input type="file" id="uploadInput6" accept="image/*"/>
                </div>
                <div class="imagens">
                    <button id="uploadBtn" >Fazer Upload</button>
                </div>
            </div>
        </div>

    )
    
}

export default Lobby
