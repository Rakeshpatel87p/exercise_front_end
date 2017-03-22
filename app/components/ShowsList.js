import React from 'react';
import ReactDOM from 'react-dom';
import Shows from '../shows';


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

export default ShowsList;