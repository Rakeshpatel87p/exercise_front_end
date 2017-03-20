const 
	React = require('react');

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
	render(){
		return (
			<div>
				<ShowTitle showTitle = "example" />
				<ShowImage showImage="/images/gaycation.jpg"/>
				<EpisodeNumbers episodeNumbers="22"/>
			</div>

		)
	}
});

module.exports = ShowDetails;