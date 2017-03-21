import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowDetails from '../components/ShowDetails';


const routes = ( 
	< Router >
    	< Route path = "/" component = { ShowDetails } />
    < /Router>
)

export default {routes};
