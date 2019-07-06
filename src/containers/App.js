import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Register from '../components/register/Register'
import Login from '../components/login/Login'
import Forgot from '../components/forgot/Forgot'

import { connect } from "react-redux";

class App extends PureComponent {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    console.log(this.props)
    return (
      <div className="container">
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/register/" component={Register} />
          <Route path="/forgot/" component={Forgot} />
        </Router>
      </div>);

  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
