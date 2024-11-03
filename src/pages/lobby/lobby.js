import "./lobby.css";

import { useEffect, useState } from "react";

function Lobby() {
  const [imagemParticipante1, setImagemParticipante1] = useState("");
  const [imagemParticipante2, setImagemParticipante2] = useState("");
  const [imagemParticipante3, setImagemParticipante3] = useState("");
  const [imagemParticipante4, setImagemParticipante4] = useState("");
  const [imagemParticipante5, setImagemParticipante5] = useState("");
  const [imagemParticipante6, setImagemParticipante6] = useState("");
  const [imagemTime1, setImagemTime1] = useState("");
  const [imagemTime2, setImagemTime2] = useState("");
  const [jogo, setJogo] = useState(1)

  const salvarImagemParticipante1 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imagemBase64StringParticipante1 = reader.result;
      setImagemParticipante1(imagemBase64StringParticipante1);
      localStorage.setItem(
        "imagemSalvaParticipante1",
        imagemBase64StringParticipante1
      ); // Salva a imagem convertida no localStorage

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
      localStorage.setItem(
        "imagemSalvaParticipante2",
        imagemBase64StringParticipante2
      ); // Salva a imagem convertida no localStorage

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
      localStorage.setItem(
        "imagemSalvaParticipante3",
        imagemBase64StringParticipante3
      ); // Salva a imagem convertida no localStorage

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
      localStorage.setItem(
        "imagemSalvaParticipante4",
        imagemBase64StringParticipante4
      ); // Salva a imagem convertida no localStorage

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
      localStorage.setItem(
        "imagemSalvaParticipante5",
        imagemBase64StringParticipante5
      ); // Salva a imagem convertida no localStorage

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
      localStorage.setItem(
        "imagemSalvaParticipante6",
        imagemBase64StringParticipante6
      ); // Salva a imagem convertida no localStorage

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados salvos com sucesso!");
  };

  useEffect(() => {
    localStorage.setItem("jogo", jogo);
  }, [jogo]);

  return (
    <div class="container">
      <div class="header">
        <h1>Telas</h1>
        <div class="buttons">
          <button className="button"
            onClick={() => {
              window.location.href = "/home";
            }}
          >
            Home
          </button>
          <button className="button"
            onClick={() => {
              window.location.href = "/pergunta/geral";
            }}
          >
            Pergunta geral
          </button>
          <button className="button"
            onClick={() => {
              window.location.href = "/pergunta/bonus";
            }}
          >
            Pergunta bônus
          </button>
          <button className="button"
            onClick={() => {
              window.location.href = "/pergunta/figura";
            }}
          >
            Pergunta com imagem
          </button>
          <button className="button"
            onClick={() => {
              window.location.href = "/placar";
            }}
          >
            Placar final
          </button>
        </div>
      </div>

      <div class="team-info">
        <h1>Informações do jogo</h1>

        <h2 className="jogo">Jogo: {jogo}</h2>

        <button id="botao1" className="button" onClick={() => {setJogo((prevJogo) => prevJogo +1)}}>Incrementar jogo</button>
        <button className="button" onClick={() => {setJogo((prevJogo) => prevJogo -1)}}>Decrementar jogo</button>

        <div class="teams-container">
          <div class="team" id="team1">
            <h2>Time 1</h2>
            <form onSubmit={handleSubmit}>
              <div class="participant">
                <label class="label">
                  Nome da faculdade:
                  <input
                    type="text"
                    onChange={(event) => {
                      localStorage.setItem(
                        "nomeUniversidadeA",
                        event.target.value
                      );
                    }}
                  />
                </label>
                <label class="image-label">Foto da faculdade:</label>
                <input
                  type="file"
                  onChange={salvarImagemTime1}
                  accept="image/*"
                />
              </div>

              <div class="participant">
                <label class="label">
                  Nome do participante 1:
                  <input
                    type="text"
                    onChange={(event) => {
                      localStorage.setItem(
                        "nomeParticipante1",
                        event.target.value
                      );
                    }}
                  />
                </label>
                <label class="image-label">Foto do participante 1:</label>
                <input
                  type="file"
                  onChange={salvarImagemParticipante1}
                  accept="image/*"
                />
              </div>

              <div class="participant">
                <label class="label">
                  Nome do participante 2:
                  <input
                    type="text"
                    onChange={(event) => {
                      localStorage.setItem(
                        "nomeParticipante2",
                        event.target.value
                      );
                    }}
                  />
                </label>
                <label class="image-label">Foto do participante 2:</label>
                <input
                  type="file"
                  id="uploadInput2"
                  onChange={salvarImagemParticipante2}
                  accept="image/*"
                />
              </div>

              <div class="participant">
                <label class="label">
                  Nome do participante 3:
                  <input
                    type="text"
                    onChange={(event) => {
                      localStorage.setItem(
                        "nomeParticipante3",
                        event.target.value
                      );
                    }}
                  />
                </label>
                <label class="image-label">Foto do participante 3:</label>
                <input
                  type="file"
                  id="uploadInput3"
                  onChange={salvarImagemParticipante3}
                  accept="image/*"
                />
              </div>

              <button type="submit" class="submit-btn">
                Salvar dados
              </button>
            </form>
          </div>

          <div class="team" id="team2">
            <h2>Time 2</h2>
            <form onSubmit={handleSubmit}>
              <div class="participant">
                <label class="label">
                  Nome da faculdade:
                  <input
                    type="text"
                    onChange={(event) => {
                      localStorage.setItem(
                        "nomeUniversidadeB",
                        event.target.value
                      );
                    }}
                  />
                </label>
                <label class="image-label">Foto da faculdade:</label>
                <input
                  type="file"
                  onChange={salvarImagemTime2}
                  accept="image/*"
                />
              </div>

              <div class="participant">
                <label class="label">
                  Nome do participante 4:
                  <input
                    type="text"
                    onChange={(event) => {
                      localStorage.setItem(
                        "nomeParticipante4",
                        event.target.value
                      );
                    }}
                  />
                </label>
                <label class="image-label">Foto do participante 4:</label>
                <input
                  type="file"
                  id="uploadInput4"
                  onChange={salvarImagemParticipante4}
                  accept="image/*"
                />
              </div>

              <div class="participant">
                <label class="label">
                  Nome do participante 5:
                  <input
                    type="text"
                    onChange={(event) => {
                      localStorage.setItem(
                        "nomeParticipante5",
                        event.target.value
                      );
                    }}
                  />
                </label>
                <label class="image-label">Foto do participante 5:</label>
                <input
                  type="file"
                  id="uploadInput5"
                  onChange={salvarImagemParticipante5}
                  accept="image/*"
                />
              </div>

              <div class="participant">
                <label class="label">
                  Nome do participante 6:
                  <input
                    type="text"
                    onChange={(event) => {
                      localStorage.setItem(
                        "nomeParticipante6",
                        event.target.value
                      );
                    }}
                  />
                </label>
                <label class="image-label">Foto do participante 6:</label>
                <input
                  type="file"
                  id="uploadInput6"
                  onChange={salvarImagemParticipante6}
                  accept="image/*"
                />
              </div>

              <button type="submit" class="submit-btn">
                Salvar dados
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lobby;

// salvar imagem
/*<input
  type="file"
  id="uploadInput1"
  onChange={salvarImagemParticipante1}
  accept="image/*"
/>; */

// salvar texto
/* <input
  type="text"
  id="uploadInput8"
  onChange={(event) => {
    localStorage.setItem("nomeUniversidadeB", event.target.value);
  }}
/>; */

// redirecionar
/* <button
onClick={() => {
  window.location.href = "/pergunta/geral";
}}
> */
