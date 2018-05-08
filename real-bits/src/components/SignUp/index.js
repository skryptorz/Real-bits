import React, { Component } from 'react';
import './style.css';
import _ from 'lodash';
import Header from './../Header';
import createHistory from 'history/createBrowserHistory';
import {  withRouter } from 'react-router';
import { Button, Input, Icon, Grid, Image, Label, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
const history = createHistory()



class SignUp extends Component {
 
constructor(props) {
        super(props)
        this.onSubmit=this.onSubmit.bind(this);
    }



 onSubmit(event){
	 event.preventDefault();
    		
		
		var url = new URL("http://ec2-34-210-11-118.us-west-2.compute.amazonaws.com:4000/users"),
    params = {FirstName:this.FirstName.value, LastName:this.LastName.value, Email:this.Email.value,Password:this.Password.value}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))



fetch(url)
.then(response => response.json())
			.then((response) => {
        
        if(response.data==='success'){
          this.props.history.push('/login')
        }
			})    }
	render(){
		return(
	
           <div id="signup">   
            <Header/>
            <Grid container columns={2} padded='vertically'>
						<Grid.Column color='teal' floated='centered' mobile={16} tablet={8} computer={6}>
							<Label attached='top left' color='grey' size='big'>New Here? Sign-Up </Label>
							<br></br>
							<br></br>

							<Form onSubmit={this.onSubmit}>
            						  <label>First Name </label>
              							<input type="text" name="FirstName" id="FirstName" placeholder='First Name'ref={input=> this.FirstName=input} required  >

								</input >
             						       <br></br>
								<br></br>
                						<label>Last Name </label>
                  						<input type="text" name="LastName" id="LastName" placeholder='Last Name' ref={input=> this.LastName=input}required  >

								</input >
                						<br></br>
								<br></br>
								<label>Enter Email  </label>

								<input type="email" name="Email" id="Email" ref={input => this.Email = input} placeholder='Email' required >

								</input >
								<br></br>
								<br></br>
								<label>Enter Password  </label>
								<input type="password" name="Password" id="Password" ref={input => this.Password = input} placeholder='Password' required >

								</input >

								<br></br>
								<br></br>
								<div >
								<Button type='submit' icon labelPosition='left' inverted >
								<Icon name='signup' />
								Signup
    								</Button>

								</div>
							</Form>
						</Grid.Column>

					</Grid>


				</div>
          
		);
	

}

}

export default withRouter(SignUp);