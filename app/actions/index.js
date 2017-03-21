const IMAGE_CLICK = 'IMAGE_CLICK';
const imageClick = function(clickedImage){
	return {
		type: IMAGE_CLICK,
		content: clickedImage
	}
}

module.exports = IMAGE_CLICK;
module.exports = imageClick;