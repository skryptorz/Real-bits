import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import App from './../App';
import Login from './../Login';
import { withRouter } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar'

const paperStyle = {
    height: '100%',
    width: "100%",
    margin: '1%',
    textAlign: 'center',
    display: 'inline-blsock',
};


class ResponsiveDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    showBar = () => {
        this.setState({show: 'bar', open: false });
    };

    showFoo = () => {
        this.setState({show: 'foo', open: false });
    };

    render() {
        let content = null;

        switch(this.state.show) {
            case 'foo':
                content = (<App/>);
                break;

            case 'bar':
            this.props.history.push('/');
                break;

            default:
                
        }

        return (
            <div className="App">

                <AppBar
                  
                    onLeftIconButtonClick={this.handleToggle}
                />
                
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                    
                    <MenuItem id="showFooId" onClick={this.showFoo}>Home</MenuItem>
                    <MenuItem id="showBarId" onClick={this.showBar}>Logout</MenuItem>

                </Drawer>
                
                
<div>
                 
                    {content}
                    
                </div>
            </div>
        );
    }
}
export default withRouter(ResponsiveDrawer);
// import React from 'react';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';
// import { Link } from 'react-router-dom';
// export default class ResponsiveDrawer extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {open: false};
//   }

//   handleToggle = () => this.setState({open: !this.state.open});

//   handleClose = () => this.setState({open: false});

//   render() {
//     return (
//       <div>
//         <RaisedButton
//           label="Open Drawer"
//           onClick={this.handleToggle}
//         />
//         <Drawer
//           docked={false}
//           width={200}
//           open={this.state.open}
//           onRequestChange={(open) => this.setState({open})}
//         >
//           <MenuItem onClick={this.handleClose}><Link to="/App" >Real-Bit$</Link></MenuItem>
//           <MenuItem onClick={this.handleClose}><Link to="/" >Logout</Link></MenuItem>
//           <MenuItem onClick={this.handleClose}><Link to="/campaigns" >Campaigns</Link></MenuItem>
//           <MenuItem onClick={this.handleClose}><Link to="/account" >Account</Link></MenuItem>
//         </Drawer>
//       </div>
//     );
//   }
// }