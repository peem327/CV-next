import React from 'react';
import Link from "next/link";





class Navbar extends React.Component {
 

  render() {
   
  
    return (
 
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="/">I'm Peem</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <li className="nav-item nav-link link-color"><Link href="/">Home</Link></li>
              <li className="nav-item nav-link link-color"><Link href="/about">Profile</Link></li>
              <li className="nav-item nav-link link-color"><Link href="/contact">Contact</Link></li>
            </div>
          </div>
        </nav>   
      </div>
    );
  }
}

export default Navbar;
