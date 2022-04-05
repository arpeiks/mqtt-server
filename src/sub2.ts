import mqtt from "mqtt";

const client = mqtt.connect("mqtt://broker.hivemq.com", {
  clean: false,
  clientId: "subscriber2",
});

client.on("connect", (pack) => {
  client.subscribe("random", { qos: 1 });
  console.log("SUBSCRIBER connected", pack);
});

client.on("message", (topic, message, pack) => {
  console.log("message", message.toString());
});
