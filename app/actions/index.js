const FORWARD_CLICK = 'FORWARD_CLICK';
const forwardClick = function(content){
	return {
		type: FORWARD_CLICK,
		content: content
	};
};

const BACKWARD_CLICK = 'BACKWARD_CLICK';
const backwardClick = function(content){
	return {
		type: BACKWARD_CLICK,
		content: content
	};
};

exports.FORWARD_CLICK = FORWARD_CLICK;
exports.forwardClick = forwardClick;
exports.BACKWARD_CLICK = BACKWARD_CLICK;
exports.backwardClick = backwardClick;