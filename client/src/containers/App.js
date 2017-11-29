import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AuthRoute from '../components/AuthRoute';

// PAGES
import TripsIndexPage from './TripsIndexPage';

// APP
class App extends Component {
  constructor (props) {
		super(props);

		this.state = {
			user: {}
		};
	}


  //FUNCTIONS
_renderNavBar () {
  return (
    <nav>
			<img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Biddr</h1>
      <Link to="/">Home</Link>
      <Link to="/trips">Trips</Link>
    </nav>
  );
}

	render() {
    return (
			<Router>
			  <div className="App">
					{this._renderNavBar()}

					<Switch>
						<Route path="/trips" component={TripsIndexPage} />
					</Switch>
  
				</div>
			</Router>
			
		);
	}
}

export default App;