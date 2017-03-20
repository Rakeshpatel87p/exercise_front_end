const 
	React = require('react'),
	ReactDOM = require('react-dom');

const Shows = React.createClass({
	render(){
		return <h1>Hello World</h1>
	}
});

ReactDOM.render(<Shows />, document.getElementById('app'))
