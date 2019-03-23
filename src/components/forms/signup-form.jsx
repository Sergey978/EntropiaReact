import React, { Component } from 'react';
import { FormState, Form } from 'react-formstate';
import RfsInput from '../inputs/rfs-bootstrap/RfsInput';
import ApiService from '../../services/api-service';

import 'babel-polyfill';

// Using the optional validation library to demonstrate fluent api
import { validationAdapter, library as vlib } from 'react-formstate-validation';
import ValidatedCheckbox from '../inputs/rfs-bootstrap/ValidatedCheckbox.jsx';
validationAdapter.plugInto(FormState);

import './signup-form.css';

export default class SignupForm extends Component {

  apiService = new ApiService();

  constructor(props) {
    super(props);

    // This is an instance of the API. It will bind to
    // form fields configured in your JSX. It normally
    // assumes state is held in this.state, but you can configure
    // it to work with a state management solution like Redux.
    this.formState = FormState.create(this);

    this.state = { "userName": "invalid" };

    // defaults to show on change
    this.formState.showMessageOn('blur');
    this.formState.setEnsureValidationOnBlur(true);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  //
  //
  // Validation
  //
  //

  validatePassword(Password, context) {
    if (Password.trim() === '') { return; }
    if (!vlib.regex(Password, /^\S+$/)) { return 'Password must not contain whitespace'; }
    if (Password.length < 6) { return 'Password must be at least 6 characters'; }

    const fi = context.getFieldState('newPassword');
    if (Password.length < 8) {
      fi.setValid('Passwords are ideally at least 8 characters');
      fi.set('warn', true);
      return;
    }
  }

  validateConfirmPassword(confirmation, context) {
    const Password = context.get('Password');
    if (Password.trim() !== '' && confirmation !== Password) {
      return 'Password confirmation does not match';
    }
  }

  //
  //
  // Render
  //
  //

  render() {
    return (
      <Form formState={this.formState} onSubmit={this.handleSubmit} id="SignupForm" method="post">

        <div className="top-margin">
          <RfsInput
            formField='username'
            label='Username'
            required
            fsv={v => v.regex(/^\S+$/).msg('Username must not contain spaces')}
            handleValueChange={v => this.handleUsernameChange(v)}

          />
        </div>

        <div className="top-margin">
          <RfsInput
            formField='email'
            type='email'
            label='Email adress'
            required
            fsv={v => v.email().msg('is not email')
            }
            handleValueChange={v => this.handleEmailChange(v)}
          />
        </div>

        <div className="row top-margin">
          <div className="col-sm-6">
            <RfsInput
              type='password'
              formField='Password'
              label='Password'
              required
              handleValueChange={v => this.handlePasswordChange(v)}
              preferNull
            />
          </div>
          <div className="col-sm-6">
            <RfsInput
              type='password'
              formField='confirmPassword'
              label='Confirm Password'
              required
              preferNull
            />
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-lg-8">
            <ValidatedCheckbox
              formField='AgreementsConfirm'
              label='I agree with '
              linkUrl='page_terms.html'
              linkText='Terms and Conditions'
              required='-'
              fsv={v => v.equals(true).msg('You must agree with Terms and Conditions')}
            />

          </div>

          <div className="col-lg-4 text-right">
            <button className="btn btn-action" type="submit">Register</button>
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

  handleUsernameChange(username) {
    const context = this.formState.createUnitOfWork(),
      fieldState = context.set('username', username);

    fieldState.validate();
    if (fieldState.isInvalid()) {
      context.updateFormState();
      return;
    } // else

    if (username === fieldState.getInitialValue()) {
      fieldState.setValid();
      context.updateFormState();
      return;
    } // else

    const asyncToken = fieldState.setValidating('Verifying username...');
    context.updateFormState();

    // simulate calling an api
    window.setTimeout(() => {
      const context = this.formState.createUnitOfWork(),
        fieldState = context.getFieldState('username', asyncToken);

      // if the token still matches, the username we are verifying is still relevant
      if (fieldState) {

        // check is username is free

        const isUsernameFree = this.apiService.isUserNameExist(username.toLowerCase());

        isUsernameFree.then(function (v) {
          if (v.response === "false") {
            fieldState.setValid('Verified');

          }
          else {
            fieldState.setInvalid('Username already exists');
          }
          context.updateFormState();
        }
        )
          .catch(function (error) {
            fieldState.setInvalid('something wrong happened...');
            context.updateFormState();
          }
          )
      }
    }, 2000);


  }

  handleEmailChange(userEmail) {
    const context = this.formState.createUnitOfWork(),
      fieldState = context.set('email', userEmail);

    fieldState.validate();
    if (fieldState.isInvalid()) {
      context.updateFormState();
      return;
    } // else

    if (userEmail === fieldState.getInitialValue()) {
      fieldState.setValid();
      context.updateFormState();
      return;
    } // else

    const asyncToken = fieldState.setValidating('Verifying user Email...');
    context.updateFormState();


    // calling an api
    window.setTimeout(() => {
      const context = this.formState.createUnitOfWork(),
        fieldState = context.getFieldState('email', asyncToken);

      // if the token still matches, the email we are verifying is still relevant
      if (fieldState) {

        // check is email is free

        const isUserEmailFree = this.apiService.isUserEmailExist(userEmail.toLowerCase());

        isUserEmailFree.then(function (v) {
          if (v.response === "false") {
            fieldState.setValid('Verified');
          }
          else {
            fieldState.setInvalid('Email already exists');
          }
          context.updateFormState();
        }
        )
          .catch(function (error) {
            fieldState.setInvalid('something wrong happened...');
            context.updateFormState();
          }

          )

      }
    }, 2000);
  }


  handlePasswordChange(Password) {
    const context = this.formState.createUnitOfWork();
    context.set('Password', Password).validate();
    context.set('confirmPassword', ''); // clear the confirmation field
    context.updateFormState();
  }


  handleSubmit(e) {
    e.preventDefault();
    const model = this.formState.createUnitOfWork().createModel();
    if (model) {
      //  alert(JSON.stringify(model)); // proceed with valid data   
      const data = new FormData(e.target);

      // console.log(model); 

      // formStringData = JSON.stringify(model) ;

      var form_data = "";
      for (const prop in model) {
        form_data = form_data + prop + "=" + model[prop]+ "&";        
      }
     

      this.apiService.postForm('/account/signup/', form_data);

    }
    // else: createModel called setState to set the appropriate validation messages
  }

}