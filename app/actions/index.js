const imageClick = function(clickedImage){
	return {
		type: 'IMAGE_CLICK',
		content: clickedImage
	}
}
export default imageClick;