import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning pb-3">
      <h4 className="PartsOfSpeech text-muted">{props.meaning.fl}</h4>

      {props.meaning.shortdef.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li className="text-muted">{definition}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
