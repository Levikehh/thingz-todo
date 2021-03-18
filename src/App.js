import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

// Components
/* import Navbar from './components/navbar' */

// Pages
import Home from './pages/home'
import Signin from './pages/signin'

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' exact render={() => <Home />} />
					<Route path='/signin' exact render={() => <Signin />} />
				</Switch>
			</Router>
		);
	}
}

export default App;