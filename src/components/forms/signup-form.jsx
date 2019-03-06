import React, { Component } from 'react';
import { FormState, Form } from 'react-formstate';
import RfsInput from '../inputs/rfs-bootstrap/RfsInput'

// Using the optional validation library to demonstrate fluent api
import { validationAdapter, library as vlib } from 'react-formstate-validation';
validationAdapter.plugInto(FormState);

import './signup-form.css';

export default class SignupForm extends Component {

  constructor(props) {
    super(props);

    // This is an instance of the API. It will bind to
    // form fields configured in your JSX. It normally
    // assumes state is held in this.state, but you can configure
    // it to work with a state management solution like Redux.
    this.formState = FormState.create(this);

    this.state = {};

    // defaults to show on change
    this.formState.showMessageOn('blur');
    this.formState.setEnsureValidationOnBlur(true);

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);   
    // this.handleEmailChange = this.handleEmailChange.bind(this);
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
      <Form formState={this.formState} onSubmit={this.handleSubmit}>

        <div className="top-margin">
          <RfsInput
            formField='username'
            label='Username *'
            required
            fsv={v => v.regex(/^\S+$/).msg('Username must not contain spaces')}
            handleValueChange={v => this.handleUsernameChange(v)}
            autoComplete='off'
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
            handleValueChange={this.handleEmailChange}
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
              label= 'Confirm Password'
              required
              preferNull
            />
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-lg-8">
            <label className="checkbox" >
              <input type="checkbox" />
              I've read the <a href="page_terms.html">Terms and Conditions</a>
            </label>

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
        if (username.toLowerCase() === 'taken' || username.toLowerCase() === 'huckle') {
          fieldState.setInvalid('Username already exists');
        } else {
          fieldState.setValid('Verified');
        }
        context.updateFormState();
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
      alert(JSON.stringify(model)); // proceed with valid data
    }
    // else: createModel called setState to set the appropriate validation messages
  }

}