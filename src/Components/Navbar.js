import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Navbar(props) {

  const [modetext, modetext1] = useState("Dark Mode On");

  const checkbox = document.getElementsByClassName('form-check-input');

  const modeText = () => {
    if(modetext === "Dark Mode On") {
      modetext1("Dark Mode Off");
      checkbox.backgroundColor = 'grey';
    }

    else {
      modetext1("Dark Mode On");
      checkbox.backgroundColor = 'white';

    }
  }

  return (
      <nav className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand me-4" to="/">{props.title}</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item me-4 md-me-2 pt-2 md-pt-2">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            
            <li className="nav-item me-4 md-me-2 pt-2 md-pt-4">
              <Link className="nav-link active" to="/About">{props.aboutText}</Link>
            </li>

            <li className= {`nav-item form-check form-switch md-me-2 pt-3 md-pt-4 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
              <div>
              <input className="form-check-input" onClick={() => { modeText(); props.toggleMode(); }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label ms-1" htmlFor ="flexSwitchCheckDefault">{modetext}</label>
              </div>
            </li>
            
          </ul>
          
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" type="submit">Search</button>
          </form>

        </div>
      </div>
</nav>

  )
}


Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
}