import * as net from "net";
const quotes: string[] = require("../quotes.json");

const server = net.createServer((socket) => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    socket.write(quotes[randomNumber] + "\n");
    socket.end();
});
server.listen(50017, () => {
    console.log("SERVER ONLINE");
});
