import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.com/products/json#sec-2.syns
    let apiKey = "ee2ed5f8-4097-4ffc-8010-10292a4ecce4";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h4>What word do you want to look up?</h4>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="Search for a word"
            className="form-control"
          />
        </form>
        <p className="mt-3">
          <small>
            <em>i.e. gumption, perquisite, zenith</em>
          </small>
        </p>
      </section>

      <section className="word">
        <h2>{keyword}</h2>
      </section>

      <Results results={results} />
    </div>
  );
}
