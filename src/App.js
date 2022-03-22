import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Main from "./Main";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth/>
    </div>
  );
}

export default App;
