import React, {Component} from 'react';
import logo from './logo.svg';
import {Button} from 'semantic-ui-react';
import {Provider} from 'react-redux';
import classNames from 'classnames';

import 'semantic-ui-css/semantic.min.css';

import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import LoadingPage from './pages/LoadingPage';
import CameraPage from './pages/CameraPage';
import CompletePhotoPage from './pages/CompletePhotoPage';

import configureStore from './store';
import rootSaga from './sagas';


import {CSSTransitionGroup} from 'react-transition-group';

import './style/global.css';

const store = configureStore();
store.runSaga(rootSaga);


const styles = require('./App.sass');

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/'>
            <div className={classNames(styles.App, styles.BgImage)}>
              <Switch>
                <Route exact path='/' component={SignInPage}/>
                <Route exact path='/main' component={MainPage}/>
                <Route exact path='/camera' component={CameraPage}/>
                <Route exact path='/complete' component={CompletePhotoPage}/>
                <Route exact path='/login' component={SignInPage}/>
                <Route exact path='/reg' component={SignUpPage}/>
                <Route component={LoadingPage}/>
              </Switch>
            </div>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
