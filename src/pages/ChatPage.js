import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Page from '../layouts/Page';


class ChatPage extends Component {
  render() {
    return (
      <Page
        content={
          <div>
            <div>chat</div>
          </div>
        }
        fullScreen={true}
        footer={<div></div>}
      />
    );
  }
}

ChatPage.propTypes = {};
ChatPage.defaultProps = {};

export default ChatPage;
