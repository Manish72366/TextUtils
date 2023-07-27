import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));// This will take element from index.html as that is DOM.
root.render( // same work as putting something inside the innner HTML.
//This will help you to not do any casuality in your js which can cause a big error in the file 
   <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // Fix poor user experiences on your site. The Core Web Vitals report shows how your pages perform, based on real world usage data (sometimes called field data). You can read more about this initiative on the Google Search Central blog.
