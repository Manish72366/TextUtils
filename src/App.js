import React , { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";


function App() {
  const [mode , setMode] = useState('light');
  const toggleMode = () =>
  {
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // whole body have backgroun white
      document.body.style.color = 'black'; // whole body text color = black
      let ele = document.getElementById('MyBox');// MyBox id element is in TextForm.js 
      ele.style.backgroundColor ='white'; // applying backgroun color to the TextForm
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(3 ,2, 37)';
      document.body.style.color = 'white';
      let ele = document.getElementById('MyBox');
      ele.style.backgroundColor ='rgb(3,2,37)';
    }
  }
  return (

    <>
      <Navbar title="textUtils" aboutText="About TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container my-7" >
        <TextForm heading = "Enter the text" mode = {mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
