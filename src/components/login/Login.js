import React, { PureComponent } from 'react';
import { connect } from "react-redux";
class Login extends PureComponent {

  clickLogin = () => {
    this.props.onRequestDog()
  }
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image" style={{
                background: `url("${this.props.dog || ""}")`
              }}></div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form className="user">
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <button type="button" class="btn btn-primary btn-user btn-block" onClick={() => this.clickLogin()}>Login</button>
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="medium" href="/forgot/">Forgot Password?</a>
                  </div>
                  <div className="text-center">
                    <a className="medium" href="/register/">Create an Account!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);