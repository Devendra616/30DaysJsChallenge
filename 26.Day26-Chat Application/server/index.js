import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3005 });
let clients = {};

wss.on("connection", function connection(ws) {
  const clientId = generateUniqueID();
  clients[clientId] = ws;
  console.log(`Client ${clientId} connected`);

  ws.on("error", console.error);

  ws.on("message", (data) => {
    const message = JSON.parse(data);
    console.log("🚀 ~ ws.on ~ message:", message);

    // Broadcast message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  });
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

const generateUniqueID = () => {
  return ((Math.random() * 1223) / 17).toString().slice(3, 9);
};
