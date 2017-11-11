import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dimmer, Loader, Image, Segment} from 'semantic-ui-react'

class LoadingStatus extends Component {
  render() {
    return (
      <div>
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
