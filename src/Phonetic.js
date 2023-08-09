import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio)
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>
      </div>
    );
}
