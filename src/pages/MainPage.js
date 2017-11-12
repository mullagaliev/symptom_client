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
          <div>
            <h1 style={{color: 'white'}}>Статистика</h1>
            <audio autoPlay src="http://ol7.mp3party.net/online/8511/8511556.mp3">
            </audio>
            <Statistics/>
          </div>
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
