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
        <h1 className="heading">Click A Location On The Map!</h1>
        <USAMap className="USA-map" onClick={mapHandler} />
        <div className="legend-area">
            <ul className="legend">
                <li className="legend-item"><div className="legend-color"></div><p className="legend-text">Visited</p></li>
                <li className="legend-item"><div className="legend-color"></div><p className="legend-text">Not Visited</p></li>
                <li className="legend-item"><div className="legend-color"></div><p className="legend-text">Current Location</p></li>
            </ul>
        </div>
      </div>
      <div className="temp-space" id="test"></div>
    </div>
  );
}

export default App;
