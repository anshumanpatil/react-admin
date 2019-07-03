import React , {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import  Register  from '../components/register/Register'
import  Login  from '../components/login/Login'
import  Forgot  from '../components/forgot/Forgot'

class App extends Component {
  render() {
    return (
    <div className="container">
    <Router>
        <Route path="/" exact component={Login} />
        <Route path="/register/" component={Register} />
        <Route path="/forgot/" component={Forgot} />
    </Router>
  </div> );

  }
}

export default App;
