import "./App.css";
import React , { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";
// import About from "./components/About";


function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  const showAlert = (message , type) =>
  {
    setAlert({
      msg : message,
      type : type
    })
    // Now niche wala hum ku use kr re explain abhi apne jaise dark mode on kiya message aayega ar apne use cross se cut kr diya so wo chala gya now alert ki value still usme values rahengi but wo chala gya so agr ab ap phir enable dark mode karoge so wo nahi aayega kunki apne cross krke hata diya and alert null bhi nahi hua so you have to refersh the page ,but niche time out se hm use fir null kr denge ar phir use bula denge even if i delete it.
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
      showAlert("Light mode has been successfully enabled" , "success");
      document.title = "TextUtils-LightMode"; // changing the text aside the favicon
      var link = document.querySelector("link[rel*='icon']"); // changing the favicon in light mode.
      link.href = 'text-format (2).png';
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(3 ,2, 37)';
      document.body.style.color = 'white';
      let ele = document.getElementById('MyBox');
      ele.style.backgroundColor ='rgb(3,2,37)';
      showAlert("Dark mode has been successfully enabled" , "success");
      document.title = "TextUtils-DarkMode";
      var link = document.querySelector("link[rel*='icon']");
      link.href = 'text-format (1).png';
    }
  }
  return (

    <>
      <Navbar title="textUtils" aboutText="About TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      {/* <Alert alert = {alert}/> */}
      <div className="container my-7" >
        <TextForm heading = "Enter the text" mode = {mode} showAlert = {showAlert}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
