import React, { Component } from 'react';
import Page from '../layouts/Page';
import LoginContainer from '../containers/Auth/LoginContainer';
import {connect} from 'react-redux'

class SignInPage extends Component {
  render() {
    return <Page
      active={ this.props.active }
      content={<LoginContainer/>}
      footer={<div></div>}
    />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(SignInPage);