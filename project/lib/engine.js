

var my_hash = { one: 1, two: 2, three: 3 }

console.log(my_hash['one'])

var key ='one'
console.log(my_hash[key])

my_hash['four'] = 4

var obj_key = new Object()
my_hash[obj_key] = 'this is an arbitrary string'

console.log(my_hash['four'])
console.log(my_hash[obj_key])

var Ns = {
	TestClass: function() {
		this.print_name = function() { console.log('TestClass') }
	}
}

var tc = new Ns.TestClass()
tc.print_name()

var Functions = {
	print_name: function() { console.log('Functions') },
	print_time: function() { console.log(new Date().getTime()) },
	print_date: function() { console.log(new Date()) }
}

Functions.print_name()
Functions.print_date()
Functions.print_time()

function printer(ns) {
	ns.print_name()
	ns.print_date()
	ns.print_time()
}

printer(Functions)

printer = 'orubter'

console.log(printer)

/*var Application = function() {
	
	var print = function() {
		console.log('printing')
	}
	
	return {
		print: print
	}
		
}()*/
var Application = {
	print: function() { console.log('printing') }
}


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

Application.Registrar = function() {

	var RegistrarImpl = function(logger, suffix) {
		var elements = {}
		var logger = logger || function() { throw { msg: 'bad logger' } }()
		var suffix = suffix || ''
		this.register = function(name, obj) {
			logger.info('registering' + suffix)
			elements[name] = obj
		}
		this.remove = function(name) {
			logger.info('removing' + suffix)
			elements[name] = null
		}
	}
	
	return {
		create: function(logger, suffix) { return new RegistrarImpl(logger, suffix) }
	}
	
}()

var registrar = Application.Registrar.create(Application.Logger)
registrar.register('foo', new Object())
registrar.remove('foo')

