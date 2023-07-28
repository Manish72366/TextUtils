import React, { useState } from "react"; // use state is a hook search react hook for more info
// Text is a state variable.
export default function TextForm(props) {
  const [text, setText] = useState(""); // this we take from react hook from google it tells that text will set the value to the first para which use state returns and setText will take the 2nd para value . simply ap jb text ko update karoge to wo setText function se hi hoga  by default the text is Likho
  const [undo, setUndo] = useState("Undo");
  // text = "manish" updation by this is not allowed here.  wrong way to change the state as text is state.
  //   setText("New text"); // correct way to change the state
  // console khol ke sab dekh lo.
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    setUndo(newText);
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    setUndo(newText);
  };
  const Delete = () => {
    console.log("Delete");
    setUndo(text);
    setText("");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/); // this will split all the words which have one or more spaces. // here we use REGEX in js to split it .
    setText(newText.join(" ")); // now join each word with a single space.
  };
  const Undo = () => {
    console.log("Undo");
    setText(undo);
  };

  const Alternate = () => {
    let len = text.length;
    let newText1 = "";
    for(let i = 0 ; i < len ; i++)
    {
        if(i% 2 == 0)
        {
          newText1 += text[i].toLowerCase();
        }
        else{
          newText1 += text[i].toUpperCase();
        }
    }
    setText(newText1);
  };
  const Reverse = () => {
    let len = text.length;
    let newText = "";
    for (let i = len - 1 ; i >= 0 ;i--)
    {
        newText += text[i];
    }
    setText(newText);
  };

  // The Clipboard API can be used to implement cut, copy, and paste features within a web application. EventTarget Clipboard. The system clipboard is exposed through the global Navigator.clipboard property.
  const handleCopy = () =>
  {
    setUndo(text);
    navigator.clipboard.writeText(text);
  }
  const handleCut = () =>
  {
    navigator.clipboard.writeText(text);
    setUndo(text);
    setText("");
  }
  const handlePaste = () =>
  {
     setText(text + " " + undo);
  }
  // event which has been happen
  const handleOnChange = (event) => {
    console.log("Onchange function run");
    setText(event.target.value); // this means that what ever user try to type , write here also before using this event.target.value we can't able to write anything inside the text. so new text will updated
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>{" "}
          {/* value = {text} means textarea mai pre written text hoga  ar usko change aap kr skte ho setText se Now onChange used when you try to write in the text area now listen if you remove value so you can easily write any thing but value block your area to write so we have to use onChange here as on change happen we are calling a function handleOnChange . so onChange is important to write  */}
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> Convert to Uppercase </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase </button>
        <button className="btn btn-primary mx-2 my-2" onClick={Delete}> Delete </button>
        <button className="btn btn-primary mx-2 my-2" onClick={Undo}> Undo </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}> Copy  </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCut}> Cut </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlePaste}> Paste </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2 my-2" onClick={Alternate}>bade chote</button>
        <button className="btn btn-primary mx-2 my-2" onClick={Reverse}>Reverse</button>
      </div>
      <div className="container my-3">
        
        <h2>Your text summary </h2>
        <p><b>{text.split(" ").length - 1}</b> words and <b>{text.length}</b> </p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes read</p>  {/* on avg the time taken to read one word is  0.008 minute */}
        <h3>Preview</h3>
        <p><b>{text}</b></p>
      </div>

    </>
  );
}
