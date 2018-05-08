import React, { Component } from 'react';
import './style.css';
import _ from 'lodash';
import $ from "jquery";
import {  withRouter } from 'react-router';
import Header from './../Header';
import createHistory from 'history/createBrowserHistory';
import { Button, Input, Icon, Grid, Image, Label, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const history = createHistory()

class Login extends Component {

	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this);
	}0
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
		var url = "http://ec2-34-210-11-118.us-west-2.compute.amazonaws.com:4000/id?" + $.param({ Email: this.Email.value })
var RedirectionUrl='/dashboard'
		fetch(url).then(response => response.json())
			.then((response) => {
				this.setState({ DBpassword: response.data })
				if (this.state.DBpassword === this.state.InputPassword) {
					this.props.history.push(RedirectionUrl,{data:this.Email.value})
					
				}
			})


	}

	render() {
		return (

			<div>
			    <Header/>
				<div id="login">
					<div class="page-login" style={{ background: 'transparent'}}>
					<Grid container columns={2} padded='vertically'>
						<Grid.Column color='teal' floated='centered' mobile={16} tablet={8} computer={4} computer={6}>
							<Label attached='top left' color='grey' size='big'>Welcome Back!</Label>
							<br></br>
							<br></br>

							<Form onSubmit={this.onSubmit}>
								<label>Enter Email  </label>

								<input type="email" name="Email" id="Email" ref={input => this.Email = input} placeholder='Email' required>

								</input >
								<br></br>
								<br></br>
								<label>Enter Password  </label>
								<input type="password" name="Password" id="Password" ref={input => this.Password = input} placeholder='Password' required>

								</input >

								<br></br>
								<br></br>
								<div >
									<Button type='submit' icon labelPosition='left' inverted >
										<Icon name='sign in' />
										Login
    										</Button>

								</div>
							</Form>
						</Grid.Column>

					</Grid>

</div>
				</div>
			</div>
		);


	}
}


export default withRouter(Login);