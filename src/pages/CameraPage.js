import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SendPhotoContainer from '../containers/SendPhoto/SendPhotoContainer';

import Page from '../layouts/Page';

class CameraPage extends Component {

  render() {
    return (
      <Page
        content={
          <SendPhotoContainer />
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
