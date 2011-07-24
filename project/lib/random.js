exports.random = function() {
	
	var _random_generator = function(scale) {
		
		var _scale = scale;
		
		this.generate = function() {
			return Math.floor(Math.random() * _scale).toString();
		}
	}
	
	return {
		Generator: _random_generator
	}
}();