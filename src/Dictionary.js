import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Error from "./Error";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [error, setError] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryReponse(response) {
    if (response.data.status === "not_found") {
      setError(response.data.message);
    } else {
      setResults(response.data);
    }
  }

  function handleImagesResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = process.env.REACT_APP_DICTIONARY_API_KEY;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios
      .get(apiUrl)
      .then(handleDictionaryReponse)
      .catch((error) => setError(error));

    let imagesApiKey = process.env.REACT_APP_IMAGES_API_KEY;
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
