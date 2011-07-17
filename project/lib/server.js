var net = require('net');
var main = require('./main').main;

net.createServer(main.connection_listener)
	.listen(1337, "127.0.0.1", main.event_listener);
