import "./lobby.css"

import { useEffect, useState } from 'react';

function Lobby(){
    document.addEventListener('keyup', function(event) {
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

    function goPlacar(){
        window.location.href = "/placar"
    }

    const [imagemParticipante1, setImagemParticipante1] = useState("");
    const [imagemParticipante2, setImagemParticipante2] = useState("");
    const [imagemParticipante3, setImagemParticipante3] = useState("");
    const [imagemParticipante4, setImagemParticipante4] = useState("");
    const [imagemParticipante5, setImagemParticipante5] = useState("");
    const [imagemParticipante6, setImagemParticipante6] = useState("");
    const [imagemTime1, setImagemTime1] = useState("");
    const [imagemTime2, setImagemTime2] = useState("");

    const salvarImagemParticipante1 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          const imagemBase64StringParticipante1 = reader.result;
          setImagemParticipante1(imagemBase64StringParticipante1);
          localStorage.setItem("imagemSalvaParticipante1", imagemBase64StringParticipante1); // Salva a imagem convertida no localStorage
    
          alert("Imagem salva no localStorage!");
        };
    
        if (file) {
          reader.readAsDataURL(file); // Converte a imagem para Base64
        }
      };

      const salvarImagemParticipante2 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          const imagemBase64StringParticipante2 = reader.result;
          setImagemParticipante2(imagemBase64StringParticipante2);
          localStorage.setItem("imagemSalvaParticipante2", imagemBase64StringParticipante2); // Salva a imagem convertida no localStorage
    
          alert("Imagem salva no localStorage!");
        };
    
        if (file) {
          reader.readAsDataURL(file); // Converte a imagem para Base64
        }
      };

      const salvarImagemParticipante3 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          const imagemBase64StringParticipante3 = reader.result;
          setImagemParticipante3(imagemBase64StringParticipante3);
          localStorage.setItem("imagemSalvaParticipante3", imagemBase64StringParticipante3); // Salva a imagem convertida no localStorage
    
          alert("Imagem salva no localStorage!");
        };
    
        if (file) {
          reader.readAsDataURL(file); // Converte a imagem para Base64
        }
      };

      const salvarImagemParticipante4 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          const imagemBase64StringParticipante4 = reader.result;
          setImagemParticipante4(imagemBase64StringParticipante4);
          localStorage.setItem("imagemSalvaParticipante4", imagemBase64StringParticipante4); // Salva a imagem convertida no localStorage
    
          alert("Imagem salva no localStorage!");
        };
    
        if (file) {
          reader.readAsDataURL(file); // Converte a imagem para Base64
        }
      };

      const salvarImagemParticipante5 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          const imagemBase64StringParticipante5 = reader.result;
          setImagemParticipante5(imagemBase64StringParticipante5);
          localStorage.setItem("imagemSalvaParticipante5", imagemBase64StringParticipante5); // Salva a imagem convertida no localStorage
    
          alert("Imagem salva no localStorage!");
        };
    
        if (file) {
          reader.readAsDataURL(file); // Converte a imagem para Base64
        }
      };

      const salvarImagemParticipante6 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          const imagemBase64StringParticipante6 = reader.result;
          setImagemParticipante6(imagemBase64StringParticipante6);
          localStorage.setItem("imagemSalvaParticipante6", imagemBase64StringParticipante6); // Salva a imagem convertida no localStorage
    
          alert("Imagem salva no localStorage!");
        };
    
        if (file) {
          reader.readAsDataURL(file); // Converte a imagem para Base64
        }
      };


      const salvarImagemTime1 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          const imagemBase64StringTime1 = reader.result;
          setImagemTime1(imagemBase64StringTime1);
          localStorage.setItem("imagemSalvaTime1", imagemBase64StringTime1); // Salva a imagem convertida no localStorage
    
          alert("Imagem salva no localStorage!");
        };
    
        if (file) {
          reader.readAsDataURL(file); // Converte a imagem para Base64
        }
      };

      const salvarImagemTime2 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          const imagemBase64StringTime2 = reader.result;
          setImagemTime2(imagemBase64StringTime2);
          localStorage.setItem("imagemSalvaTime2", imagemBase64StringTime2); // Salva a imagem convertida no localStorage
    
          alert("Imagem salva no localStorage!");
        };
    
        if (file) {
          reader.readAsDataURL(file); // Converte a imagem para Base64
        }
      };

    return(
        <div class="corpo">
            <header>
                    <h1>Lobby Principal</h1>    
                    <h2>Telas Disponiveis:</h2>
            </header>

            <div class="blocolobby">
                <div class="blocobotoes1">
                    <div class="botoes">
                        <button onClick={goHome}>Home</button>
                        <br/>
                        <button onClick={goPerguntaGeral}>Pergunta Geral</button>
                        <br/>
                        <button onClick={goPerguntaBonus}>Pergunta Bonus</button>
                        <br/>
                        <button onClick={goPerguntaFigura}>Pergunta Figura</button>
                        <br/>
                        <button onClick={goPlacar}>Placar</button>
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
                </div>
                <div class="blocobotoes2">
                    <h3>Participantes</h3>
                    <div class="participantes">
                        <h4>Participante 1</h4>
                        <h4>Participante 2</h4>
                   </div>
                    <div class="imagens">
                        <input type="file" id="uploadInput1" onChange={salvarImagemParticipante1} accept="image/*"/>
                        <input type="file" id="uploadInput2" onChange={salvarImagemParticipante2} accept="image/*"/>
                    </div>
                   <div class="participantes">
                        <h4>Participante 3</h4>
                        <h4>Participante 4</h4>
                   </div>
                    <div class="imagens">
                        <input type="file" id="uploadInput3" onChange={salvarImagemParticipante3} accept="image/*"/>
                        <input type="file" id="uploadInput4" onChange={salvarImagemParticipante4} accept="image/*"/>
                    </div>
                    <div class="participantes">
                        <h4>Participante 5</h4>
                        <h4>Participante 6</h4>
                   </div>
                    <div class="imagens">
                        <input type="file" id="uploadInput5" onChange={salvarImagemParticipante5} accept="image/*"/>
                        <input type="file" id="uploadInput6" onChange={salvarImagemParticipante6} accept="image/*"/>
                    </div>
                    <div class="times">
                        <h4>Time 1</h4>
                        <h4>Time 2</h4>
                   </div>
                    <div class="imagens">
                        <input type="file" id="uploadInput5" onChange={salvarImagemTime1} accept="image/*"/>
                        <input type="file" id="uploadInput6" onChange={salvarImagemTime2} accept="image/*"/>
                    </div>
                </div>
            </div>
        </div>

    )
    
}

export default Lobby
