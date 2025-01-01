// App.js
import React, { useState } from "react";
import { data } from "../data/data";

const SelectBox = () => {
  // States for selected values
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Function to get states for the selected country
  const getStates = () => {
    const country = data.find((c) => c.country === selectedCountry);
    return country ? country.states : [];
  };

  // Function to get cities for the selected state
  const getCities = () => {
    const states = getStates();
    const state = states.find((s) => s.state === selectedState);
    return state ? state.cities : [];
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Country, State, City Selector</h1>

      {/* Country Dropdown */}
      <div>
        <label>Country: </label>
        <select
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setSelectedState(""); // Reset state when country changes
            setSelectedCity(""); // Reset city when country changes
          }}
        >
          <option value="">Select Country</option>
          {data.map((country, index) => (
            <option key={index} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      <div>
        <label>State: </label>
        <select
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedCity(""); // Reset city when state changes
          }}
          disabled={!selectedCountry} // Disable if no country selected
        >
          <option value="">Select State</option>
          {getStates().map((state, index) => (
            <option key={index} value={state.state}>
              {state.state}
            </option>
          ))}
        </select>
      </div>

      {/* City Dropdown */}
      <div>
        <label>City: </label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState} // Disable if no state selected
        >
          <option value="">Select City</option>
          {getCities().map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Display Selection */}
      <div style={{ marginTop: "20px" }}>
        <h3>Selected Values:</h3>
        <p>Country: {selectedCountry}</p>
        <p>State: {selectedState}</p>
        <p>City: {selectedCity}</p>
      </div>
    </div>
  );
};

export default SelectBox;
