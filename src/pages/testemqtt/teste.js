import mqtt from "mqtt"
const client = mqtt.connect("mqtt://127.0.0.1:8080");

client.on("connect", () => {
  console.log("Entra aqui?")
  client.subscribe("presence", (err) => {
    if (!err) {
      client.publish("presence", "Hello mqtt");
    } else {console.log("FOI")}
  });
});

// client.on("message", (topic, message) => {
//   console.log("Entra aqui?")
//   // message is Buffer
//   console.log(message.toString());
//   client.end();
// });

function mqttTeste(){
  return(
    <div></div>
)
}



export default mqttTeste