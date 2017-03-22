const imageClick = function(clickedImage){
	return {
		type: 'IMAGE_CLICK',
		content: clickedImage
	}
}
module.exports = imageClick;