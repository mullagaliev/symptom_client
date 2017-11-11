import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Camera from '../../components/Camera/Camera';
import {connect} from 'react-redux';
import {sendPhoto} from '../../actions';

class SendPhotoContainer extends Component {
  render() {
    const {requestStatus} = this.props.camera;
    return (
      <Camera onSend={(photo)=>{this.props.dispatch(sendPhoto(photo))}} requestStatus={requestStatus} />
    );
  }
}

SendPhotoContainer.propTypes = {};
SendPhotoContainer.defaultProps = {};

function mapStateToProps(state) {
  return {
    camera: state.camera
  };
}

export default connect(mapStateToProps)(SendPhotoContainer);
