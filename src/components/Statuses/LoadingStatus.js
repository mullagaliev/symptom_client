import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dimmer, Loader, Image, Segment} from 'semantic-ui-react'

const styles = require('./LoadingStatus.sass');

class LoadingStatus extends Component {
  render() {
    return (
      <div className={styles.Loading}>
        <Dimmer active>
          <Loader size='massive'>
            Loading...
          </Loader>
        </Dimmer>
      </div>
    );
  }
}

LoadingStatus.propTypes = {};
LoadingStatus.defaultProps = {};

export default LoadingStatus;
