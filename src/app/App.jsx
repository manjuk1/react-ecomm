/*
    ./client/components/App.jsx
*/
import React from 'react';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <div>
	        <nav>
				<Link to="/sign_up">Sign Up</Link>
	        </nav>
        </div>
      </div>
      );
  }
}