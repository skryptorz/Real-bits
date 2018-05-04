import React, { Component } from 'react';
import './style.css';
import SiginUp from './../SignUp';
import Login from './../Login';
import App from './../App';
import _ from 'lodash';

import { Link } from 'react-router-dom';


class Home extends Component {
	constructor(props) {
		super(props);	
		this.state = {
			shouldRender: true,
			loginStatus: false,
		};
		this.onClick = this.onClick.bind(this);
		this.ChangeLoginStatus = this.ChangeLoginStatus.bind(this);
	}

	ChangeLoginStatus() {
		this.setState({
			loginStatus: true
		});
	}

	renderContent() {
		if (this.state.shouldRender) {
			return <SiginUp />;
		}
	}

	onClick() {
		this.setState({
			shouldRender: false
		});
	}

	onClick1() {
		this.setState({
			shouldRender: true
		});
	}
	

	render() {
		if (!this.state.shouldRender) {
			return (
				<div>
					<Login
						loginStatus={this.ChangeLoginStatus}
					/>
				</div>
			);
		} else {
			return (
				
					<div>
						{this.state.loginStatus}
						
								<div className="form">
									<ul className="tab-group">
										<li className="tab active"><Link to="#signup" onClick={this.onClick1.bind(this)}>Sign Up</Link></li>
										<li className="tab" ><Link to="/#login" onClick={this.onClick} >Log In</Link></li>
									</ul>
									<div className="tab-content">
										{this.renderContent()}
									</div>
								</div>
						

						
					</div>
			
			);
		}
	}
}

export default Home;


