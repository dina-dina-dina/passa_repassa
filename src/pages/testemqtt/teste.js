import mqtt from "mqtt";
import { useEffect, useState } from "react";

function MqttTeste() {
  const [message, setMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const brokerUrl = "mqtt://127.0.0.1:8080";

  useEffect(() => {
    const client = mqtt.connect(brokerUrl);

    client.on("connect", () => {
      console.log("Entra aqui?");
      setIsConnected(true);
      client.subscribe("esp32/button", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Funcionando");
        }
      });
    });

    // Evento quando receber uma mensagem
    client.on("message", (topic, payload) => {
      console.log(
        `Mensagem recebida no tópico ${topic}: ${payload.toString()}`
      );
      setMessage(payload.toString()); // Atualiza o estado com a mensagem recebida
    });

  }, []);

  return(
    <p>Teste</p>
  )
}

export default MqttTeste;
