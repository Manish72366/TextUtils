
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> {/* Curly bracket and then backticks helps us to use  template literal inside the whole string ${} use to write js things inside */}
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a> {/* href = "/" means link to the same page where you are */}
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li> {/* non closing tags like hr should close by /> */}
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success mx-3" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}> {/* text-light to do text color white*/}
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

// To define what are the data types of props you are going to send if that are been different than assigned so show an error in console . other wise error won't show in console.  so glti pakdi jaaye we defined this.
Navbar.propTypes = {
    title : PropTypes.string,
    // title : PropTypes.string.isRequired, means if you forget to send the title so it will show you an error in console.
    aboutText : PropTypes.string.isRequired
};

Navbar.defaultProps = {
     title : "Set krna bhai title",
     aboutText : "About"
}