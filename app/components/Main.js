const 
	React = require('react'),
	ReactDOM = require('react-dom');

const Main = React.createClass({
	render(){
		return (
		<div className="header"> 
			<h1>Shows</h1>
			// {this.props.children}
			{React.cloneElement(this.props.children, this.props)} 
		</div>
		)
	}
});

module.exports = Main;