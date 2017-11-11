import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import PhotoModal from '../modal/PhotoModal';

const styles = require('./PhotoMenu.sass');

class PhotoMenu extends Component {
  render() {
    return (
      <div className={styles.Menu}>
        <Button.Group fluid widths='3' size={'large'}>
          <Button>Главная</Button>
          <Button disabled>----</Button>
          <Button>Настройки</Button>
        </Button.Group>
        <div className={styles.MenuItemPhoto}>
          <PhotoModal/>
        </div>
      </div>
    );
  }
}

PhotoMenu.propTypes = {};
PhotoMenu.defaultProps = {};

export default PhotoMenu;
