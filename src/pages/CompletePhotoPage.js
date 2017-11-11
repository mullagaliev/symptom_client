import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Page from '../layouts/Page';
import PhotoMenu from '../components/menu/PhotoMenu';
import Statistics from '../components/Statistics/Statistics';
import StatusSwitcher from '../components/Statuses/StatusSwitcher';
import REQUEST_STATUSES from '../constants/requestStatuses';


class CompletePhotoPage extends Component {
  state = {
    status: REQUEST_STATUSES.REQUESTED
  };

  constructor(props){
    super(props);
  }

  componentWillMount(){
    setTimeout(()=>{
      this.setState({
        status: REQUEST_STATUSES.SUCCEEDED
      });
    },3000);
  }

  render() {
    const {status} = this.state;
    return (
      <Page
        content={
          <StatusSwitcher status={status}/>
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
