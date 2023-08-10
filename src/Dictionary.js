import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Error from "./Error";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [error, setError] = useState(null);

  function handleResponse(response) {
    if (response.data.status === "not_found") {
      setError(response.data.message);
    } else {
      setResults(response.data);
    }
  }

  function search() {
    let apiKey = `5REMOVED`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => setError(error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (error) {
    return <Error />;
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder="Search for a word"
              defaultValue={props.defaultKeyword}
              className="form-control"
              alt="Search"
              title="Search"
            />
          </form>
          <p className="mt-3">
            <small>
              <em>i.e. gumption, perquisite, zenith</em>
            </small>
          </p>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
