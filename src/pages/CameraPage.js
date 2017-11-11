import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Camera from '../components/Camera/Camera';

import Page from '../layouts/Page';

class CameraPage extends Component {

  render() {
    return (
      <Page
        content={
          <Camera/>
        }
        fullScreen={true}
        footer={
          <div></div>
        }
      />
    );
  }
}

CameraPage.propTypes = {};
CameraPage.defaultProps = {};

export default CameraPage;
