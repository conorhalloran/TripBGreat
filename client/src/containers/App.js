import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import logo from "../logo.svg";
import "../stylesheets/App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import AuthRoute from "../components/AuthRoute";

// PAGES
import TripsIndexPage from "./TripsIndexPage";
import TripsNewPage from "./TripsNewPage";
import TripsEditPage from "./TripsEditPage";
import TripsShowPage from "./TripsShowPage";
import SignInPage from "./SignInPage";

// APP
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  componentDidMount() {
    this.signIn();
  }

  //FUNCTIONS
  signIn() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const payload = jwtDecode(jwt);
      this.setState({ user: payload });
    }
  }

  isSignedIn() {
    return !!this.state.user.id;
  }

  signOut(event) {
    event.preventDefault();
    localStorage.clear();
    this.setState({ user: {} });
  }

  _renderNavBar() {
    return (
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">TripBGreat</h1>
        <Link to="/">Home</Link>
        <Link to="/trips">Trips</Link>
        {this.isSignedIn() ? (
          <span className="flex-row">
            Hello, {this.state.user.full_name}
            &nbsp;
            <Link to="/trips/new">New Trip</Link>
            <Link to="/" onClick={this.signOut}>
              Sign Out
            </Link>
          </span>
        ) : (
          <Link to="/sign_in">Sign In</Link>
        )}
      </nav>
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this._renderNavBar()}
          <Switch>
            <AuthRoute isAuthenticated={this.isSignedIn()} path="/trips/:id/edit" component={TripsEditPage} user={this.state.user} />
            <AuthRoute isAuthenticated={this.isSignedIn()} path="/trips/new" component={TripsNewPage} />
            <AuthRoute isAuthenticated={this.isSignedIn()} path="/trips/:id" component={TripsShowPage} user={this.state.user} />
            <Route path="/trips" component={TripsIndexPage} />
            <Route path="/sign_in" render={props => <SignInPage {...props} onSignIn={this.signIn} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
