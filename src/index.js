/*
    ./client/index.js
    which is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './app/App.jsx';
import SignUp from './sign-up/SignUp.jsx';

ReactDOM.render((
	<BrowserRouter>
	<div>
		<div>
			<Route path="/" exact component={App} />
	      	<Route path="/sign_up" component={SignUp} />
	    </div>
    </div>
	</BrowserRouter>
	), document.getElementById('root'));