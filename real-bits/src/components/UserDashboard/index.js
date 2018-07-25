import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";
import App from './../App';
import Login from './../Login';
import Account from './../Account';
import Campaigns from './../Campaigns';
import PaymentPage from './../PaymentPage';
import AccountHome from './../AccountHome';
import { withRouter } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { Menu } from "@material-ui/icons";
import sidebarStyle from "./../UserDashboard/sidebarStyle";
import './style.css';
import { NavLink } from "react-router-dom";
import cx from "classnames";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "material-ui";
import Typography from 'material-ui/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import image from "./../UserDashboard/house.jpg";
const appbarStyle = {
  backgroundColor: '#6f96d6',
  height: '50px',

};
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "open": false,
      "show": null,
      mobileOpen: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  showLogout = () => {
    this.setState({ show: 'Logout', open: false });
  };
  showAccountHome = () => {
    this.setState({ show: 'AccountHome', open: false });
  };

  showCampaigns = () => {
    this.setState({ show: 'Campaigns', open: false });
  };

  showAccount = () => {
    this.setState({ show: 'Account', open: false });
  };
  showPaymentPage = () => {
    this.setState({ show: 'PaymentPage', open: false });
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    let content = null;
    switch (this.state.show) {
      case 'AccountHome':
        content = (<AccountHome />);
        break;
      case 'Home':
        this.props.history.push('/app/home');
        break;
      case 'Logout':
        sessionStorage.removeItem('user');
        this.props.history.push('/');
        break;
      case 'Campaigns':
        content = (<Campaigns />);
        break;
      case 'Account':
        content = (<Account />);
        break;
      case 'PaymentPage':
        content = (<PaymentPage />);
        break;
      default:
    }
    const { color } = this.props;
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Hidden smDown>
          <Drawer
            anchor="left"
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.sidebarWrapper}>
              <ListItem button id="AccountHomeId" onClick={this.showAccountHome} >Account Home</ListItem>
              <ListItem button id="showAccountId" onClick={this.showAccount}>Account</ListItem>
              <ListItem button id="showCampaignsId" onClick={this.showCampaigns}>Campaigns</ListItem>
              <ListItem button id="showPaymentId" onClick={this.PaymentPage}>Payments</ListItem>
              <ListItem button id="showLogoutId" onClick={this.showLogout}>Logout</ListItem>
            </div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden mdUp>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon onClick={this.handleToggle} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}
          >
            <div className={classes.sidebarWrapper}>
              <ListItem button id="AccountHomeId" onClick={this.showAccountHome} >Account Home</ListItem>
              <ListItem button id="showAccountId" onClick={this.showAccount}>Account</ListItem>
              <ListItem button id="showCampaignsId" onClick={this.showCampaigns}>Campaigns</ListItem>
              <ListItem button id="showPaymantId" onClick={this.showPaymentPage}>Payments</ListItem>
              <ListItem button id="showLogoutId" onClick={this.showLogout}>Logout</ListItem>
            </div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <div className={classes.mainPanel} ref="mainPanel">
          {content}
        </div>
      </div>
    );
  }
}
UserDashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(sidebarStyle)(UserDashboard));
