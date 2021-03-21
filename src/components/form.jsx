import React, { useState, useContext } from "react";
import axios from "axios";

import "./form.css";

function Form(props) {
  const [zipcode, setZipcode] = useState("");
  const [n, setN] = useState("");
  const [prob, setProb] = useState("");
  const [results, setResults] = useState(False);

  const computeClick = (e) => {
    // e.preventDefault();

    const url =
      "https://us-central1-useful-lattice-308300.cloudfunctions.net/function-3";
    axios
      .post(url, {
        zipcode: { zipcode },
        n: { n },
      })
      .then((response) => setProb(response.data.id))
      .then((response) => setResults(True));

    // .catch((error)=>{
    //     console.log(error);
    //     //   this.setState({onError: true});
    //  });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };

  return (
    <div> {results  ? <div>Yay!</div> : <div>Not yet</div>} </div>
    <div className="SignUpBox-Container">
      <p className="SignUpBox-WelcomeMsg">ShouldWeGather?</p>
      <p className="SignUpBox-Msg">"what’s up friend, tryna gather tonight?"</p>
      <p className="SignUpBox-Msg">
        "naw man, there’s a 66.7% chance that one of us has COVID if we gather
        in this group of 17 in the zipcode of 91502."
      </p>

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
          onClick={(e) => computeClick()}
        >
          GO
        </button>
      </div>
    </div>
  );
}

export default Form;
