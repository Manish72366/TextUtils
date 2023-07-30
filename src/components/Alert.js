import React from 'react'

export default function Alert(props) {
    // Now we want to capitalize first character of each word so we are doing this . we are not captilize directly within sending here as all these word are intialize as it is in bootstrap so if you send them other then the predefined so you can't see proper alert message
    const capitalize = (word) =>
    {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);// The slice() method returns selected elements in an array, as a new array.
    }
    return (
        props.alert && <div className="container">
        {/* As we have 4 types of message, alert ,success ,warning and danger. so we use js inside below className*/}
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg} {/* alert is object  */}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
         </div> 
    </div>    
  )
}
// Add "homepage": "https://Manish72366.github.io/reactLearning", in first {} from deployment create react app
// and  then run (npm install --save gh-pages)
// Now add 2 scripts ->
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
// And then (npm run deploy)



