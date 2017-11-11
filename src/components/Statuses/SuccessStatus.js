import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dimmer, Loader, Image, Segment, Message, Icon} from 'semantic-ui-react'

class SuccessStatus extends Component {
  render() {
    return (
      <Message color='green' size="massive">
        <Message.Content>
          <Icon name='checkmark' size="large"/>
          <Message.Header>Фото успешно отправлены</Message.Header>
        </Message.Content>
      </Message>
    );
  }
}

SuccessStatus.propTypes = {};
SuccessStatus.defaultProps = {};

export default SuccessStatus;
