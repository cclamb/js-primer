var net = require('net');
var app = require('./application');

var server = net.createServer(function (socket) {
  socket.write("Echo server: " +app.version.msg + "\r\n");
  socket.pipe(socket);
});

server.listen(1337, "127.0.0.1");
