import React, { Component } from 'react';
import Navbar from '../navbar';
import SignupForm from '../forms/signin-form.jsx';
import Footer from '../footer';

export default class SigninApp extends Component {

  render() {
    return (
      <div>
        <Navbar />

        <header id="head" className="secondary"></header>

        {/*  <!-- container --> */}
        <div className="container">
          {/* breadcum  */}
          <ol className="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li className="active">User access</li>
          </ol>
          {/* end bredacum */}
          <div className="row">
            {/*  	<!-- Article main content --> */}

            <article className="col-xs-12 maincontent">

              <header className="page-header">
                <h1 className="page-title">Sign in</h1>
              </header>
              <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h3 className="thin text-center">Sign in to your account</h3>

                    <p className="text-center text-muted">Lorem ipsum dolor sit amet, <a href="/signup">Register</a> adipisicing elit. Quo nulla quibusdam cum doloremque incidunt nemo sunt a tenetur omnis odio. </p>
                    <hr />
                    <SignupForm />
                  </div>
                </div>
              </div>
            </article>
            { /* <!-- /Article -->  */}
          </div>
        </div> {  /*  <!-- /container -->*/}

        {  /*  <!-- footer -->*/}
        <Footer />
      </div>
    );
  };
}
