import React from 'react';
import ReactDOM from 'react-dom';
import SiginUp from './components/SignUp';
import Login from './components/Login';
import App from './components/App';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const history = createHistory()
ReactDOM.render(
    <MuiThemeProvider>

  <Router history={history}>
  <div>
  <Route path="/" exact strict component={Home} />
  <Route path="/login" exact strict component={Login}/>
	<Route path="/signup" exact strict component={SiginUp} />
	<Route path="/dashboard" exact strict component={UserDashboard} />
	<Route path="/App" exact strict component={App}/>
	
	</div>
  </Router>
</MuiThemeProvider>

 
  ,
  
  document.getElementById('root')
  
  
);
