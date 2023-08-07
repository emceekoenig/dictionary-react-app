import React from "react";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results p-4">
        <h2 className="mb-2 WordMain">{props.results[0].meta.stems[0]}</h2>

        <h4 className="text-muted Pronounciation">
          {props.results[0].hwi.prs[0].mw}
        </h4>

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
