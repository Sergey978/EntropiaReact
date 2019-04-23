import React from 'react';

const Navbar = () => {   
   const pageData = viewBag.page;
   const userData = viewBag.user; 
    return (
       
            <div className="container">
                <div className="navbar-header">

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/"><img src="../assets/images/logo.png" alt="Progressus HTML5 template" /></a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav pull-right">                                           
                        <li className={( pageData.pageName =="Home")?("active"):("")}><a href="/">Home</a></li>
                        <li className={(pageData.pageName =="About")?("active"):("")}><a href="/home/about">About</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">More Pages <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="/left-sidebar">Left Sidebar</a></li>
                                <li><a href="/right-sidebar">Right Sidebar</a></li>
                            </ul>
                        </li>
                        <li className={(pageData.pageName =="Contact")?("active"):("")}><a href="/home/contact">Contact</a></li>                      
                      <li><a className="btn" href="/manage">{userData.userName.trim() === "" ? 'SIGN IN / SIGN UP':userData.userName} </a></li>
                       
                    </ul>
                </div>

            </div>
       
    );
};

export default Navbar;