var net = require('net');
var app = require('./application');
var main = require('./main').main;

net.createServer(main.engine).listen(1337, "127.0.0.1");
