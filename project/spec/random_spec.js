
var random = require('../lib/random').random;

var SEED = 10;
var LOW_SEED = 2;
var MED_SEED = 50;
var HIGH_SEED = 1000;

var evaluator = function(seed) {
	var generator = new random.Generator(seed);
	var value = generator.generate();
	expect(value).not.toBeNull();
	expect(value).toBeGreaterThan(-0.001);
	expect(value).toBeLessThan(seed);
};

describe('random specification', function() {
	
	it('should return a value between 0 and the seed', function() {
		evaluator(SEED);
	});
	
	it('should work with a variety of seed values', function() {
		evaluator(LOW_SEED);
		evaluator(MED_SEED);
		evaluator(HIGH_SEED);
	});
	
});