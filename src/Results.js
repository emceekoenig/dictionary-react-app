import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="Word">{props.results[0].meta.id}</h2>
          <h4 className="Pronounciation text-muted  mb-0">
            {props.results[0].hwi.prs[0].mw}
          </h4>

          <p className="AudioFile">{props.results[0].hwi.prs[0].sound.audio}</p>
        </section>

        {props.results.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
