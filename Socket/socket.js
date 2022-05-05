const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
});
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
      socket.on('sendMessage', (data) => {
        console.log(data, 'data socket');
        io.emit('sendMessageServer', data)
      })
});

httpServer.listen(3000, () => {
    console.log('server started and listening on port ')
});