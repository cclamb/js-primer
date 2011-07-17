var version = require('./version').version;

exports.main = function() {
	
	var _build_version_string = function() {
  	return version_string = version.major + '.' 
			+ version.minor + '.' 
			+ version.patch + ' - '
			+ version.status;
	}

  var _entry_pt = function(socket) {
    socket.write("Echo server; version: " + _build_version_string() + "\r\n");
    socket.pipe(socket);
  }

  return {
    engine: _entry_pt
  }
}();
