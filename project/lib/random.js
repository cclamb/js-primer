exports.random = function() {
	
	var _random_generator = function(scale) {
		
		var _scale = scale;
		
		this.generate = function() {
			return Math.floor(Math.random() * _scale);
		}
	}
	
	return {
		Generator: _random_generator
	}
}();