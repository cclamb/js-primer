var version = require('./version').version;
var date = require('./date').date;
var random = require('./random').random;

exports.main = function() {
	
	var _processor = function() {
		
		var SCALE = 10;
		var DATE = 1;
		var RANDOM = 2;
		var UNKNOWN = 3;
		
		var parser = function(cmd) {
			if (cmd.match(/date/ig)) 		return DATE;
			if (cmd.match(/random/ig))	return RANDOM;
			return UNKNOWN;
		}
		
		this.dispatch = function(cmd) {
			var generator;
			switch(parser(cmd.toString())) {
				case DATE:
					generator = new date.Generator();
					break;
				case RANDOM:
					generator = new random.Generator(SCALE);
					break;
				default:
					generator = new function() {
						this.generate = function() { return 'undefined token submitted.'; }
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
	
		socket.write('date & random server: ' 
		  + _build_version_string()
		  + '; enter command\r\n', 
		  'ascii', 
		  function() { 
			  console.log('...welcome sent to ' 
			    + socket.remotePort 
			    + '@' 
			    + socket.remoteAddress); 
		});
		
		var processor = new _processor();

		socket.on('data', function(data) {
			console.log('data received: "' + data + '"');
			var retval = processor.dispatch(data);
			console.log('response: ' + retval);
			socket.write(retval + '\r\n');
		});

  }

	var _event_listener = function() {
		console.log('...server has been bound.'); 
	}

  return {
    connection_listener: _entry_pt,
		event_listener: _event_listener
  }
}();
