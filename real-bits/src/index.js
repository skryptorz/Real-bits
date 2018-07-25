import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import App from './components/App';
import Home from './components/Home';
import IndexPage from './components/IndexPage';
import UserDashboard from './components/UserDashboard';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './index.css';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import productsReducer from './reducers/productReducer';
import thunk from 'redux-thunk';
import PrivateRoute from './components/PrivateRoute';

const history = createHistory()
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(allReducers,
  {
    products: [{ name: 'iphone' }],
    user: ''
  }
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" exact strict component={IndexPage} />
        <Route path="/login" exact strict component={Login} />
        <Route path="/signup" exact strict component={SignUp} />
        <PrivateRoute path="/dashboard" exact strict component={UserDashboard} />
        <Route path="/app/home" exact strict component={Home} />
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
