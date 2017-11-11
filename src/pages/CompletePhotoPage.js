import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Message } from 'semantic-ui-react';

import Page from '../layouts/Page';
import PhotoMenu from '../components/menu/PhotoMenu';
import Statistics from '../components/Statistics/Statistics';

class CompletePhotoPage extends Component {
  render() {
    return (
      <Page
        content={
          <Message color='green' className={'alignCenter'}>
            Фото отправлены
          </Message>
        }
        footer={
          <PhotoMenu/>
        }
      />
    );
  }
}

CompletePhotoPage.propTypes = {};
CompletePhotoPage.defaultProps = {};

export default CompletePhotoPage;
