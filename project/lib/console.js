version = require('./version').version;

var msg = 'version is: ' 
	+ version.major + '.' 
	+ version.minor + '.' 
	+ version.patch + ' : ' 
	+ version.status;
	
console.log(msg);