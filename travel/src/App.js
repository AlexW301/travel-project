/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import USAMap from "react-usa-map";

function App() {
  let mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
  return (
    <div className="App">
      <div className="map-area">
        <h1 className="heading">Find Us on The Map!</h1>
        <USAMap className="USA-map" onClick={mapHandler} />
      </div>
      <div className="temp-space" id="test"></div>
    </div>
  );
}

export default App;
