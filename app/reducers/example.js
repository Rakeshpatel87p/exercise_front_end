const Shows = require('../shows');

const example = function(state = [], action){
	console.log(state, action);
	return Shows
};

module.exports = example;