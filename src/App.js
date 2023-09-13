import "./App.css";
import React , { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
// go to react router and from there you can see this code  and put here.
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

function App() {
  const [mode , setMode] = useState('light');
  const toggleMode = () =>
  {
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // whole body have background white
      document.body.style.color = 'black'; // whole body text color = black
      document.title = "TextUtils-LightMode"; // changing the text aside the favicon
      var link = document.querySelector("link[rel*='icon']"); // changing the favicon in light mode.
      link.href = 'light.png';
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(3 ,2, 37)';
      document.body.style.color = 'white';
      document.title = "TextUtils-DarkMode";
      link = document.querySelector("link[rel*='icon']");
      link.href = 'dark.png';
    }
  }
  return (
    <>
     <BrowserRouter>
      <Navbar title="textUtils" aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container my-7">
        <Routes>   
          <Route path="*" element={<Navigate to="/textForm"/>} />  making textForm as default page
          <Route exact path="/about" element={<About mode = {mode} active = "true" />} />
          <Route exact path="/textForm" element={<TextForm heading="Enter the text to analyze below" mode = {mode} active = "true"/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}
// ma
export default App;
// $env:NODE_OPTIONS = "--openssl-legacy-provider"