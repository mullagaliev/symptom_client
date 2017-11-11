import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class PhotoModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
    <Modal
      trigger={
        <Button circular
                icon={<Icon name={'camera retro'} color={'teal'}/>}
                size='massive'
                className={'m0'}
                style={{fontSize: "3.9rem"}}
                onClick={this.handleOpen}
        />}
      open={this.state.modalOpen}
      onClose={this.handleClose}
      basic
      size='small'
    >
      <Header icon='help circle' content='Краткая инструкция' />
      <Modal.Content size={'large'}>
        <ol>
          <li>Найдите место с достаточной освещенностью</li>
          <li>Сделайте одно своё фото</li>
          <li>Готово</li>
        </ol>
      </Modal.Content>
      <Modal.Actions>
        <Link to='/camera'>
          <Button color='teal' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Окей, я понял
          </Button>
        </Link>
      </Modal.Actions>
    </Modal>
    );
  }
}

PhotoModal.propTypes = {};
PhotoModal.defaultProps = {};

export default PhotoModal;
