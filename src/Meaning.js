import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning pb-3">
      <h3 className="PartsOfSpeech">{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        if (index <= 1) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <Examples examples={definition.examples} />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        }
      })}
    </div>
  );
}
