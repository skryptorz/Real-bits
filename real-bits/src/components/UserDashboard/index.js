import React, { Component } from 'react';
import _ from 'lodash';



class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

            userId: props.match.params.email
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
		event.preventDefault();
		this.props.history.push('/App')
	}

    render() {
        return (
            <div>
                <h3>{this.state.userId} ! This is your Dashboard.</h3>


                <form onSubmit={this.onSubmit}>

                    <button type="submit">Application</button>

                </form>
            </div>
        );


    }



}


export default UserDashboard;