import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Page from '../layouts/Page';
import PhotoMenu from '../components/menu/PhotoMenu';
import Statistics from '../components/Statistics/Statistics';

class MainPage extends Component {
  render() {
    return (
      <Page
        content={
          <Statistics/>
        }
        footer={
          <PhotoMenu/>
        }
      />
    );
  }
}

MainPage.propTypes = {};
MainPage.defaultProps = {};

export default MainPage;
