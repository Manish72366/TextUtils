
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextForm from './TextForm';
import About from './About';
export default function Navbar(props) {
  const setFavbarHome = () =>
  {
    document.title = "TextUtils-Home";
  };
  const setFavbarAbout = () =>
  {
    document.title = "TextUtils-About";
  };
  const changeBgColor =  (clr) =>
  {
    document.body.style.backgroundColor = clr;
    document.body.style.color = 'white';
    let ele = document.getElementById('MyBox');
    ele.style.backgroundColor = clr;
    ele.style.color = 'white';
    // i am trying to replicate the same thing for about also but if you look to the about code so inside the html we are changing the color so that will replicate things. 
    // let ele1 = document.getElementsByClassName('abt');
    // ele1.style.backgroundColor = clr;
    // ele1.style.color = 'white';
  };
  const changeBgColorRed =  () =>
  {
    changeBgColor("red");
  };
  const changeBgColorGreen =  () =>
  {
    changeBgColor("green");
  };
  const changeBgColorPurple =  () =>
  {
    changeBgColor("blueviolet");
  };
  const changeBgColorBlue =  () =>
  {
    changeBgColor("blue");
  };
  
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> {/* Curly bracket and then backticks helps us to use  template literal inside the whole string ${} use to write js things inside */}
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${props.active}`} aria-current="page" to="/" onClick={setFavbarHome}>Home</Link> {/* remove active className bcz usse hamesa hi home active rhta tha*/}
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${props.active}`} to="/about" onClick={setFavbarAbout}>{props.aboutText}</Link> {/* href = "/" means link to the same page where you are */}
          </li>
        </ul>
        {/* <button className='btns' id = "red" onClick={changeBgColor('red')} >red</button> this set the color to red without clicking to it so use function to overcome the problem , simple onClick ko ek function chayiye hota hai function call ni*/}
        <button className='btns' id = "red" onClick={changeBgColorRed} ></button>
        <button className='btns' id = "green" onClick={changeBgColorGreen}></button>
        <button className='btns' id = "purple" onClick={changeBgColorPurple}></button>
        <button className='btns' id = "blue" onClick={changeBgColorBlue}></button>
      
     
        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}> {/* text-light to do text color white*/}
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
        </div>
      </div>
    </div>
  </nav>
  </>
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