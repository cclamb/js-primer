var net = require('net');

net.createServer(function(socket) {
	socket.write('test server: 1.0.0; enter command\r\n');
	socket.pipe(socket);
}).listen(1337, "127.0.0.1");