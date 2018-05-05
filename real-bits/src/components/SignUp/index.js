import React, { Component } from 'react';

import _ from 'lodash';






class SignUp extends Component {
 
constructor(props) {
        super(props)
        this.onSubmit=this.onSubmit.bind(this);
    }



 onSubmit(event){
	 event.preventDefault();
        console.log(this.FirstName.value);
		console.log(this.LastName.value);
		console.log(this.Email.value);
		console.log(this.Password.value);
		
		
		var url = new URL("http://ec2-34-210-11-118.us-west-2.compute.amazonaws.com:4000/users"),
    params = {FirstName:this.FirstName.value, LastName:this.LastName.value, Email:this.Email.value,Password:this.Password.value}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))



fetch(url, {mode:"no-cors"   
    }).catch(err=> console.error(err))
    }
	render(){
		return(
	
          <div id="signup">   
            <h1>New Here? Sign-Up</h1>
            <form onSubmit={this.onSubmit} >
              <div className="top-row">
                <div className="field-wrap">
                  <label>
                    First Name<span className="req">*</span>
                  </label>
                  <input type="text" name="FirstName" id="FirstName" ref={input=> this.FirstName=input} required  />
                </div>
                <div className="field-wrap">
                  <label>
                    Last Name<span className="req">*</span>
                  </label>
                  <input type="text" name="LastName" id="LastName" ref={input=> this.LastName=input}required  />
                </div>
              </div>
              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input type="email" name="Email" id="Email" ref={input=> this.Email=input}required  />
              </div>
              <div className="field-wrap">
                <label>
                  Enter Password<span className="req">*</span>
                </label>
                <input type="password" name="Password" id="Password" ref={input=> this.Password=input}required  />
              </div>
              <button type="submit" className="button button-block">Register</button>
            </form>
          </div>
          
		);
	

}

}

export default SignUp;