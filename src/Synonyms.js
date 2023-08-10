import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <ul>
          Synonyms:
          {props.synonyms.map(function (synonyms, index) {
            return (
              <li
                key={index}
                className="Synonyms"
              >
                {synonyms}
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
