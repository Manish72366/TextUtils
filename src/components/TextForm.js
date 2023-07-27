import React, { useState } from "react"; // use state is a hook search react hook for more info
// Text is a state variable.
export default function TextForm(props) {
 
  const [text, setText] = useState("Likho"); // this we take from react hook from google it tells that text will set the value to the first para which use state returns and setText will take the 2nd para value . simply ap jb text ko update karoge to wo setText function se hi hoga  by default the text is Likho
  const [undo , setUndo] = useState("Undo");
  // text = "manish" updation by this is not allowed here.  wrong way to change the state as text is state.
  //   setText("New text"); // correct way to change the state
  // console khol ke sab dekh lo.
  const handleUpClick1 = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleUpClick2 = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleUpClick3 = () => {
    console.log("Delete");
    setUndo(text);
    setText("");
  };
  const handleUpClick4 = () => {
    console.log("Undo");
    setText(undo);
  };
  // event which has been happen 
  const handleOnChange = (event) => {
    console.log("Onchange function run");
    setText(event.target.value); // this means that what ever user try to type , write here also before using this event.target.value we can't able to write anything inside the text. so new text will updated
  };
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>  {/* value = {text} means textarea mai pre written text hoga  ar usko change aap kr skte ho setText se Now onChange used when you try to write in the text area now listen if you remove value so you can easily write any thing but value block your area to write so we have to use onChange here as on change happen we are calling a function handleOnChange . so onChange is important to write  */}
      </div>
      <button className="btn btn-primary" onClick={handleUpClick1}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary" onClick={handleUpClick2}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary" onClick={handleUpClick3}>
       Delete
      </button>
      <button className="btn btn-primary" onClick={handleUpClick4}>
       Undo
      </button>
    </>
  );
}
