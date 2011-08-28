
var date = require('../lib/date').date;

describe('date specification', function(){

  it('should return a valid value', function(){
    var generator = new date.Generator();
		var value = generator.generate();
		expect(value).not.toBeNull();
  });

	it('should return the current date', function() {
		var generator = new date.Generator();
		expect(generator.generate().toString()).toEqual(new Date().toString());
	});

});