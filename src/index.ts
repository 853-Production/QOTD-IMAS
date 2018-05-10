import * as net from "net";

const server = net.createServer((socket) => {
    socket.write("HELLO TCP WORLD");
    socket.end();
});
server.listen(50017, () => {
    console.log("SERVER ONLINE");
});
