import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar navbar-inverse navbar-fixed-top headroom" id="navbar">
            <div className="container">
                <div className="navbar-header">

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#"><img src="/assets/images/logo.png" alt="Progressus HTML5 template" /></a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav pull-right">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">More Pages <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Left Sidebar</a></li>
                                <li><a href="#">Right Sidebar</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Contact</a></li>
                        <li className="active"><a className="btn" href="#">SIGN IN / SIGN UP</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;