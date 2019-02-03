import React from 'react';

const Navbar = () => {
    return (

        <div class="container">
            <div class="navbar-header">
                /* Button for smallest screens */
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                <a class="navbar-brand" href="#"><img src="../assets/images/logo.png" alt="Progressus HTML5 template" /></a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav pull-right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">More Pages <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Left Sidebar</a></li>
                            <li><a href="#">Right Sidebar</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Contact</a></li>
                    <li class="active"><a class="btn" href="#">SIGN IN / SIGN UP</a></li>
                </ul>
            </div>
        /*.nav-collapse */
        </div>

    );
};