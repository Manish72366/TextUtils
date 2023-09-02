import React, { useState  , useEffect} from "react"; // use state is a hook search react hook for more info
// Text is a state variable.
export default function TextForm(props) {
  const [text, setText] = useState("");
  const [undo, setUndo] = useState("Undo");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  useEffect(() => {
    // Fetch available voices when the component mounts
    window.speechSynthesis.onvoiceschanged = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      setSelectedVoice(availableVoices[0]); // Select the first voice by default
    };
  }, []);
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
    props.showAlert("Deleted , want to Undo ?" , "danger");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/); 
    setText(newText.join(" ")); 
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
  function setColor() {
    let x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
  }
  
  const handleCopy = () =>
  {
    setUndo(text);
    navigator.clipboard.writeText(text);  // we have to method writeText and readText inside this.
    document.getSelection().removeAllRanges(); // wo jo copy krke blue blue ni ata text pe toh usse hatane ke liye
    props.showAlert("Copy to Clipboard" , "success");
  }
  const handleCut = () =>
  {
    navigator.clipboard.writeText(text);
    setUndo(text);
    setText("");
  }
  
  const handleSpeak = () => {
    if (selectedVoice) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.voice = selectedVoice;
      window.speechSynthesis.speak(speech);
    }
  };
  const handlePaste = () =>
  {
     setText(text + " " + undo);
  }
  // event which has been happen
  const handleOnChange = (event) => {
    console.log("Onchange function run");
    setText(event.target.value);
  };
  
  
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)'}} id="MyBox" rows="8" ></textarea> 
        </div>
        <button disabled = {text.split(" ").filter((ele) =>{return ele.length != 0}).length == 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> Convert to Uppercase </button>
        <button disabled = {text.split(" ").filter((ele) =>{return ele.length != 0}).length == 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase </button>
        <button disabled = {text.length == 0} className="btn btn-primary mx-2 my-2" onClick={Delete}> Delete </button>
        <button className="btn btn-primary mx-2 my-2" onClick={Undo}> Undo </button>
        <button disabled = {text.split(" ").filter((ele) =>{return ele.length != 0}).length == 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}> Copy  </button>
        <button disabled = {text.split(" ").filter((ele) =>{return ele.length != 0}).length == 0} className="btn btn-primary mx-2 my-2" onClick={handleCut}> Cut </button>
        <button  className="btn btn-primary mx-2 my-2" onClick={handlePaste}> Paste </button>
        <button disabled = {text.split(" ").filter((ele) =>{return ele.length != 0}).length == 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button disabled = {text.split(" ").filter((ele) =>{return ele.length != 0}).length == 0} className="btn btn-primary mx-2 my-2" onClick={Alternate}>bade chote</button>
        <button disabled = {text.split(" ").filter((ele) =>{return ele.length != 0}).length == 0} className="btn btn-primary mx-2 my-2" onClick={Reverse}>Reverse</button>
        <select onChange={(e) => {
            const selectedVoiceIndex = e.target.value;
            setSelectedVoice(voices[selectedVoiceIndex]);
          }}
        >
          {voices.map((voice, index) => (
            <option key={index} value={index}>
              {voice.name}
            </option>
          ))}
        </select>
        <button
          disabled={text.split(" ").filter((ele) => ele.length !== 0).length === 0}
          className="btn btn-primary mx-2 my-2"
          id="spk"
          onClick={handleSpeak}
        >
          Speak
        </button>
        
        
      </div>
      <div className="container my-3">
        
        <h2>Your text summary </h2>
        <p><b>{text.split(/\s+/).filter((ele) => {return ele.length != 0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p>{0.008 * (text.split(/\s+/).filter((ele) => {return ele.length != 0}).length)} Minutes read</p> 
        <h3>Preview</h3>
        <p><b>{text}</b></p>
      </div>

    </>
  );
}
