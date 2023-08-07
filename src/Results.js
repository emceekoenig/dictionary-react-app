import React from "react";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results p-4">
        <h4 className="Pronounciation text-muted  mb-0">
          {props.results[0].hwi.prs[0].mw}
        </h4>

        <p className="AudioFile">{props.results[0].hwi.prs[0].sound.audio}</p>

        {props.results.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
