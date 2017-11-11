import React, {Component} from 'react';
import REQUEST_STATUSES from '../../constants/requestStatuses';
import StatusLoader from './LoadingStatus';
import SuccessStatus from './SuccessStatus';
import ErrorStatus from './ErrorStatus';

class StatusSwitcher extends Component {
  render() {
    const {status, permanentInitial} = this.props;
    const {
      errorHeader,
      errorContent,
      loadingHeader,
      loadingContent,
      successHeader,
      successContent
    } = this.props;
    const {success, initial} = this.props;
    switch (status) {
      case REQUEST_STATUSES.REQUESTED:
        return <div className={'alignCenter'}>
          {permanentInitial ? initial : null}
          <StatusLoader header={loadingHeader}
                        content={loadingContent}/>
        </div>;
      case REQUEST_STATUSES.FAILED:
        return <div className={'alignCenter'}>
          {permanentInitial ? initial : null}
          <ErrorStatus header={errorHeader}
                       content={errorContent}/>
        </div>;
      case REQUEST_STATUSES.SUCCEEDED:
        return <div className={'alignCenter'}>
          <SuccessStatus header={successHeader}
                         content={successContent}/>
          </div>;
      case REQUEST_STATUSES.NONE:
      default:
        return initial;
    }
  }
}

StatusSwitcher.defaultProps = {
  status: REQUEST_STATUSES.NONE,
  s: false,
  initial: <div></div>,
  errorHeader: 'Error',
  errorContent: 'Some error',
  loadingHeader: 'Loading',
  loadingContent: 'Loading...',
  successHeader: 'Success',
  successContent: 'Success...'
};

export default StatusSwitcher;
