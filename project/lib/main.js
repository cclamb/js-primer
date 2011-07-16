var app = require('./application');

exports.main = function() {

  var _entry_pt = function(socket) {
    socket.write("Echo server..." + app.version.msg + "\r\n");
    socket.pipe(socket);
  };

  return {
    engine: _entry_pt
  };
}();
