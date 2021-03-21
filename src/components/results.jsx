import React, { useState, useContext } from "react";
import axios from "axios";

import "./results.css";

function Results(props) {
  const [zipcode, setZipcode] = useState("");
  const [n, setN] = useState("");
  const [prob, setProb] = useState("");

  return (
    <div className="SignUpBox-Container">
      <p className="SignUpBox-WelcomeMsg">Should We Gather?</p>
      <div className="SignUpBox-InputTable">
        <div className="SignUpBox-InputRow">
          <label className="SignUpBox-InputCell">Your ZIP code: </label>
          <input
            onChange={(e) => setZipcode(e.target.value)}
            className="SignUpBox-InputCell"
            id="signUpBox-EmailInput"
            type="number"
            value={zipcode}
          />
        </div>
        <div className="SignUpBox-InputRow">
          <label className="SignUpBox-InputCell">Size of Gathering: </label>
          <input
            onChange={(e) => setN(e.target.value)}
            className="SignUpBox-InputCell"
            id="signUpBox-PasswordInput"
            type="number"
            value={n}
          ></input>
        </div>
      </div>
      <div className="SignUpBox-InputRow">
        <button
          className="SignUpBox-SignUpButton"
          onClick={() => computeClick()}
        >
          GO
        </button>
      </div>
    </div>
  );
}

export default Form;
