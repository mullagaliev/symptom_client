import React from 'react';
import logo from '../static/logo.png';
// import logoWhite from '../logo-psb-white.png';
import {Menu, Button, Icon, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
const classNames = require('classnames');
const styles = require('./Page.sass');


export default class Page extends React.Component {
  render() {
    return <div className={classNames(styles.Screen)}>
      <Container className={styles.Header}>
        {this.props.header ? this.props.header : (
          <div className={styles.HeaderLogo}>
            <Link to={`/main`}>
              <img src={logo}/>
            </Link>
          </div>
        )}
      </Container>
      {
        this.props.fullScreen ? <div className={styles.ContentFull}>
          { this.props.content }
        </div> :
          <Container className={ styles.Content}>
            { this.props.content }
          </Container>
      }
      <div className={styles.Footer}>
        { Boolean(this.props.footer) ?
          this.props.footer :
          <div className="menu-bottom">
            <Menu compact widths={4}>
              <Menu.Item className="active">
                <Link to={`/main`}>
                  <Icon name='block layout' size="large" color={'orange'}/>
                  <span>Главная</span>
                </Link>
              </Menu.Item>
              <Menu.Item>
                {/*<Link to={`/main`}>*/}
                <Icon name='history' size="large"/>
                <span>История</span>
                {/*</Link>*/}
              </Menu.Item>
              <Menu.Item >
                {/*<Link to={`/main`}>*/}
                <Icon name='comments' size="large"/>
                <span>Помощь</span>
                {/*</Link>*/}
              </Menu.Item>
              <Menu.Item>
                <Link to={`/settings`}>
                  <Icon name='setting' size="large"/>
                  <span>Настройки</span>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        }
      </div>
    </div>;
  }
}

Page.defaultProps = {
  header: null,
  content: null,
  footer: null,
  blurBg: false
};

export {Page};
