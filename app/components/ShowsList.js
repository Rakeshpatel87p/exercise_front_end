const 
	React = require('react'),
	Shows = require('../shows');


const ShowsList = React.createClass({
	render(){
		var showList = Shows.map(function(show){
			return <img src={show.product_image_url} />
		});

		return (
			<div>
				{showList}
			</div>

			)
	}
});

module.exports = ShowsList;