import React, { Component } from 'react';

import './signup-form.css';

export default class SignupForm extends Component {
    render() {
        return (
            <form method = "post" action = "/account/signup/">
                <div className="top-margin">
                    <label>Login Name</label>
                    <input type="text" className="form-control" name = "loginName" />
                </div>                
                <div className="top-margin">
                    <label>Email Address <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" name="email" />
                </div>

                <div className="row top-margin">
                    <div className="col-sm-6">
                        <label>Password <span className="text-danger">*</span></label>
                        <input type="text" className="form-control"  name="password"/>
                    </div>
                    <div className="col-sm-6">
                        <label>Confirm Password <span className="text-danger">*</span></label>
                        <input type="text" className="form-control"  name="confirmPassword"/>
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
            </form>
        );
    }

}