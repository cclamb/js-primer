var version = require('./version').version;
var date = require('./date').date;
var random = require('./random').random;

exports.main = function() {
	
	var _processor = function() {
		
		var SCALE = 10;
		var GET_DATE = 'date';
		var GET_RANDOM = 'random';
		
		this.dispatch = function(cmd) {
			var generator;
			switch(cmd) {
				case GET_DATE:
					generator = new date.Generator();
					break;
				case GET_RANDOM:
					generator = new random.Generator(SCALE);
					break;
				default:
					generator = new function() {
						this.generate = function() { return ''; }
					}
			}
			return generator.generate();
		}
	}
	
	var _build_version_string = function() {
  	return version_string = version.major + '.' 
			+ version.minor + '.' 
			+ version.patch + ' - '
			+ version.status;
	}

  var _entry_pt = function(socket) {
    socket.write("Echo server; version: " + _build_version_string() + "\r\n");
		console.log(socket);
		//var processor = new _processor();
		//var retval = processor.dispatch(socket);
    socket.pipe(socket);
  }

	var _event_listener = function(event) {
		console.log(event);
	}

  return {
    connection_listener: _entry_pt,
		event_listener: _event_listener
  }
}();
