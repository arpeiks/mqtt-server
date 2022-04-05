import mqtt from "mqtt";

const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", (pack) => {
  console.log("PUBLISHER connected", pack);

  setInterval(() => {
    const random = Math.random() * 50;

    console.log(random);

    if (random > 30) client.publish("random", random.toString(), { qos: 1 });
  }, 2000);
});
