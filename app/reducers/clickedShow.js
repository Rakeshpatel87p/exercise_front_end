const Shows = require('../shows');

const clickedShow = function(state = [], action){
	console.log(state, action);
	return Shows
};

module.exports = clickedShow;