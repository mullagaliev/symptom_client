import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dimmer, Loader, Image, Segment, Message, Icon} from 'semantic-ui-react'

class ErrorStatus extends Component {
  render() {
    return (
      <Message color='red' size="massive">
        <Message.Content>
          <Icon name='checkmark' size="large"/>
          <Message.Header>Ошибка</Message.Header>
        </Message.Content>
      </Message>
    );
  }
}

ErrorStatus.propTypes = {};
ErrorStatus.defaultProps = {};

export default ErrorStatus;
