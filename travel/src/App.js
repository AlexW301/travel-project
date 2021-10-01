/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import USAMap from "react-usa-map";
import profileTemp from './photos/profile-temp.jfif'
import { IoChevronDownOutline } from "react-icons/io5";

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
            <div className="hero-text">
              <h1 className="hero-header">LIFE IS AN ADVENTURE</h1>
              <p className="hero-sub-header">Go Explore It</p>
            </div>
        </div>
        <div className="intro-section-bottom">
        <div className="about-us-img">
          <img src={profileTemp} alt="#" className="profile-img"/>
        </div>
          <div className="about-us-text">
          <p className="about-us-header">A Little Bit About Us!</p>
          <p className="about-us-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <a className="chevron-down-link" href="#map"><IoChevronDownOutline className="chevron-down" /></a>
        </div>
      </div>

      <div className="map-section" id="map">
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
