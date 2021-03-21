import React, { useState, useContext } from "react";
import axios from "axios";

import "./results.css";

function Results(props) {
  const [zipcode, setZipcode] = useState("");
  const [n, setN] = useState("");
  const [prob, setProb] = useState("");

  return (
    <div className="ResultsBox-Container">
      <div className="ResultsBox-Prob">{props.prob}%</div>

      <p className="ResultsBox-WelcomeMsg">
        likely that at least one person in your gathering of {props.n} has
        COVID-19.
      </p>

      <div className="ResultsBox-Text">So yeah, don't do this. </div>
      <div className="ResultsBox-Text">
        Even if the number may seem small, the consequences are huge! And
        numbers update each day.{" "}
      </div>
    </div>
  );
}

export default Results;
