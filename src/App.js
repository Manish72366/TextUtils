import "./App.css";
import React , { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";
import About from "./components/About";
// go to react router and from there you can see this code  and put here.
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"

function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  const showAlert = (message , type) =>
  {
    setAlert({
      msg : message,
      type : type
    })
    
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>
  {
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // whole body have backgroun white
      document.body.style.color = 'black'; // whole body text color = black
      let ele = document.getElementById('MyBox');// MyBox id element is in TextForm.js 
      ele.style.backgroundColor ='white'; // applying backgroun color to the TextForm
      // showAlert("Light mode has been successfully enabled" , "success");
      document.title = "TextUtils-LightMode"; // changing the text aside the favicon
      var link = document.querySelector("link[rel*='icon']"); // changing the favicon in light mode.
      link.href = 'light.png';
      // Below is the code for changing text title in a interval to attract the user bad experience
      // setInterval(() => {
      //   document.title = "Install It Fast";
      // }, 600);
      // setInterval(() => {
      //   document.title = "Bhai jldi";
      // }, 500);
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(3 ,2, 37)';
      document.body.style.color = 'white';
      let ele = document.getElementById('MyBox');
      ele.style.backgroundColor ='rgb(3,2,37)';
      // showAlert("Dark mode has been successfully enabled" , "success");
      document.title = "TextUtils-DarkMode";
      var link = document.querySelector("link[rel*='icon']");
      link.href = 'dark.png';
    }
  }
  return (

    <>
     <BrowserRouter>
      <Navbar title="textUtils" aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
      {/* <TextForm heading="Enter the text to analyze below" mode = {mode} /> */}
      {/* <Alert alert = {alert}/> */}
      <div className="container my-7" >
        {/* this we took from react router  */}
        {/* meaning of this that we click on home about and so on so how we switch to those pages */}
        {/* exact path matches exact path and simply write path matches partially so always write exact */}
        {/*react  router used to switch in pages without loading page as single page experience it gaves to us*/}
        <Routes>   
          <Route exact path="/about" element={<About mode = {mode} />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode = {mode} />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
