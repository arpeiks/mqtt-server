import mqtt from "mqtt";

const client = mqtt.connect("mqtt://broker.hivemq.com", {
  clean: false, // persistent session
  clientId: "subscriber2", // client id needed for persistent sesstion
});

client.on("connect", (pack) => {
  client.subscribe("random", { qos: 1 }); // quality of service > 1 [matches publisher]
  console.log("SUBSCRIBER 2 connected", pack);
});

client.on("message", (topic, message, pack) => {
  console.log("message", message.toString());
});
