import React from 'react';
import ReactDOM from 'react-dom';

const ShowTitle = React.createClass({
	render(){
		return <h1>{this.props.showTitle}</h1>
	}
});

const EpisodeNumbers = React.createClass({
	render(){
		return <h1>{this.props.episodeNumbers}</h1>
	}
});

const ShowImage = React.createClass({
	render(){
		return <img src={this.props.showImage} />
	}
});

const ShowDetails = React.createClass({
	// getInitialState() {
	// 	return {
	// 		title: 'example',
	// 		image: '/images/gaycation.jpg',
	// 		episodeNumber: '22'
	// 	};
	// },
	// onClick(){
	// 	this.setState({
	// 		title: 'example2',
	// 		image: '/images/gaycation.jpg',
	// 		episodeNumber: '23'
	// 	})
	// },
	render(){
		return (
			<div>
				<Link to="/:id"><ShowTitle showTitle = {this.state.title}/></Link>
				<EpisodeNumbers episodeNumbers= {this.state.episodeNumber}/>
				<h1>{Shows[3].title}</h1>
			</div>

		)
	}
});

export default ShowDetails;