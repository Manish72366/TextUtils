import "./App.css";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar title="textUtils" aboutText="About TextUtils" />
      {/* // so basically container is a class of bootstrap which provide some other decorations to this text form  */}
      <div className="container my-7">
        {/* <TextForm heading = "Enter the text"/> */}
      </div>
      <About/>
    </>
  );
}

export default App;
