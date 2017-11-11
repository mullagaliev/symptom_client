import React, {Component} from 'react';
import classNames from 'classnames';
import {Redirect} from 'react-router';
import { Form, Segment, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import StatusSwitcher from '../../components/common/Statuses/StatusSwitcher';
import REQUEST_STATUSES from '../../constants/requestStatuses';

// const styles = require('./Login.sass');


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      showError: false,
      errors: [],
      wasSubmit: true,
    };
  }

  onChangeLogin(e){
    this.setState({login: e.target.value});
  }

  onChangePassword(e){
    this.setState({password: e.target.value});
  }

  onLogin(e){
    e.preventDefault();
    console.log(e);
    const {login, password} = this.state;
    this.props.onLogin(login.trim().toLowerCase(), {password: password.trim()});
  }

  render() {
    const {serverError, requestStatus} = this.props;
    const {login, password} = this.state;
    return (
      <div className="alignCenter">
        <Form onSubmit={this.onLogin.bind(this)}>
          <Segment stacked>
            <Form.Field>
              <label>Логин</label>
              <input placeholder='Andrew'
                     value={login}
                     name="login"
                     onChange={this.onChangeLogin.bind(this)}
              />
            </Form.Field>
            <Form.Field>
              <label>Пароль</label>
              <input placeholder='********'
                     type="password"
                     value={password}
                     name="password"
                     onChange={this.onChangePassword.bind(this)}
              />
            </Form.Field>
            <Link to={`/main`}>
              <Button type="submit" color={'teal'}>Вход</Button>
            </Link>
            <Link to={`/reg`}>
              <Button type="button" color={'blue'}>Регистрация</Button>
            </Link>
          </Segment>
        </Form>
      </div>
    );
  }
}

export default Login;
