import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Form, Message } from 'semantic-ui-react';
import Login from './../Login';
import './style.css';
import _ from 'lodash';
import $ from "jquery";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      LastName: '',
      Email: sessionStorage.getItem('user'),
      Phone_Number: '',
      Pan_Number: '',
      Passport_Number: '',
      Maiing_address: '',
      mailing_street: '',
      mailing_city: '',
      mailing_country: '',
      mailing_state: '',
      mailing_zipcode: '',
      permanent_address: '',
      permanent_street: '',
      permanent_city: '',
      permanent_country: '',
      permanent_state: '',
      permanent_zipcode: '',
      checked: false,
      msg: '',
      content: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.findUserByEmailId(this.state.Email)
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    })
    console.log(this.state.checked)
    if (!this.state.checked) {
      this.setState({
        permanent_address: this.Maiing_address.value,
        permanent_street: this.mailing_street.value,
        permanent_city: this.mailing_city.value,
        permanent_zipcode: this.mailing_zipcode.value
      });

    }
    else {
      this.setState({
        permanent_address: '',
        permanent_street: '',
        permanent_city: '',

        permanent_zipcode: '',
      });
    }
  }
  onSubmit(event) {
    event.preventDefault();

    this.submitAccountDetails();
  }
 
  submitAccountDetails = _ => {
    var url = new URL("http://ec2-34-210-11-118.us-west-2.compute.amazonaws.com:4000/registerAccount"),
      params = { FirstName: this.FirstName.value, LastName: this.LastName.value, Email: this.Email.value, Phone_Number: this.Phone_Number.value, Pan_Number: this.Pan_Number.value, Passport_Number: this.Passport_Number.value, Maiing_address: this.Maiing_address.value, mailing_street: this.mailing_street.value, mailing_city: this.mailing_city.value, mailing_zipcode: this.mailing_zipcode.value, permanent_address: this.permanent_address.value, permanent_street: this.permanent_street.value, permanent_city: this.permanent_city.value, permanent_zipcode: this.permanent_zipcode.value }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
      .then(response => response.json())
      .then((response) => {
        console.log(response.data);
        if (response.data === 'success') {
          this.setState({
            msg: 'success',
            content: 'Saved successfully, you can also update again '

          });
        } else {
          content: 'Something went wrong, contact customer care'

        }
      })
      .catch(err => console.error(err))
  }


  findUserByEmailId(EmailId) {
    var url = "http://ec2-34-210-11-118.us-west-2.compute.amazonaws.com:4000/account?" + $.param({ Email: EmailId })
    fetch(url).then(response => response.json())
      .then((response) => {
        this.setState({
          FirstName: response.firstname,
          LastName: response.lastname,
        });
      });
  }

  render() {
        return (
      <div className="user">
        <div className="account">

          <h3>Accounts page</h3>
          <Form success={this.state.msg} className="form-horizontal" onSubmit={this.onSubmit}>

            {/* Text input*/}
            <div className="left">
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">First Name</label>
                <div className="col-md-4">
                  <input id="FirstName" name="FirstName" type="text" value={this.state.FirstName} ref={input => this.FirstName = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">Last Name</label>
                <div className="col-md-4">
                  <input id="LastName" name="LastName" type="text" value={this.state.LastName} ref={input => this.LastName = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">Email Id</label>
                <div className="col-md-4">
                  <input id="Email" name="Email" type="text" value={this.state.Email} ref={input => this.Email = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">PAN Number</label>
                <div className="col-md-4">
                  <input id="Pan_Number" name="Pan_Number" type="text" ref={input => this.Pan_Number = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">Passport Number</label>
                <div className="col-md-4">
                  <input id="Passport_Number" name="Passport_Number" type="text" ref={input => this.Passport_Number = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">Phone Number</label>
                <div className="col-md-4">
                  <input id="Phone_Number" name="Phone_Number" type="text" ref={input => this.Phone_Number = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">Mailing Address</label>
                <div className="col-md-4">
                  <input id="Maiing_address" name="Maiing_address" type="text" ref={input => this.Maiing_address = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">Street</label>
                <div className="col-md-4">
                  <input id="mailing_street" name="mailing_street" type="text" ref={input => this.mailing_street = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">City</label>
                <div className="col-md-4">
                  <input id="mailing_city" name="mailing_city" type="text" ref={input => this.mailing_city = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Select Basic */}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="selectbasic">Select Country</label>
                <div className="col-md-4">
                  <select id="selectbasic" name="selectbasic" className="form-control">
                    <option value={1}>Select Country</option>
                    <option value={2}>India</option>
                    <option value>United States</option>
                  </select>
                </div>
              </div>
              {/* Select Basic */}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="selectbasic">Select State</label>
                <div className="col-md-4">
                  <select id="selectbasic" name="selectbasic" className="form-control">
                    <option value={1}>Select State</option>
                    <option value={2}>Telangana</option>
                    <option value>California</option>
                  </select>
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">Zip code</label>
                <div className="col-md-4">
                  <input id="mailing_zipcode" name="mailing_zipcode" type="text" ref={input => this.mailing_zipcode = input} placeholder className="form-control input-md" required />
                </div>
              </div>

            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="checkboxes" />
              <div className="col-md-4">
                <label className="checkbox-inline" htmlFor="checkboxes-0">
                  <input type="checkbox" name="checkboxes" id="checkboxes-0" checked={this.state.checked}
                    onChange={this.handleChange} />
                  Same as Mailing Address
          </label>
              </div>
            </div>

            {/* Text input*/}
            <div className="right">
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">Permanent Address</label>
                <div className="col-md-4">
                  <input id="permanent_address" name="permanent_address" type="text" value={this.state.permanent_address} ref={input => this.permanent_address = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">Street</label>
                <div className="col-md-4">
                  <input id="permanent_street" name="permanent_street" type="text" value={this.state.permanent_street} ref={input => this.permanent_street = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">City</label>
                <div className="col-md-4">
                  <input id="permanent_city" name="permanent_city" type="text" value={this.state.permanent_city} ref={input => this.permanent_city = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Select Basic */}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="selectbasic">Select Country</label>
                <div className="col-md-4">
                  <select id="selectbasic" name="selectbasic" className="form-control">
                    <option value>Select Country</option>
                    <option value>India</option>
                    <option value>United States</option>
                  </select>
                </div>
              </div>
              {/* Select Basic */}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="selectbasic">State</label>
                <div className="col-md-4">
                  <select id="selectbasic" name="selectbasic" className="form-control">
                    <option value={1}>Select State</option>
                    <option value={2}>Telangana</option>
                    <option value>California</option>
                  </select>
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="textinput">Zip code</label>
                <div className="col-md-4">
                  <input id="permanent_zipcode" name="permanent_zipcode" value={this.state.permanent_zipcode} type="text" ref={input => this.permanent_zipcode = input} placeholder className="form-control input-md" required />
                </div>
              </div>
              {/* Button */}
              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="submit" />
                <div className="col-md-4">
                  <button id="submit" name="submit" className="btn btn-primary" >Save </button>
                </div>
              </div>
              <Message
                success
                content={this.state.content}
              />
            </div>
          </Form>
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

export default connect(mapStateToProps)(Account);


