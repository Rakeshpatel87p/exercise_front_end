const 
	React = require('react'),
	ReactDOM = require('react-dom');
	// routes = require('../app/routes/routes');
	// styles = require('../app/styles/main');

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
