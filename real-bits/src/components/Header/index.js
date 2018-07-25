import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import _ from 'lodash';
import { Image, List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { withRouter } from 'react-router';


class Header extends Component {
	state = { activeItem: '' }
	handleItemClickSignUp = (e, { name }) => {
		this.setState({
			activeItem: name
		}
		)
		this.props.history.push("/signup");
	}

	handleItemClickLogin = (e, { name }) => {
		this.setState({
			activeItem: name
		}
		)
		this.props.history.push("/login");
	}

	render() {
		const { activeItem } = this.state
		return (
			<div className="header" >
				<Segment inverted>
					<Menu inverted pointing secondary >
						<Menu.Item name='Signup' active={activeItem === 'Signup'} onClick={this.handleItemClickSignUp} >
							<Icon name='signup' /> Sign Up
		  				</Menu.Item>
						<Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleItemClickLogin} >
							<Icon name='sign in' />Login
		  				</Menu.Item>
					</Menu>
				</Segment>
			</div>
		);
	}
}

export default withRouter(Header);


