// const Shows = require('../shows');

const showReducer = function(state = [], action){
	console.log(state, action);
	return state;
};

module.exports = showReducer;