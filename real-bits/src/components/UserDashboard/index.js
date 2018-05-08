import React, { Component } from 'react';
import _ from 'lodash';
import ResponsiveDrawer from './../ResponsiveDrawer';


class UserDashboard extends Component {
    constructor(props) {
        super(props);
               this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
		event.preventDefault();
		this.props.history.push('/App')
	}

    render() {
        return (
            <div>
<ResponsiveDrawer />
                <h3>{this.props.location.state.data} ! This is your Dashboard.</h3>


                <form onSubmit={this.onSubmit}>

                    <button type="submit">Application</button>

                </form>
            </div>
        );


    }



}


export default UserDashboard;