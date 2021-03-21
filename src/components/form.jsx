import React, { useState, useContext } from "react";
import axios from "axios";

import "./form.css";

function Form(props) {
  const [zipcode, setZipcode] = useState("");
  const [n, setN] = useState("");
  const [prob, setProb] = useState("");

  const computeClick = (e) => {
    // e.preventDefault();

    const url =
      "https://us-central1-useful-lattice-308300.cloudfunctions.net/function-2";
    axios
      .post(url, {
        zipcode: { zipcode },
        n: { n },
      })
      .then((response) => setProb(response.data.id));
    // .catch((error)=>{
    //     console.log(error);
    //     //   this.setState({onError: true});
    //  });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };

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
          onClick={(e) => computeClick()}
        >
          GO
        </button>
      </div>
    </div>
  );
}

export default Form;
