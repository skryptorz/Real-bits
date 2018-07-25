import React, { Component } from 'react';
import './style.css';
import _ from 'lodash';
import $ from "jquery";
import { withRouter } from 'react-router';
import SignUp from './../SignUp';
import { Link } from 'react-router-dom';
import Header from './../Header';
import createHistory from 'history/createBrowserHistory';
import { Button, Input, Icon, Grid, Image, Label, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { updateUser } from '../../actions/user-actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const history = createHistory()

class Login extends Component {
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this);
	}

	state = {
		DBpassword: '',
		InputPassword: '',
		user: ''
	};

	componentDidMount() {
		sessionStorage.removeItem('user');
		$(document).ready(function () {
			$("#logintab").click(function () {
				$("#signin-agile").show();
				$("#signup-agile").hide();
			});
			$("#signuptab").click(function () {
				$("#signup-agile").show();
				$("#signin-agile").hide();
			});
			$('.tab a,.links a').on('click', function (e) {
				e.preventDefault();
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			});
		});
	}

	onSubmit(event) {
		event.preventDefault();
		this.setState({
			InputPassword: this.Password.value,
			user: this.Email.value
		});
		this.getPassword();
	}

	getPassword = _ => {
		var url = "http://ec2-34-210-11-118.us-west-2.compute.amazonaws.com:4000/id?" + $.param({ Email: this.Email.value })
		var RedirectionUrl = '/dashboard'
		fetch(url).then(response => response.json())
			.then((response) => {
				this.setState({ DBpassword: response.data })
				if (this.state.DBpassword === this.state.InputPassword) {
					this.props.onUpdateUser(this.state.user);
					sessionStorage.setItem('user', this.props.user);
					this.props.history.push(RedirectionUrl, { data: this.Email.value })
				}
			})
	}

	render() {
		return (
			<div className="bodylogin">
				<div className="form-w3ls">
					<div className="formout">
						<div className="form-head-w3l">
						</div>
						<ul className="tab-group cl-effect-4" id="tab-group cl-effect-4">
							<li id="signuptab" className="tab"><a >Sign up</a></li>
							<li id="logintab" className="tab active"><a>Sign In</a></li>
						</ul>
						<div className="tab-content">
							<div id="signin-agile">
								<form onSubmit={this.onSubmit}>
									<p className="header">Enter Email</p>
									<input type="text" name="Email" placeholder="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'User Name';}" ref={input => this.Email = input} required="required" />
									<p className="header">Password</p>
									<input type="password" name="Password" placeholder="Password" ref={input => this.Password = input} onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required="required" />
									<input type="submit" className="sign-in" defaultValue="Login" />
								</form>
							</div>
							<div id="signup-agile">
								<SignUp />
							</div>
						</div>
					</div>
				</div>
			</div>
		);


	}
}

const mapStateToProps = state => (
	{
		products: state.products,
		user: state.user
	}
);

const mapActionsToProps = (dispatch) => {
	return bindActionCreators({
		onUpdateUser: updateUser
	}, dispatch);

}
export default connect(mapStateToProps, mapActionsToProps)(withRouter(Login));