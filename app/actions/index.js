const IMAGE_CLICK = 'IMAGE_CLICK';
const imageClick = function(clickedImage){
	return {
		type: IMAGE_CLICK,
		content: clickedImage
	}
}

exports.IMAGE_CLICK = IMAGE_CLICK;
exports.imageClick = imageClick;