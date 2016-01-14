'use strict';
var crypto = require('crypto');

module.exports = function(data, hashAlgo) {
	if(data && hashAlgo) {
		return crypto.createHash(hashAlgo).update(data).digest('hex');
	} else {
		throw Error("check arguments");
	}
};