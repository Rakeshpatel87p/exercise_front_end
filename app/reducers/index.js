const actions = require('./actions/index');
const initialRepositoryState = [];

const nextShow_forwardClick = function(state, action){
	state = state || initialRepositoryState;
	
	if (action.type === actions.FORWARD_CLICK){
		return state.concat({
			name: action.content

		});
	}
	else if (action.type === actions.BACKWARD_CLICK) {
		return state.concat({
			name: action.content
		})
	}
	// else { determine value and return next one}
}

exports.nextShow_forwardClick = nextShow_forwardClick;