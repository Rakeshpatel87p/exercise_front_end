const 
	React = require('react'),
	ReactDOM = require('react-dom'),
	// routes = require('../app/routes/routes');
	css = require('./styles/main.scss');

const Sample = React.createClass({
	render(){
		return (
		<div>	
			<h1>Hi World, You Look Beautiful</h1>
		</div>
			)
	}
})

ReactDOM.render(<Sample />, document.getElementById('app'))
