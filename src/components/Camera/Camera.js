import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import {Button, Icon, Popup} from 'semantic-ui-react'
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import REQUEST_STATUSES from '../../constants/requestStatuses';

const styles = require('./Camera.sass');

const maxPhotoCount = 1;

class Camera extends Component {
  state = {
    images: [],
    showImage: false
  };
  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    let images = this.state.images;
    const imageSrc = this.webcam.getScreenshot();
    if (images.length < maxPhotoCount) {
      this.props.onSend(imageSrc);
      const showImage = true;
      images.push(imageSrc);
      return true;
      this.setState({images, showImage});
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.showImage) {
      setTimeout(() => {
        this.setState({showImage: false});
      }, 1000)
    }
    return true;
  }

  render() {
    const {images} = this.state;
    const count = images.length;
    const {requestStatus} = this.props;
    if (requestStatus === REQUEST_STATUSES.SUCCEEDED)
      return <Redirect to="/complete"/>;
    else
      return (
        <div>
          {this.props.requestStatus}
          <Webcam
            audio={false}
            height={'100%'}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={'100%'}
            className={'alignCenter'}
          />
          <Link to="/main">
            <Button circular
                    icon={<Icon name={'arrow left'} color={'teal'}/>}
                    size='small'
                    className={classNames('m0', styles.buttonBack)}
                    style={{fontSize: "1.9rem"}}
            />
          </Link>
          <Popup
            trigger={
              <Button circular
                      icon={<Icon name={'camera retro'} color={'teal'}/>}
                      size='massive'
                      className={classNames('m0', styles.buttonPhoto)}
                      style={{fontSize: "3.9rem"}}
                      onClick={this.capture}
              />
            }
            content={`${count}/${maxPhotoCount}`}
            on='focus'
            open={this.state.isOpen}
            onOpen={this.handleOpen}
            position='top center'
          />

          <div className="alignCenter" style={{display: this.state.showImage ? "block" : "none"}}>
            {
              Array.isArray(this.state.images) ? this.state.images.map((image, key) => {
                if (key === this.state.images.length - 1)
                  return <img key={key} src={image} alt=""
                              className={classNames('pulse', styles.Photo)}/>
              }) : null
            }
          </div>
        </div>
      );
  }
}

Camera.propTypes = {};
Camera.defaultProps = {};

export default Camera;
