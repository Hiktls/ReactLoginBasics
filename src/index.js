import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/global.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignUpForm from './components/SignUpForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';

ReactDOM.render(
  <Router>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  <Switch>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/login">
        <LoginForm/>
      </Route>
  </Switch>
  </Router>,
    document.getElementById('root')
);

