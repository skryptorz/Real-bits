import React, { Component } from 'react';

import _ from 'lodash';
import { Image, List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

class 
Header extends Component {
	
	render() {
		
			return (

				

					<div className="header" >
						<List animated verticalAlign='middle'>
							<List.Item>
								<Icon name='signup' />
								<List.Content>
									<List.Header><Link to="/signup" >Signup</Link></List.Header>
								</List.Content>
							</List.Item>
							<List.Item>
								<Icon name='sign in' />
								<List.Content>
									<List.Header><Link to="/login" >Log In</Link></List.Header>
								</List.Content>
							</List.Item>

						</List>




					</div>




			);
		
	}
}

export default Header;


