import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Page from '../layouts/Page';

class IndexPage extends Component {
  render() {
    return (
      <Page
        content={
          <div>Hello world!</div>
        }
      />
    );
  }
}

IndexPage.propTypes = {};
IndexPage.defaultProps = {};

export default IndexPage;
