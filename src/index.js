import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router , Switch  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Users from './users';
import Nuevo from './Nuevo';
import * as serviceWorker from './serviceWorker';
const routing = (
  <Router>
    <div className="container">
    <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/nuevo">Nuevo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Lista</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/usuarios/:id" component={Users} />
        <Route path="/nuevo" component={Nuevo} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();