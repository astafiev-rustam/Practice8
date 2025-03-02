const WebSocket = require("ws");
const server = new WebSocket.Server({port: 9000});
 
server.on("connection", onConnect);
 
// обработчик подключения клиента
// параметр - подключенный клиент
function onConnect(client) {
  console.log("Connection opened");
   
    // обрабатываем входящие сообщения от клиента
    client.on("message", function(message) {
        console.log("Client message:", message.toString());    // для диагностики сообщения клиента на консоль
        client.send("Сообщение получено!");
    });
    // закрытие подключения
    client.on("close", function() {
        console.log("Connection closed");
    });
}
 
console.log("Сервер запущен на 9000 порту");