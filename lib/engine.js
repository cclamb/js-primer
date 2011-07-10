var Application = function() {
	
	var print = function() {
		console.log('printing')
	}
	
	return {
		print: print
	}
		
}()


// cite delan azabani, stack overflow, http://stackoverflow.com/questions/217957/how-to-print-debug-messages-in-the-google-chrome-javascript-console
Application.Logger = function() {
	if (!window.console) console = {}
	console.log = console.log || function(x){}
	console.warn = console.warn || function(x){}
	console.info = console.info || function(x) {}
	console.error = console.error || function(x) {}	
	return {
		log: 	function(msg) { console.log(msg) },
		warn: 	function(msg) { console.warn(msg) },
		info: 	function(msg) { console.info(msg) },
		error: 	function(msg) { console.error(msg) }
	}
}()

Application.Monitor = function(impl, logger, suffix) {
	
	var impl = impl || function() { throw { msg: 'bad impl' } }()
	var logger = logger || function() { throw { msg: 'bad logger' } }()
	var suffix = suffix || ''
	
	this.start = function() {
		logger.info('starting monitor' + suffix)
	}
	
	this.stop = function() {
		logger.info('stopping monitor' + suffix)
	}
}

Application.print()
Application.Logger.log('log')
Application.Logger.warn('warning')
Application.Logger.info('info')
Application.Logger.error('error')

try {
	var monitor = new Application.Monitor()
} catch(e) {
	Application.Logger.log('caught: ' + e.msg)
}

try {
	var monitor = new Application.Monitor(new Object())
} catch(e) {
	Application.Logger.log('caught: ' + e.msg)
}

var m1 = new Application.Monitor(new Object(), Application.Logger)
m1.start()
m1.stop()

var monitor_class = Application.Monitor
var m2 = new monitor_class(new Object(), Application.Logger, ' from m2')
m2.start()
m2.stop()

m1.start()
m2.start()
m1.stop()
m2.stop()