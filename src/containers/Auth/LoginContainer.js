import React, {Component} from 'react';
import Login from '../../components/Auth/Login';
import {connect} from 'react-redux';
import {authLogin} from '../../actions';

class LoginContainer extends Component {
  render() {
    const {serverError, requestStatus} = this.props;
    console.log(this.props);
    return <Login
      serverError={serverError}
      requestStatus={requestStatus}
      onLogin={(email, params) => {
        console.log(email);
        this.props.dispatch(authLogin(email, params))
      } }
    />
  }
}


function mapStateToProps(state) {
  return {
    isAuth: state.user.isAuth,
    serverError: state.user.lastError,
    requestStatus: state.user.requestStatus
  };
}

export default connect(mapStateToProps)(LoginContainer);
