import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Register from '../components/register/Register'
import Login from '../components/login/Login'
import Forgot from '../components/forgot/Forgot'
import Dashboard from './Dashboard/Dashboard'

class App extends PureComponent {
  componentDidMount() {
    console.log("[App] [componentDidMount] Auth", process.env)
}
  render() {
    return (
      <div className="container" id="AppComponent">
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/register/" component={Register} />
          <Route path="/forgot/" component={Forgot} />
          <Route path="/dashboard/" component={Dashboard} />
        </Router>
      </div>);

  }
}

export default App;
