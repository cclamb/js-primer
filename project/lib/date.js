exports.date = function() {
	
	var _date_generator = function() {
		
		this.generate = function() {
			return new Date().toString();
		}
	}
	
	return {
		Generator: _date_generator
	}
}();
