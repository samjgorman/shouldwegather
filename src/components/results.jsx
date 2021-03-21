import React, { useState, useContext } from "react";
import axios from "axios";

import "./results.css";

function Results(props) {
  const [zipcode, setZipcode] = useState("");
  const [n, setN] = useState("");
  const [prob, setProb] = useState("");

  return (
    <div className="SignUpBox-Container">
      <p className="SignUpBox-WelcomeMsg">
        The probability that at least one person in your gathering of {n} has
        COVID-19 is {prob}.
      </p>
    </div>
  );
}

export default Form;
