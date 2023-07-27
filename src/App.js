import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      {/* So we are importing Navbar from Navbar.js so the thing which that file returns has been shown here */}
      <Navbar title="textUtils" aboutText="About TextUtils" />
      {/* <Navbar title = {7} aboutText = "about"/>  this show an error in console as title is integer*/}
      <Navbar /> {/* Default props values will be assigned*/}
      <Navbar title = "manish"/>
    </>
  );
}

export default App;
