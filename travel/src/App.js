import logo from "./logo.svg";
import "./App.css";
import USAMap from "react-usa-map";

function App() {
  let mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
  return (
    <div className="App">
      <header class="header">
        <h1>Adventure Awaits</h1>
      </header>
      <div className="body">
        <USAMap className="USA-map" onClick={mapHandler} />
      </div>
      {/* <div className="parallax"></div> */}
      <div className="temp-space"></div>
    </div>
  );
}

export default App;
