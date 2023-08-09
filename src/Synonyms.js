import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <ul>
          Synonyms:
          {props.synonyms.map(function (synonym, index) {
            return (
              <li
                key={index}
                className="Synonyms"
              >
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
