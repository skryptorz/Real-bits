import React, { Component } from 'react';
import './style.css';
import _ from 'lodash';
import $ from "jquery";
import {  withRouter } from 'react-router';
import createHistory from 'history/createBrowserHistory';


const history = createHistory()

class Login extends Component {

	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this);
	}
	state = {
		DBpassword: '',
		InputPassword: '',
			};

	onSubmit(event) {
		event.preventDefault();
		this.setState({
			InputPassword: this.Password.value
		});
		this.getPassword();
	}

	getPassword = _ => {
const { handle } = this.props.match.params
console.log(this.props.match.params);
		var url = "http://localhost:4000/id?" + $.param({ Email: this.Email.value })
var RedirectionUrl='/dashboard/'+this.Email.value 
console.log(RedirectionUrl);
		fetch(url).then(response => response.json())
			.then((response) => {
				this.setState({ DBpassword: response.data })
				if (this.state.DBpassword === this.state.InputPassword) {
					this.props.history.push(RedirectionUrl)
					this.props.loginStatus()
				}
			})


	}

	render() {
		return (

			<div>

				<div id="login">
					<h1>Welcome Back!</h1>
					<div>
						{this.state.DBpassword}
						{this.state.InputPassword}
					
					</div>

					<form onSubmit={this.onSubmit}>
						<div className="field-wrap">
							<label>
								Email Address<span className="req">*</span>
							</label>
							<input type="email" name="Email" id="Email" ref={input => this.Email = input} required />
						</div>
						<div className="field-wrap">
							<label>
								Password<span className="req">*</span>
							</label>
							<input type="password" name="Password" id="Password" ref={input => this.Password = input} required />
						</div>

						<button type="submit"  className="button button-block">Log In</button>

					</form>

				</div>
			</div>
		);


	}
}


export default withRouter(Login);