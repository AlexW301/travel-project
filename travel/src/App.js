/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import USAMap from "react-usa-map";
import adamAndRachelPic from './photos/adam-and-rachel-temp.jpeg'

function App() {
  let mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
  return (
    <div className="App">
      <div className="intro-section">
        <header className="header">
          <ul className="main-nav">
            <li className="nav-item"><a href="#" className="nav-link">Where We've Been</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Current Location</a></li>
          </ul>
        </header>
        <div className="intro-section-top">
            <img src={adamAndRachelPic} className="hero-image" alt="#"/>
            <div className="hero-text">
              <h1 className="hero-header">A Little Bit About Us</h1>
              <p className="hero-sub-header">Our names are Adam and Rachel and we are traveling the countryin our camper truck. Our goal is to travel across the country and see as much as possible.</p>
            </div>
        </div>
        <div className="intro-section-bottom">
          <p className="see-our-journey-text">See Our Journey</p>
        </div>
      </div>

      <div className="map-section">
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
      <div className="temp-space" id="test">
      </div>
      <div className="temp-space2" id="test2">
      </div>
    </div>
  );
}

export default App;
