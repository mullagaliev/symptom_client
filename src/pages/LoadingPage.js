import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Page from '../layouts/Page';
import LoadingStatus from '../components/Statuses/LoadingStatus';


class LoadingPage extends Component {
  render() {
    return (
      <Page
        content={
          <LoadingStatus />
        }
        fullScreen={true}
      />
    );
  }
}

LoadingPage.propTypes = {};
LoadingPage.defaultProps = {};

export default LoadingPage;
