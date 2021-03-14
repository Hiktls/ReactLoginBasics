import React from 'react'; // Importing Packages
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/global.css'
import { // This so we can render components without rendering everything again.
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SignUpForm from './components/SignUpForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';


// If the path is /signup or /login, render their components
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

