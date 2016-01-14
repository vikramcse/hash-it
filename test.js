var expect = require('chai').expect;
var hashIt = require('./index.js');

describe('check for hash values', function() {
	it('check for md5', function() {
		var hash = hashIt("this is data", "md5");
		expect(hash).to.be.equal("ef9f211a17ec309384cdf1ef1973f41b");
	});
	it('check for sha256', function() {
		var hash = hashIt("this is data", "sha256");
		expect(hash).to.be.equal("89929e06f79af995066ec32e308cc76cde08fe4120816fdca52c02515a0c2a11");
	});
});