import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

const styles = require('./CameraDevice.sass');

class CameraDevice extends Component {
  state = {videoSrc: null};

  componentDidMount(){
    // navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    // if (navigator.getUserMedia) {
    //   navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
    // }
    // console.log(navigator);
    navigator.mediaDevices.getUserMedia({audio: false, video: true})
      .then(this.handleVideo)
      .catch(function(error) {
       console.log(error);
      });
    navigator.mediaDevices.enumerateDevices()
      .then(function(devices) {
        devices.forEach(function(device) {
          console.log(device.kind + ": " + device.label +
            " id = " + device.deviceId);
        });
      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      });
  };

  handleVideo = (stream) => {
    console.log(stream);
    var videoTracks = stream.getVideoTracks();
    console.log('Got stream with constraints:', {audio: false, video: true});
    console.log('Using video device: ' + videoTracks[0].label);
    stream.onended = function() {
      console.log('Stream ended');
    };
    this.setState({videoSrc: window.URL.createObjectURL(stream)});
  }

  videoError = () => {

  };

  render(){
    return <div>
      <video src={this.state.videoSrc} autoPlay="true"/>
    </div>;
  }
}

CameraDevice.propTypes = {};
CameraDevice.defaultProps = {};

export default CameraDevice;
