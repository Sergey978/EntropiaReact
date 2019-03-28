import React, { Component } from 'react';
import { FormState, Form } from 'react-formstate';
import RfsInput from '../inputs/rfs-bootstrap/RfsInput';
import ApiService from '../../services/api-service';

import 'babel-polyfill';

import './signup-form.css';

export default class SigninForm extends Component {

  apiService = new ApiService();

  constructor(props) {
    super(props);

    // This is an instance of the API. It will bind to
    // form fields configured in your JSX. It normally
    // assumes state is held in this.state, but you can configure
    // it to work with a state management solution like Redux.
    this.formState = FormState.create(this);     
    this.handleUsernameChange = this.handleUsernameChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  //
  //
  // Render
  //
  //

  render() {
    return (
      <Form formState={this.formState} onSubmit={this.handleSubmit} id="SigninForm" method="post">

        <div className="top-margin">
          <RfsInput
            formField='username'
            label='Username / Email'
            handleValueChange={v => this.handleUsernameChange(v)}
                     
          />
        </div>
        <div className="top-margin">
          <RfsInput
            type='password'
            formField='Password'
            label='Password'   
            handleValueChange={v => this.handlePasswordChange(v)}                 
            preferNull
          />
        </div>
        <hr />

        <div className="row">
          <div className="col-lg-8">
            <b><a href="">Forgot password?</a></b>
          </div>
          <div className="col-lg-4 text-right">
            <button className="btn btn-action" type="submit">Sign in</button>
          </div>
        </div>
      </Form>
    );
  }
    

  //
  //
  // Handlers
  //
  //


  handleUsernameChange(username, formField) {
    console.log(formField);
    const context = this.formState.createUnitOfWork();
     context.set('username', username);     
      context.updateFormState();
      return;
  }

  handlePasswordChange(password){
const context = this.formState.createUnitOfWork();
context.set('Password', password);
context.updateFormState();
return;

  }



  handleSubmit(e) {
    e.preventDefault();
    const model = this.formState.createUnitOfWork().createModel();
    if (model) {
      //  alert(JSON.stringify(model)); // proceed with valid data   
      const data = new FormData(e.target);

      var form_data = "";
      for (const prop in model) {
        form_data = form_data + prop + "=" + model[prop] + "&";
      }
      this.apiService.postForm('/account/signin/', form_data);

    }
    // else: createModel called setState to set the appropriate validation messages
  }

}