import React, { Component } from 'react';
import './style.css';
import _ from 'lodash';
import Header from './../Header';
import createHistory from 'history/createBrowserHistory';
import { withRouter } from 'react-router';
import { Button, Input, Icon, Grid, Image, Label, Form, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const history = createHistory()

class SignUp extends Component {
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this);
	}
	state = {
		msg: '',
		content: '',
		header: ''
	};

	onSubmit(event) {
		event.preventDefault();
		var url = new URL("http://ec2-34-210-11-118.us-west-2.compute.amazonaws.com:4000/users"),
			params = { FirstName: this.FirstName.value, LastName: this.LastName.value, Email: this.Email.value, Password: this.Password.value }
		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

		fetch(url)
			.then(response => response.json())
			.then((response) => {
				if (response.data === 'success') {
					this.setState({
						msg: 'success',
						content: 'You may now log-in with the email you have chosen',
						header: 'Your user registration was successful'
					});
				} else {
					content: 'Registration failed,please try again'
				}
			})
	}

	render() {
		return (
			<div id="signup">
				<Form success={this.state.msg} onSubmit={this.onSubmit}>
					<p class="header">First Name</p>
					<input type="text" name="FirstName" id="FirstName" placeholder="First Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Full Name';}" ref={input => this.FirstName = input} required  >
					</input >
					<p class="header">Last Name</p>
					<input type="text" name="LastName" id="LastName" placeholder="Last Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Full Name';}" ref={input => this.LastName = input} required  >
					</input >
					<p class="header">Email Address</p>
					<input type="email" name="Email" id="Email" ref={input => this.Email = input} onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" placeholder='Email' required >
					</input >
					<p class="header">Password</p>
					<input type="password" name="Password" ref={input => this.Password = input} placeholder="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required="required">
					</input>
					<input type="submit" class="register" value="Sign up"></input>
					<Message
						success
						header='Your user registration was successful'
						content='You may now log-in with the email you have chosen'
					/>
				</Form>
			</div>
		);
	}
}
export default withRouter(SignUp);