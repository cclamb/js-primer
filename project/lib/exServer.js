var net = require('net');

net.createServer(function(socket) {

	socket.write('test server: 1.0.0; enter command\r\n', 'ascii', function() { 
		console.log('...welcome sent to ' + socket.remotePort + '@' + socket.remoteAddress); 
	});
	
	socket.on('data', function(data) {
		console.log('data received: "' + data + '"');
	});
	
	socket.pipe(socket);
	
}).listen(1337, "127.0.0.1", function() { console.log('...server has been bound.'); });
